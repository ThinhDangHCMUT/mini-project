var numberOfDrumsButton = document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberOfDrumsButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var currentKey =  this.classList.value[0];
        
        makeSound(buttonInner);
        
        buttonAnimation(currentKey);
 
    });

}

document.addEventListener("keypress",function(event){

       makeSound(event.key);

      buttonAnimation(event.key);
});

function makeSound(currentKey){
    switch (currentKey) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();       
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();  
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();  
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();  
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();  
    
        default: console.log(currentKey);
            break;
    } 
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
   
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
    
} 