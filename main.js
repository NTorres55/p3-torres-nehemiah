const myBoxes = document.getElementsByClassName('square');
const mySecondBoxes = document.getElementsByClassName('square-2');

const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');

// Functionality
function loopThrough() {
  const changeColor = () => this.classList.toggle('blink');
  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayer() {
  const swap = () => {
    layerOne.classList.add('hide');
    layerTwo.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2000);
};

// Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
  mySecondBoxes[i].addEventListener('click', loopThrough);
};
