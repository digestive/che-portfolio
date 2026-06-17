(function () {
  var canvas = document.createElement('canvas');
  var size = 256;
  canvas.width = size;
  canvas.height = size;
  canvas.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'width:100%',
    'height:100%',
    'pointer-events:none',
    'z-index:9999',
    'opacity:0.03',
    'mix-blend-mode:overlay'
  ].join(';');

  var ctx = canvas.getContext('2d');
  var img = ctx.createImageData(size, size);
  for (var i = 0; i < img.data.length; i += 4) {
    var v = (Math.random() * 255) | 0;
    img.data[i]     = v;
    img.data[i + 1] = v;
    img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);

  document.body.appendChild(canvas);
}());
