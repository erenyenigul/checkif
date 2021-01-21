import {themes} from './themes.js';
import {validateHeader, redirectTo404Page} from './header_validate.js';
const HEADER_START = "Check if ";
const ASSETS_DIRECTORY = "assets";
const PAGE_WIDTH = $(document).width();
const PAGE_HEIGHT = $(document).height();

var DIFFERENT_HEADINGS =  ["Scientist All Around The World Found The Answer",
                           "Quantum Computers Calculated The Result",
                           "The Meaning of Life, The Universe and Everything",
                           "The Truth That We've Waited For So Long",
                           "Doing the maths",
"Stealing the secrets",
"This is not the best job I had",
"Take your time, this might take long",
"Calculating results",
"Our methods relies on scientific methods",
"99% percent effective",
"Developed by top scientist all over the world",
"Second best thing after despacito"
                          ];
 function getRandomHeading(){
                            let index = Math.floor(Math.random()*DIFFERENT_HEADINGS.length);
                            return DIFFERENT_HEADINGS[index];
                          }
document.getElementById("heading-message").innerHTML = getRandomHeading();


function applyStyleToElem(elemID, style){
document.getElementById(elemID).classList.add(... style.split(" "));
}

function applyTheme(theme_index){
let theme = themes[theme_index];

if(theme.body_css != "") {
  document.getElementsByTagName("body")[0].style.background = theme.body_css;
}
if(theme.body != ""){
  document.getElementsByTagName("body")[0].classList.add(... theme.body.split(" "));
}
if(theme.container != ""){
  applyStyleToElem("container", theme.container);
}
if(theme.header != ""){
  applyStyleToElem("header", theme.header);
  applyStyleToElem("main-text", theme.header);
  applyStyleToElem("secret", theme.header);
}
if(theme.select != ""){
  applyStyleToElem("check-button", theme.select);
}
if(theme.props != null){
  createAnimation(theme.props);
}
}



let QueryHandler = {
setTextContent : (content) =>  document.getElementById("header").textContent         = content,
setTitle       : (content) =>  document.getElementsByTagName("title")[0].textContent = HEADER_START + content,
setTheme       : (themeCode) =>  applyTheme(themeCode),
setResult      : function (ynCode, pronounCode, verbCode){
  let yn      = codes.yn[ynCode];
  let pronoun = codes.pronoun[pronounCode];
  let verb    = getVerb(verbCode, ynCode, pronounCode);
  let textAreas = document.getElementById("secret").childNodes ;
  textAreas[1].textContent = firstLetterUpperCase(yn) + ((pronounCode==6)  ? "" : ",");
  textAreas[3].textContent = pronoun;
  textAreas[5].textContent = verb;}
};

let codes = {
  theme: {0 : "space_theme", 1 : "purple_theme",2 : "blue_theme",3 : "green_theme",4 : "black_theme"},
  yn : {1: "yes" , 2: "no"},
  pronoun : {0: "it", 1: "she", 2: "he", 3 : "you", 4:"we",5:"they",6:""},
  verb :
  {
    0: {
      "positive": {0: "are", 1: "do", 2:"will", 3:"did"},
      "negative": {0: "aren't", 1: "don't", 2:"won't", 3:"didn't"}
    },
    1: {
      "positive": {0: "is", 1: "does",2:"will", 3:"did"},
      "negative": {0: "isn't", 1: "doesn't", 2:"won't", 3:"didn't"}
    },
    2: {0:"-",1:"-",2:"-",3:"-"}
  }
};



function firstLetterUpperCase(string){
  let firstLetter = string.charAt(0);
  return firstLetter.toUpperCase()+string.slice(1);
}

function getVerb(verbCode, ynCode, pronounCode){
  let type = ynCode==1 ? "positive" : "negative";
  let index = 1;
  if(pronounCode>2) index =0;
  return codes["verb"][index][type][verbCode];
}

function validateOptionQuery(options){

  if(
    options.length!=4 ||
    options[0]>2 || options[0]<1 ||
    options[1]>4 || options[1]<0 ||
    options[2]>1 || options[2]<0 ||
    options[3]>4 || options[3]<0)
    redirectTo404Page();
  }

function  randomizeElementPosition(ship){
      ship.style.top = Math.random()*PAGE_HEIGHT-100+"px";
      ship.style.left = "-300px";
  }

  function animate(targetElement, speed){
  $(targetElement).animate(
      {
      'left': $(document).width()+100
      },
      {
      duration: speed,
      complete: function(){
          randomizeElementPosition(this);
          animate(this, speed);
          }
      }
  );
  };

function createAnimation(animationProps){
     for(let i = 0; i< animationProps.numAnimated; i++){
       let imageID   = Math.floor(Math.random()*(animationProps.numImages) + 1);
       let imageName = animationProps.imageName;
       let imageFormat = animationProps.imageFormat;
       let imagePath = ASSETS_DIRECTORY+"/"+imageName+imageID+"."+imageFormat;
       let wrapper = () => {createAnimatedObject(imagePath, animationProps.speed, animationProps.imgSize)};
       setTimeout(wrapper, 500*i);
     }
}

  function createAnimatedObject(path, speed, size){
    const id = Math.floor(Math.random()*10000);
    $("#full-page").append('<img id="'+id+'" loop=infinite class="absolute inline clearfix w-'+size+'" src="'+path+'" alt="Animation Image, Made by Emel Tuzcuoğlu">');
    let obj = $("#"+id)[0];
    randomizeElementPosition(obj);
    animate(obj, speed);
  }


  let currentLocation = window.location.href.split("/");
  let fileNameIndex = currentLocation.length-1;
  let query = currentLocation[fileNameIndex].split("-");

  if(query.length >= 2 ){
    let options = parseInt(query[query.length-1], 36).toString().split("").map(x=>+x);
    let header = query.slice(0,query.length-1).join(" ");
    header = decodeURIComponent(header);
    validateHeader(header);
    QueryHandler.setTextContent(header);
    QueryHandler.setTitle(header);
    QueryHandler.setTheme(options[3]);
    QueryHandler.setResult(options[0], options[1] ,options[2]);
  }

  document.body.style.display="";
