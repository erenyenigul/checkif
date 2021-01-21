import {themes} from './themes.js';

var CURRENT_THEME;
var CURRENT_THEME_INDEX;
const HEADER_START = "Check If ";
const ASSETS_DIRECTORY = "assets";
const PAGE_WIDTH = $(document).width();
const PAGE_HEIGHT = $(document).height();

var selectedImage  = document.createElement("img");
selectedImage.setAttribute("class", "bg-gray-100 rounded-full opacity-50 w-16 p-2"); selectedImage.setAttribute("src", "assets/tick.svg");

function setRandomQuestion(){
 let questions = ["the world is flat",
"any human has stepped onto moon",
"eren is still dumb",
"utku is still single",
"mali will ever be able to grow mustache",
"mustaches are cool",
"robots will takeover the world",
"ufos are real",
"emel is a saint"];
let index = Math.floor(Math.random()*9);
document.getElementById("header-input").placeholder = questions[index];
}

function applyTheme(theme_index, clear){

  let theme = themes[theme_index];

  if(clear) clearCurrentTheme();

  CURRENT_THEME = theme;
  CURRENT_THEME_INDEX = theme_index;

  if(theme.body_css != "") {
    document.getElementsByTagName("body")[0].style.background = theme.body_css;
     document.getElementsByTagName("body")[0].style.backgroundSize = "contain";
  }
  if(theme.body != ""){
     document.getElementsByTagName("body")[0].classList.add(... theme.body.split(" "));
   }
  if(theme.container != ""){
    document.getElementById("container").classList.add(... theme.container.split(" "));
}
  if(theme.header != ""){
     document.getElementById("header").classList.add(... theme.header.split(" "));
   }
   if(theme.chooseThemeText != ""){
      document.getElementById("choose-theme-text").classList.add(... theme.chooseThemeText.split(" "));
    }
  for(let elem of document.getElementsByTagName("select")) {
    elem.classList.add(... theme.select.split(" "))
  }
  if(theme.props != null){
    createAnimation(CURRENT_THEME_INDEX, theme.props);
  }
  let themeSelectors = document.getElementById("theme-selector");
  themeSelectors.setAttribute("selected", theme_index);
  let themeSelector  = themeSelectors.childNodes[(2*CURRENT_THEME_INDEX+1)];
  themeSelector.appendChild(selectedImage) ;
  themeSelector.classList.remove("opacity-25");
// document.getElementById("copy-link-button").classList.add(... theme.select.split(" "));

}

function clearCurrentTheme(){
  if(CURRENT_THEME.body_css != null) {
    document.getElementsByTagName("body")[0].style.background = "";
  }
  if(CURRENT_THEME.body != ""){
     document.getElementsByTagName("body")[0].classList.remove(... CURRENT_THEME.body.split(" "));
   }
  if(CURRENT_THEME.container != ""){
    document.getElementById("container").classList.remove(... CURRENT_THEME.container.split(" "));
}
  if(CURRENT_THEME.header != ""){
     document.getElementById("header").classList.remove(... CURRENT_THEME.header.split(" "));
   }
   if(CURRENT_THEME.chooseThemeText != ""){
      document.getElementById("choose-theme-text").classList.remove(... CURRENT_THEME.chooseThemeText.split(" "));
    }
  for(const elem of document.getElementsByTagName("select")) {
    elem.classList.remove(... CURRENT_THEME.select.split(" "))
  }
    

  let themeSelectors = document.getElementsByClassName("theme-selector");
  let themeSelector = themeSelectors[CURRENT_THEME_INDEX];
  themeSelector.classList.add("opacity-25");
  themeSelector.removeChild(themeSelector.childNodes[0]);
  CURRENT_THEME_INDEX = -1;
}

function initializeThemeSelectors(themes){

  let themeSelectors = document.getElementsByClassName("theme-selector");
  for(let i = 0; i<themes.length; i++){
    let theme = themes[i];
    let themeSelector = themeSelectors[i];
    if(theme.body != "") themeSelector.classList.add(... themes[i].body.split(" "));
    else                 themeSelector.style.background = theme.body_css;
    themeSelector.onclick = function() {
      applyTheme(i, true);
    };
  }
}
function getRandomThemeIndex(){
  return Math.floor(Math.random()*5);
}

//ANIMATION
function  randomizeElementPosition(ship){
      ship.style.top = Math.random()*PAGE_HEIGHT-100+"px";
      ship.style.left = "-110px";
  }
function animate(index, targetElement, speed){
  $(targetElement).animate(
      {
      'left': $(document).width()-$(targetElement).width()+100
      },
      {
      duration: speed,
      step: ()=>{
        if(index!=CURRENT_THEME_INDEX){
                   $(targetElement).stop();
                   $(targetElement).remove();}
                    },
      complete: function(){
          randomizeElementPosition(this);
          animate(this, speed);
          }
      }
  );
  };
function createAnimation(index, animationProps){
     for(let i = 0; i< animationProps.numAnimated; i++){
       let imageID   = Math.floor(Math.random()*(animationProps.numImages) + 1);
       let imageName = animationProps.imageName;
       let imageFormat = animationProps.imageFormat;
       let imagePath = ASSETS_DIRECTORY+"/"+imageName+imageID+"."+imageFormat;
       let wrapper = () => {createAnimatedObject(index, imagePath, animationProps.speed, animationProps.imgSize)};
       setTimeout(wrapper, 500*i);
     }
}
function createAnimatedObject(index, path, speed, size){
   
    const id = Math.floor(Math.random()*10000);
    $("#full-page").append('<img id="'+id+'" style="flex-flow: column wrap; break-inside: avoid" class="animationObj  clearfix inline overflow-hidden flex-none absolute  w-'+size+'" src="'+path+'" alt="Animation image, made by Emel Tuzcuoğlu" >');
    let obj = $("#"+id)[0];
    randomizeElementPosition(obj);
    animate(index, obj, speed);
 }


// Main for theme
initializeThemeSelectors(themes);
applyTheme(getRandomThemeIndex(), false);
setRandomQuestion();
//-----------------------------------------------------------
