let token = localStorage.getItem('token');

const $eventList = $('#eventList');

async function deleteEvent(id) {
    const result = await axios({
        method: 'DELETE',
        url: 'http://localhost:3000/public/events/'.concat(id),
        headers: {Authorization: `Bearer ${(token)}`}
      });
    location.reload();
}



$(async function () {

    const result = await axios({
        method: 'GET',
        url: 'http://localhost:3000/public/events',
        headers: {Authorization: `Bearer ${(token)}`}
    });

    $eventList.append(
        `
        <button style="" id="delete" onclick="location.href = './create/';">Add Assignment</button>
        
        `
    )


    const list = Object.entries(result.data.result);
    var i;
    for (i = 0; i < list.length; i++) {
        $eventList.append(
            `
            <p>${list[i][1].name} Due: ${list[i][1].date} <button style="" id="delete" onclick="deleteEvent(${list[i][0]})">Delete</button> </p>
            
            `
        )
    }



});