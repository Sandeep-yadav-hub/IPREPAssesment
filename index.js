function toDataURL(src, callback) {
  var img = new Image();
  img.onload = function () {
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL();
    callback(dataURL);
  };
  img.src = src;
}

var img = document.getElementById("img")
var src = "img.jpeg"
toDataURL(
  `${window.location.origin}/IPREPAssesment/${src}`,
  function (dataUrl) {
    img.src = dataUrl;
  }
);


