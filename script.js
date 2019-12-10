let token = localStorage.getItem('token');

const $eventList = $('#eventList');

const $bdy = $('#bdy');
const $sidebar = $('#sidebar');


async function deleteEvent(id) {
    const result = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/public/events/'.concat(id),
        headers: {Authorization: `Bearer ${(token)}`}
      });
    location.reload();
}

async function logout() {

    localStorage.setItem('token', " ");



    location.reload();
}




$(async function () {

    var loggedIn;
    try {
        const result = await axios({
            method: 'GET',
            url: 'http://localhost:3000/account/status',
            headers: {Authorization: `Bearer ${(token)}`}
        });
        loggedIn = true;
    } catch {
        loggedIn = false;
    }

    if (loggedIn) {
        $sidebar.append(
            `
            <p style="text-align:center"><button class="button is-link is-large" style="" id="addAssignment" onclick="location.href = './create/';">Add Assignment</button></p>
            <p style="text-align:center;vertical-align:bottom"><button class="button is-link is-large" style="" id="logout" onclick="logout()";">Logout</button></p>
            `
        )
    } else {
        $sidebar.append(
    `
    <p style="text-align:center"><button class="button is-link is-large" style="" id="login" onclick="location.href = './login/';">Login</button></p>

    `

        )}



    

    $bdy.append(
    `
    <div class="columns" style="height:100%;min-height:100vh">
        <div class="column is-one-fifth" id="leftColumn" style="width:20%">
        </div>
        <div class="column" id="rightColumn" style="width:80%">
            
        </div>
    </div>
    `
    )


    const result = await axios({
        method: 'GET',
        url: 'http://localhost:3000/public/events',
        headers: {Authorization: `Bearer ${(token)}`}
    });


    // $eventList.append(
    //     `
    //     <button class="button is-link" style="" id="addAssignment" onclick="location.href = './create/';">Add Assignment</button>
        
    //     `
    // )


    var list = Object.values(result.data.result);

    var sortedEvents = list.slice().sort((a, b) => b.date - a.date);
    const $rightColumn = $('#rightColumn');
    $rightColumn.append(
        `

        
        `
    )
    var i;
    for (i = 0; i < list.length; i++) {
        $rightColumn.append(
            `
        <p class="" style="padding:5px;width:100%;font-size:150%">
            <div class="columns">
                <div class="column is-one-fifth" style="border-top-style:solid;border-bottom-style:solid;background-color:skyblue;text-align:center;font-size:200%">
                    <p> ${sortedEvents[i].date}  </p>
                    <p> ${sortedEvents[i].time}  </p>

                </div>
                <div class="column" style="border-top-style:solid;border-bottom-style:solid;background-color:skyblue;text-align:center;font-size:200%">
                    <b>${sortedEvents[i].name} </b>
                    <p>${sortedEvents[i].description} </p>
                </div>
                <div class="column is-one-fifth" style="width:8%;border-top-style:solid;border-bottom-style:solid;background-color:skyblue">
                    <button class="button is-danger is-rounded is-centered" style="" id="delete" onclick="deleteEvent(${sortedEvents[i].id})">Delete</button>
                </div>
            </div>
        </p>
            
            `
        )
    }



});