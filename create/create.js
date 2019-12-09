
let token = localStorage.getItem('token');

const $main = $('#main');

async function addEvent() {
    const result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/public/events/'.concat(new Date().getTime()),
        headers: {Authorization: `Bearer ${(token)}`},
        data: {"data":{
            "name": $("#inputName").val(),   
            "date": $("#inputDate").val(),
            "time": $("#inputTime").val(),
            "location": $("#inputLocation").val(),
            //"description": $("#inputDescription").val()
          }}
      });
    //   location.reload();
}


$(async function () {

    $main.append(
    `<p>Event Name</p>
    <input style="width:50%;" id="inputName" class="input" type="text" value="" name="event">
    <p>Event Date & Time</p>
    <input style="width:25%;" id="inputDate" type="date" name="date" value=""> <input style="width:25%;" id="inputTime" type="time" name="time" value="">
    <p>Event Location</p>
    <input style="width:50%;" id="inputLocation" class="input" type="text" value="" name="location">
    <p>Description</p>
    <textarea style="width:50%;" id="description" rows="4" autofocus="autofocus"></textarea>
    <p> </p>
    <button style="width:25%;" id="addButton" onclick="addEvent()">Add</button>
    <button style="width:25%;" id="cancelButton" onclick="alert(${token})">Cancel</button>`
    )

});
