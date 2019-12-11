
let token = localStorage.getItem('token');

const $main = $('#body');










var locations = ["Abernathy", "Alumni", "Art Studio Building", "Hanes Art Center", "Battle", "Beard (Pharmacy)", "Bioinformatics", "Berryhill", "Bingham", "Bondurant Hall", "Caldwell", "Carmichael Arena", "Carrington Hall", "Carroll", "Carolina Hall", "Chapman Hall", "Clinical Sciences (Burnett-Womack)", "Cobb", "Coker", "Connor", "Craige-North", "Davie", "Center for Dramatic Art", "Davis Library", "Dean Smith Center", "Dental (Brauer Hall)", "Dey Hall", "Brooks Hall", "Fetzer Hall", "Gardner", "Gerrard", "FedEx Global Education", "Graham Memorial", "Greenlaw", "Genome Sciences Building", "Hamilton Hall", "Hanes Hall", "Hardin", "Hickerson House", "Hill", "Michael Hooker Research Center", "Horton", "Hospital (UNC)", "Hooker Fields", "Howell", "Kerr Hall (Pharmacy)", "Kenan Memorial Stadium", "Kenan Laboratories", "Kenan Music Building", "Knapp", "Koury Residence Hall", "Ackland", "Library (Davis)", "Lenoir", "Library (Wilson)", "Grad Library (House)", "Mary Ellen Jones", "Manning", "McColl Building", "McGavran-Greenberg (Public Health)", "MacNider", "Morehead Laboratory", "Morehead Planetarium", "Mitchell", "Murphey", "Murray Hall", "Naval ROTC Armory", "New East", "Neuroscience Research Building", "New West", "Paul Green Theatre", "Peabody", "Person", "Phillips", "Planetarium", "Playmaker’s Theatre", "Pre-Clinic Ed (Bullitt-Brinkhous Bldg)", "Public Health", "Rosenau (Public Health)", "Rizzo Center", "Sakai", "Stone Center", "Smith", "Sitterson", "Steele", "Student Union", "Swain Hall", "Taylor Hall", "Tate Turner Kuralt", "Van-Hecke-Wettach", "Venable Hall", "Wilson", "Woollen Gym"];

/** This function to drive our autocomplete taken from: https://www.w3schools.com/howto/howto_js_autocomplete.asp */
function autocomplete(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) {
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  }





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
      window.location.href = '../index.html'    
}

async function addStudentEvent() {
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
      window.location.href = '../index.html'    
}

async function addAssignment() {
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
      window.location.href = '../index.html'    
}

async function handleAddButtonClick() {
    if ($('input[name=eventType]:checked').val() == "private") {
        addStudentEvent();
    } else if ($('input[name=eventType]:checked').val() == "public") {
        addEvent();
    } else if ($('input[name=eventType]:checked').val() == "user") {
        addAssignment();
    }


}

async function handleCancelButtonClick() {
    window.location.href = '../index.html'
}

$(function () {

    $main.append(
    `
    <form autocomplete="off" action="location.href = '../mainPage/index.html'">

    <section class="center" style="position:relative;padding-top:5%;height:100%;text-align:center;font-size:200%;vertical-align:center">
    <p>Event Name</p>
    <input style="font-size:100%;width:50%;" id="inputName" class="input" type="text" value="" name="event">
    <p>Event Date & Time</p>
    <input style="font-size:100%;width:24.75%;" id="inputDate" type="date" name="date" value=""> <input style="font-size:100%;width:24.75%;" id="inputTime" type="time" name="time" value="">
    <p>Event Location</p>
    <input style="font-size:100%;width:50%;" id="inputLocation" class="input" type="text"  value="" name="location">
    <p>Description</p> 
    <textarea style="font-size:100%;width:50%;" id="inputDescription" rows="3" autofocus="autofocus"></textarea>
    <p> 
    <input type="radio" style="height:30px; width:30px;" name="eventType" value="user"> Assignment     
    <input type="radio" style="height:30px; width:30px;" name="eventType" value="private"> Student Event     
    <input type="radio" style="height:30px; width:30px;" name="eventType" value="public"> Public Event
    </p>
    <button class="button" type = "sub" style="width:25%;font-size:100%" id="addButton" onclick="handleAddButtonClick()">Add</button>
    <button class="button" type="reset" style="width:25%;font-size:100%" id="cancelButton" onclick="handleCancelButtonClick()";>Cancel</button>
    </section>
    </form>

    `

    
    )
    autocomplete(document.getElementById("inputLocation"), locations);

    // document.getElementById('addButton').onclick = function(){
    //     addEvent();
    // }

});