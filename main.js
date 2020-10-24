function draw() {
  let paths = document.querySelectorAll('#wardruna path');

  for (let i = 0; i < paths.length; i += 1) {
    setStyle(paths[i], i);
  };
}

function setStyle(element, i) {
  setTimeout(() => {
    element.setAttribute('style', `stroke: #c5c5c5; stroke-width: 20px; stroke-dasharray: ${element.getTotalLength()}px; stroke-dashoffset: ${element.getTotalLength()}px; animation: line-animation 1s linear forwards 1s`);
  }, 500 * i)
}

draw()


