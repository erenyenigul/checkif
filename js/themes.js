
var Theme = function(body_css, body, container, header, select, chooseThemeText, props) {
  this.body_css = body_css;
  this.body = body;
  this.container = container;
  this.header = header;
  this.select = select;
  this.chooseThemeText = chooseThemeText;
  this.props = props;
}
var AnimationInfo = function(imageName,imageFormat, numImages, speed, numAnimated, imgSize){
  this.imageName = imageName;
  this.imageFormat = imageFormat;
  this.numImages = numImages;
  this.speed = speed;
  this.numAnimated = numAnimated;
  this.imgSize = imgSize;
}
let blue_theme_ani = new AnimationInfo("rainbow",
                                        "gif",
                                        3,
                                        15000,
                                        3,
                                        48);

let space_theme_ani = new AnimationInfo("space",
                                        "gif",
                                        2,
                                        15000,
                                        3,
                                        24);
let purple_theme_ani = new AnimationInfo("heart",
                                         "png",
                                        7,
                                        10000,
                                        10,
                                        32);

let space_theme = new Theme("url('assets/bg.jpg')",
                            "",
                            "bg-black bg-opacity-75",
                            "text-yellow-400",
                            "text-black bg-gradient-to-r from-yellow-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500",
                            "text-white",
                            space_theme_ani
                            );


let blue_theme = new Theme( "",
                            "bg-gradient-to-r from-teal-400 to-blue-500",
                            "bg-white",
                            "text-blue-500",
                            "bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-500 hover:to-orange-500 text-white",
                            "text-black",
                            blue_theme_ani
                            );

let purple_theme = new Theme( "",
                            "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
                            "bg-white",
                            "text-purple-500",
                            "bg-gradient-to-r from-pink-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white",
                            "text-black",
                            purple_theme_ani
                            );

let green_theme = new Theme( "",
                            "bg-gradient-to-r from-green-500 to-teal-500",
                            "bg-white",
                            "text-green-500",
                            "bg-gradient-to-r from-green-500 to-green-500 hover:from-pink-500 hover:to-orange-500 text-white",
                            "text-black",
                            null
                            );

let black_theme = new Theme( "",
                            "bg-gradient-to-r from-gray-900 to-black",
                            "bg-gray-500 bg-opacity-50",
                            "",
                            "bg-gradient-to-r from-black to-black hover:from-gray-800 hover:to-black text-white",
                            "text-white",
                            null
                            );

export let themes =  [space_theme, purple_theme, blue_theme, green_theme, black_theme];
