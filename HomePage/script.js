let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove',cursor);

function cursor(event) {
  mouseCursor.style.top = event.pageY + "px";
  mouseCursor.style.left = event.pageX + "px";
}

console.log("Thank you for viewing my site!");
      
function goToFavCollegeSite()
{
  var x = window.prompt("What is Ciera's favorite college (hint: three letters)?");
  if (x == "ggc" || x == "GGC")
  {
    window.alert("You are correct!");
    window.open("https://ggc.edu");
  }
  else
  {
    window.alert("You are WRONG!");
  }
}

function changeImage()
{
  var image = document.getElementById("image-switch");
  
  if (image.src == "https://cbaucham.neocities.org/kitty.jpg")
  {
    image.src = "https://cbaucham.neocities.org/puppy.jpg";
  }
  else
  {
    image.src = "https://cbaucham.neocities.org/kitty.jpg";
  }
}
