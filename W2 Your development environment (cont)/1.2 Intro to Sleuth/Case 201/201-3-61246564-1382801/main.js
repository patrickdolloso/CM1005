var vertices = '';

(function() {
  let pos = null;
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = 'scene.png';
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#F00';
  };
  document.addEventListener('click', e => {
      if (!pos) {
          ctx.beginPath();
          ctx.moveTo(e.x, e.y);
          pos = {x: e.x, y: e.y};
      }
      else {
          ctx.lineTo(e.x, e.y);
          ctx.stroke();
          ctx.moveTo(e.x, e.y);
          vertices += `vertex(${pos.x}, ${pos.y});\nvertex(${e.x}, ${e.y});\n`;
          [pos.x, pos.y] = [e.x, e.y];
      }
  });
})();
