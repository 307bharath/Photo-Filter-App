var image;
var canvas1;
var canvas2;

function uploadimg() {
 canvas1=document.getElementById("canvas1");
 var img=document.getElementById("inputfile")
 image=new SimpleImage(img);
 image.drawTo(canvas1);
}

function checkfilter(clr) {
    if (clr.target.value === "purple"){
      purplefilt();
    }
    else if(clr.target.value === "Green"){
        greenfilt();
    }
    else if(clr.target.value === "Blue"){
        bluefilt();
    }
    else if(clr.target.value === "fade"){
        xfilt();
    }
    else if(clr.target.value === "Gray"){
        grayfilt();
    }
  }

 function purplefilt(){
    var newimg=image;
    canvas2=document.getElementById("canvas2");
    for(var pixel of newimg.values()){
        pixel.setGreen(0);
    }
    newimg.drawTo(canvas2);
 }
 
 function greenfilt(){
    var newimg=image;
    canvas2=document.getElementById("canvas2");
    for(var pixel of newimg.values()){
        pixel.setGreen(255);
    }
    newimg.drawTo(canvas2);
 }

 function bluefilt(){
    var newimg=image;
    canvas2=document.getElementById("canvas2");
    for(var pixel of newimg.values()){
        pixel.setBlue(255);
    }
    newimg.drawTo(canvas2);
 }

 function xfilt(){
    var newimg=image;
    canvas2=document.getElementById("canvas2");
    for(var pixel of newimg.values()){
        pixel.setAlpha(100);
    }
    newimg.drawTo(canvas2);
 }
 function grayfilt(){
    var newimg=image;
    canvas2=document.getElementById("canvas2");
    for(var pixel of newimg.values()){
        var gray=(pixel.getGreen() + pixel.getRed() +pixel.getBlue() )/3.0;
        pixel.setRed(gray);
        pixel.setGreen(gray);
        pixel.setRed(gray);
    }
    newimg.drawTo(canvas2);
 }

 