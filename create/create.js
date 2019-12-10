
let token = localStorage.getItem('token');

const $main = $('#body');

async function addEvent() {
    var ID = ((new Date().getTime()) / 10000) - (ID % 10000)
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
      location.href = '../'
    
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
    <p> </p>
    <button class="button" style="width:25%;" id="addButton" onclick="addEvent()">Add</button>
    <button class="button" style="width:25%;" id="cancelButton" onclick="location.href = '../'";>Cancel</button>
    </section>
    `
    )

    // document.getElementById('addButton').onclick = function(){
    //     addEvent();
    // }

});
