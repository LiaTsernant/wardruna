function draw() {
  let paths = document.querySelectorAll('#wardruna path');

  for (let i = 0; i < paths.length; i += 1) {
    setStyle(paths[i], i);
  };
}

function setStyle(element, i) {
  setTimeout(() => {
    element.setAttribute('style', `stroke: #c5c5c5; stroke-width: 5px; stroke-dasharray: ${element.getTotalLength()}px; stroke-dashoffset: ${element.getTotalLength()}px; animation: line-animation 3.5s linear forwards 2s`);
  }, 500 * i)
}

draw()


