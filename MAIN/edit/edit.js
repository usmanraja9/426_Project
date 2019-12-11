
let token = localStorage.getItem('token');
let editType = localStorage.getItem('editType');
let editId = localStorage.getItem('editId');



const $main = $('#body');

async function addEvent() {
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/public/events/'.concat(editId),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            "description": $("#inputDescription").val(),
            "id": editId
          }},
          type:"merge"
      });
      location.href = '../mainPage/index.html'
    
}

async function addStudentEvent() {
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/private/events/'.concat(editId),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            "description": $("#inputDescription").val(),
            "id": editId
          }},
          type:"merge"
      });
      location.href = '../mainPage/index.html'
    
}

async function addAssignment() {
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/user/events/'.concat(editId),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            "description": $("#inputDescription").val(),
            "id": editId
          }},
          type:"merge"
      });
      location.href = '../mainPage/index.html'
    
}

async function handleAddButtonClick() {
    if (editType == "private") {
        addStudentEvent();
    } else if (editType == "public") {
        addEvent();
    } else if (editType == "user") {
        addAssignment();
    }


}


$(async function () {

    var result;
    if (editType == "private") {
        result = await axios({
            method: 'GET',
            url: 'http://localhost:3000/private/events',
            headers: {Authorization: `Bearer ${(token)}`}
        });
    } else if (editType == "user") {
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
    
    var i;
    var name;
    var date;
    var time;
    var location;
    var description;
    for (i = 0; i < list.length; i++) {
        if (list[i].id == editId) {
            name = list[i].name
            date = list[i].date
            time = list[i].time
            location = list[i].location
            description = list[i].description

        }
    }


    $main.append(
    `
    <section class="center" style="padding-top:5%;height:100%;text-align:center;font-size:200%;vertical-align:center">
    <p>Event Name</p>
    <input style="font-size:100%;width:50%;" id="inputName" class="input" type="text" value="${name}" name="event">
    <p>Event Date & Time</p>
    <input style="font-size:100%;width:24.75%;" id="inputDate" type="date" name="date" value="${date}"> <input style="font-size:100%;width:24.75%;" id="inputTime" type="time" name="time" value="${time}">
    <p>Event Location</p>
    <input style="font-size:100%;width:50%;" id="inputLocation" class="input" type="text"  value="${location}" name="location">
    <p>Description</p> 
    <textarea style="font-size:100%;width:50%;" id="inputDescription" rows="3" autofocus="autofocus">${description}</textarea>
    <p></p>
    <button class="button" style="width:25%;font-size:100%" id="addButton" onclick="handleAddButtonClick()">Save</button>
    <button class="button" style="width:25%;font-size:100%" id="cancelButton" onclick="location.href = '../mainPage/index.html'";>Cancel</button>
    </section>
    `
    )

    // document.getElementById('addButton').onclick = function(){
    //     addEvent();
    // }

});
