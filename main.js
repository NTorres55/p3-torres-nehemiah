const myBoxes = document.getElementsByClassName('square');
const mySecondBoxes = document.getElementsByClassName('square-2');
const myThirdBoxes = document.getElementsByClassName('square-3');

const layerOne = document.getElementById('layer-one');
const layerTwo = document.getElementById('layer-two');
const layerThree = document.getElementById('layer-three');

// Functionality
function loopThrough() {
  const changeColor = () => this.classList.toggle('blink');
  for ( let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function loopThroughNumber() {
  const changeColor = () => this.classList.toggle('blink');
  const numStringValue = this.textContent;
  for ( let i = 0; i < Number(numStringValue * 2); i++) {
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

function changeLayerTwo() {
  const swap = () => {
    layerTwo.classList.add('hide');
    layerThree.classList.remove('hide');
  };
  setTimeout(swap, this.textContent.length * 2000);
};

// Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  myBoxes[i].addEventListener('click', changeLayer);
  mySecondBoxes[i].addEventListener('click', loopThrough);
  mySecondBoxes[i].addEventListener('click', changeLayerTwo);
  myThirdBoxes[i].addEventListener('click', loopThroughNumber);
};
