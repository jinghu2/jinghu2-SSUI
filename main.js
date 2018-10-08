/************** List page slide show ***************/
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


/************** Detail page lides show ***************/
/********** Reference for W3school ********/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function chooseColor(n, colorText) {
    currentSlide(n);
    document.getElementById("colorDescrip").innerHTML = colorText;
}

function turnOpaque (dot) {
    dot.style.opacity = "0.5";
}

function turnClear (dot) {
    dot.style.opacity = "1";
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


