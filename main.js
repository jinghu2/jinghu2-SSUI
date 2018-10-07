function turnNormal(dot) {
    document.getElementById("bottles").style.filter = "hue-rotate(0deg)";
    dot.style.opacity = "1";
}

function turnPink(dot) {
    document.getElementById("bottles").style.filter = "hue-rotate(0deg)";
    dot.style.opacity = "0.5";
}

function turnBlue(dot) {
    document.getElementById("bottles").style.filter = "hue-rotate(180deg)";
    dot.style.opacity = "0.5";
}

function turnGreen(dot) {
    document.getElementById("bottles").style.filter = "hue-rotate(90deg)";
    dot.style.opacity = "0.5";
}

function turnDemi(dot) {
    document.getElementById("bottles").style.filter = "hue-rotate(230deg)";
    dot.style.opacity = "0.5";
}



/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*
function manageDropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/


