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


    var list = Object.values(result.data.result);

    var sortedEvents = list.slice().sort((a, b) => b.date - a.date);

    var i;
    for (i = 0; i < list.length; i++) {
        $eventList.append(
            `
            <p>${sortedEvents[i].name} Due: ${sortedEvents[i].date} <button style="" id="delete" onclick="deleteEvent(${sortedEvents[i].id})">Delete</button> </p>
            
            `
        )
    }



});