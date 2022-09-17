
var numberDrumButton = document.querySelectorAll(".drum").length ; 

// detecting button press
for( var i = 0 ; i < numberDrumButton ; ++i ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // what to do when click on button (w, a, s, d, j ,k ,l) 

        var buttonInnerHtml = this.innerHTML;
        makesound(buttonInnerHtml);
        buttonAnnimation(buttonInnerHtml);
        
    });
}

// detecting keyboard press
document.addEventListener("keydown", function(Event){
  
    makesound(Event.key);
    buttonAnnimation(Event.key);

} );

function makesound(key){
    
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
            
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();    
            break;
            
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();    
            break;
            
            
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();    
            break;
            
        case "l":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();    
            break;
            
        default: console.log(buttonInnerHtml);
            break;
    }

}
    
function buttonAnnimation(key)
{
  var activeButton = document.querySelector("." + key);
 
  var delayInMilliseconds = 100; //1 second

  activeButton.classList.add("pressed");
    setTimeout(function() {
        //your code to be executed after 1 second
        activeButton.classList.remove("pressed");
}, delayInMilliseconds);  

}