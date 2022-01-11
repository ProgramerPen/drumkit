var loop1 = document.querySelectorAll(".drum").length;

document.addEventListener("keydown", function(event){
      makesound(event.key);

});

for (var i =0; i < loop1; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonIn = this.innerHTML;
  
    makesound(buttonIn);
  });

}

function makesound(key) {

  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    
    default: alert("Sorry we are just manage to work with W,A and S keys");

         }
}






// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
