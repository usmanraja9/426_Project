
let token = localStorage.getItem('token');

const $main = $('#body');

async function addEvent() {
    var ID = Math.trunc((new Date().getTime()) / 1000)
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/public/events/'.concat(ID),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            "description": $("#inputDescription").val(),
            "id": ID
          }}
      });
      location.href = '../index.html'    
}

async function addStudentEvent() {
    var ID = Math.trunc((new Date().getTime()) / 1000)
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/user/events/'.concat(ID),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            "description": $("#inputDescription").val(),
            "id": ID
          }}
      });
      location.href = '../index.html'    
}

async function addAssignment() {
    var ID = Math.trunc((new Date().getTime()) / 1000)
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/private/events/'.concat(ID),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            "description": $("#inputDescription").val(),
            "id": ID
          }}
      });
      location.href = '../index.html'
    
}

async function handleAddButtonClick() {
    if ($('input[name=eventType]:checked').val() == "private") {
        addAssignment();
    } else if ($('input[name=eventType]:checked').val() == "public") {
        addEvent();
    } else if ($('input[name=eventType]:checked').val() == "user") {
        addStudentEvent();
    }


}


$(function () {

    $main.append(
    `
    <section class="center" style="padding-top:5%;height:100%;text-align:center;font-size:200%;vertical-align:center">
    <p>Event Name</p>
    <input style="font-size:100%;width:50%;" id="inputName" class="input" type="text" value="" name="event">
    <p>Event Date & Time</p>
    <input style="font-size:100%;width:24.75%;" id="inputDate" type="date" name="date" value=""> <input style="font-size:100%;width:24.75%;" id="inputTime" type="time" name="time" value="">
    <p>Event Location</p>
    <input style="font-size:100%;width:50%;" id="inputLocation" class="input" type="text"  value="" name="location">
    <p>Description</p> 
    <textarea style="font-size:100%;width:50%;" id="inputDescription" rows="3" autofocus="autofocus"></textarea>
    <p> 
    <input type="radio" style="height:30px; width:30px;" name="eventType" value="private"> Assignment     
    <input type="radio" style="height:30px; width:30px;" name="eventType" value="user"> Student Event     
    <input type="radio" style="height:30px; width:30px;" name="eventType" value="public"> Public Event
    </p>
    <button class="button" style="width:25%;font-size:100%" id="addButton" onclick="handleAddButtonClick()">Add</button>
    <button class="button" style="width:25%;font-size:100%" id="cancelButton" onclick="location.href = '../index.html'";>Cancel</button>
    </section>
    `
    )

    // document.getElementById('addButton').onclick = function(){
    //     addEvent();
    // }

});
