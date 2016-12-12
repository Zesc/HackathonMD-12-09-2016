var slider = document.getElementById("slider--touchable");
var disX = 0;
slider.onmousedown=function(eve) { 
  var sliderEve=eve||event;
disX = sliderEve.clientX - slider.offsetLeft;
  document.onmousemove = function(eve) {  
    var sliderEve=eve||event;
    var l = sliderEve.clientX - disX;
   if(l>slider.parentNode.offsetLeft) {
      slider.style.left = slider.parentNode.offsetLeft + 'px';
     
   }
    else {
       slider.style.left = l + 'px';
    }
   
  };
  document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };
        return false;
}