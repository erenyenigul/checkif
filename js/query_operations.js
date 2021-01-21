var websiteFoundationURL = "https://checkif.co/";

let codes =
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
};

function updateByOptions(){
     let url = createQuery();
     updateCopyLink(url);
     document.getElementById("tosite").setAttribute('href', url);
}

function updateCopyLink(url){
  let aElement = document.getElementById("created-page-link");
  aElement.placeholder = url.substring(8);
  aElement.value = url.substring(8);
}

function copyToClipboard(str){
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function copyCreatedLink(){
  let link = document.getElementById("created-page-link").placeholder;
  copyToClipboard(link);
}

function getVerbs(ynCode, pronounCode){
  if(pronounCode==6) return codes[2];
  let type = (ynCode ==1) ? "positive" : "negative";
  return (pronounCode<4) ? codes[1][type]: codes[0][type];
}

function updateVerbSelect(){
  let yn       = document.forms["options"]["yn"].value;
  let pronoun  = document.forms["options"]["pronoun"].value;
  let verbs    = getVerbs(yn, pronoun);
  console.log(verbs);
  let elemVerbSelect = document.forms["options"]["verb"];
  elemVerbSelect[0].textContent = verbs[0];
  elemVerbSelect[1].textContent = verbs[1];
  elemVerbSelect[2].textContent = verbs[2];
  elemVerbSelect[3].textContent = verbs[3];
}

function createQuery(){

  let theme     = document.getElementById("theme-selector").getAttribute("selected");
  let rawHeader = document.forms["options"]["header"].value
                        || document.getElementById("header-input").placeholder;
  let yn        = document.forms["options"]["yn"].value;
  let pronoun   = document.forms["options"]["pronoun"].value;
  let verb      = document.forms["options"]["verb"].value;

  let header =   rawHeader.split(" ").join("-").toLowerCase();
  let optionQueryInBase10 = yn + pronoun + verb + theme;
  let optionQueryInBase36 = (+optionQueryInBase10).toString(36);
  let concatURL = websiteFoundationURL+
                  header+
                  "-"+
                  optionQueryInBase36;
  return concatURL;
}

updateVerbSelect();
