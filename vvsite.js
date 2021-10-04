//HEADERS
function openTab(title, element, color){
  
    // Hide all elements with the class "tabContent" by default*/

    var i, tabcontent, tablink;

    tabcontent= document.getElementsByClassName('tabcontent');
    for (i=0; i<tabcontent.length ; i++){
        tabcontent[i].style.display="none";
    }

   // Remove the background color of all tablinks/buttons*/
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].style.backgroundColor = "";
  }

    //Show specific tab content*/
  document.getElementById(title).style.display="block";

    // Add the specific color to the button used to open the tab content*/
  element.style.backgroundColor = color

}

// Get the element with id="defaultOpen" and click on it*/
document.getElementById("defaultOpen").click();


//SLIDESHOW OF PICTURES
var slideIndex= 1;
showSlides(slideIndex);

//Next and previous controls
function plusSlides(n){
    showSlides(slideIndex +=n );
}


function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("mySlides");
    if (n> slides.length) {
        slideIndex=1
    }
    if(n < 1) {
        slideIndex=slides.length
     }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    
}