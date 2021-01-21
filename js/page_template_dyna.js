var BUTTON_LOADING_ANIMATION_STRING = "Crunching up those numbers.";

function hideElementById(id){
  document.getElementById(id).classList.add("hidden");
}

function unhideElementById(id){
  let classList = document.getElementById(id).classList;
  classList.remove("hidden");
}
function checkButtonOnClick(){
    unhideElementById("progress-bar");
    let progressBarLoader = function(timerID){
      let width = parseInt(document.getElementById("loaded-bar").style.width);
      if(width>=100){
         clearInterval(timerID);
         hideElementById("check-button");
         hideElementById("progress-bar");
         unhideElementById("secret");
      }
      updateButtonAnimation(width);
      document.getElementById("loaded-bar").style.width = (width+2)+ "%";
    }
    var timerID  = setInterval(progressBarLoader, 50, timerID);
  }


  function updateButtonAnimation(barWidth){
    let checkButton = document.getElementById("check-button");
    if((barWidth/3)%9==0)      checkButton.innerHTML =  BUTTON_LOADING_ANIMATION_STRING + ".." ;
    else if((barWidth/3)%6==0) checkButton.innerHTML =  BUTTON_LOADING_ANIMATION_STRING + "." ;
    else if((barWidth/3)%3==0) checkButton.innerHTML =  BUTTON_LOADING_ANIMATION_STRING ;
  }
