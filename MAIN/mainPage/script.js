let token = localStorage.getItem('token');
let selectedView = localStorage.getItem('defaultView');


const $eventList = $('#eventList');

const $bdy = $('#bdy');
const $sidebar = $('#sidebar');


async function whichDelete(id) {

    if (selectedView == "user") {
        deleteAssignment(id);
    } else if (selectedView == "private") {
        deleteStudentEvent(id);
    } else {
        deleteEvent(id);
    }

}

function parseTime(timeString) {
    var postfix = " AM"
    var hour = timeString.substring(0, 2);
    if (hour.substring(1,2) == ":") {
        hour = hour.substring(0,1);
    }
    if (parseInt(hour) > 12) {
        postfix = " PM"
        hour = parseInt(hour) - 12;
    } 
     
    var min = timeString.substring(timeString.length-2, timeString.length);
    var t = String(hour).concat(":").concat(min).concat(postfix);
    return t;
}

async function whichEdit(id) {

    if (selectedView == "user") {
        localStorage.setItem('editType', "user");
        localStorage.setItem('editId', id);
        location.href = '../edit/edit.html';
    } else if (selectedView == "private") {
        localStorage.setItem('editType', "private");
        localStorage.setItem('editId', id);
        location.href = '../edit/edit.html';
    } else {
        localStorage.setItem('editType', "public");
        localStorage.setItem('editId', id);
        location.href = '../edit/edit.html';
    }


}

async function deleteEvent(id) {
    const result = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/public/events/'.concat(id),
        headers: {Authorization: `Bearer ${(token)}`}
      });
    location.reload();
}

async function deleteStudentEvent(id) {
    const result = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/private/events/'.concat(id),
        headers: {Authorization: `Bearer ${(token)}`}
      });
    location.reload();
}

async function deleteAssignment(id) {
    const result = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/user/events/'.concat(id),
        headers: {Authorization: `Bearer ${(token)}`}
      });
    location.reload();
}

async function viewAssignments() {
    localStorage.setItem('defaultView', "user");
    location.reload();
}

async function viewStudentEvents() {
    localStorage.setItem('defaultView', "private");
    location.reload();
}

async function viewPublicEvents() {
    localStorage.setItem('defaultView', "public");
    location.reload();
}



async function logout() {

    localStorage.setItem('token', " ");
    localStorage.setItem('defaultView', "public");
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
        localStorage.setItem('defaultView', "public");
    }

    if (loggedIn) {
        $sidebar.append(
            `
            <p style="text-align:center;padding:3%"><button class="button is-link is-large" style="width:80%" id="addAssignment" onclick="location.href = '../create/create.html';">Add Assignment/Event</button></p>
            <br>
            <br>
            <br>
            <br>

            <p style="text-align:center;padding:3%"><button class="button is-link is-large" style="width:80%" id="viewAssignments" onclick="viewAssignments()">View Assignments</button></p>
            <p style="text-align:center;padding:3%"><button class="button is-link is-large" style="width:80%" id="viewStudentEvents" onclick="viewStudentEvents()">View Student Event</button></p>
            <p style="text-align:center;padding:3%"><button class="button is-link is-large" style="width:80%" id="viewPublicEvents" onclick="viewPublicEvents()">View Public Events</button></p>
            <p style="text-align:center;padding:3%;vertical-align:bottom"><button class="button is-danger is-link is-large" style="width:80%;position:absolute;bottom:0;left:10%;" id="logout" onclick="logout()";">Logout</button></p>

            `
        )
    } else {
        $sidebar.append(
    `
    <p style="text-align:center"><button class="button is-link is-large" style="" id="login" onclick="location.href = '../index.html';">Login</button></p>

    `
    )}

    $bdy.append(
    `
    <div class="columns" style="height:100%;min-height:100vh">
        <div class="column is-one-fifth" id="leftColumn" style="width:370px">
        </div>
        <div class="column" id="rightColumn" style="width:80%">
            
        </div>
    </div>
    `
    )

    var result;
    if (selectedView == "private") {
        result = await axios({
            method: 'GET',
            url: 'http://localhost:3000/private/events',
            headers: {Authorization: `Bearer ${(token)}`}
        });
    } else if (selectedView == "user") {
        result = await axios({
            method: 'GET',
            url: 'http://localhost:3000/user/events',
            headers: {Authorization: `Bearer ${(token)}`}
        });
    } else {
        result = await axios({
            method: 'GET',
            url: 'http://localhost:3000/public/events',
            headers: {Authorization: `Bearer ${(token)}`}
        });
    }

    var list = Object.values(result.data.result);
    var sortedEvents = list.sort((a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime());
    const $rightColumn = $('#rightColumn');

    var i;
    for (i = 0; i < list.length; i++) {
        $rightColumn.append(
            `
        <p class="" style="padding:5px;width:100%;font-size:150%">
            <div class="columns">
                <div class="column is-one-fifth" style="border-top-style:solid;border-bottom-style:solid;background-color:skyblue;text-align:center;font-size:200%">
                    <p> ${new Date(sortedEvents[i].date).getMonth()}/${new Date(sortedEvents[i].date).getDay()}/${new Date(sortedEvents[i].date).getFullYear()}  </p>
                    <p> ${parseTime(sortedEvents[i].time)} </p>

                </div>
                <div class="column" style="border-top-style:solid;border-bottom-style:solid;background-color:skyblue;text-align:center;font-size:200%">
                    <b>${sortedEvents[i].name} </b>
                    <p>${sortedEvents[i].description} </p>
                </div>
                <div class="column is-one-fifth" style="width:124px;border-top-style:solid;border-bottom-style:solid;background-color:skyblue">
                    <p style="padding:5px"><button class="button is-danger is-rounded is-centered" style="width:84px;" id="delete" onclick="whichDelete(${sortedEvents[i].id})">Delete</button></p>
                    <p style="padding:5px"><button class="button is-warning is-rounded is-centered" style="width:84px;" id="edit" onclick="whichEdit(${sortedEvents[i].id})">Edit</button></p>   
                </div>
            </div>
        </p>
            
            `
        )
    }

    // RANDOM QUOTE API
    var qresult;
    qresult = await axios({
        method: 'GET',
        url: 'https://quote-garden.herokuapp.com/quotes/random',
    });

    $sidebar.append(
        `
            <br>
            <br>
            <br>
            <p class="has-text-white is-italic" style="text-align:center;color=white;font-size:100%">Quote of the day:</p>
            <p class="has-text-white" style="text-align:center;color=white;font-size:100%">"${(qresult.data.quoteText)}"</p>
            )`)
});