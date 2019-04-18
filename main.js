const myBoxes = document.getElementsByClassName('square');
const mySecondBoxes = document.getElementsByClassName('square-2');

function loopThrough() {

  const changeColor = () => this.classList.toggle('blink');
  changeColor();

  for (let i = 0; i < this.textContent.length * 2; i++) {
    setTimeout(changeColor, i * 1000);
  }
};

function changeLayer() {

  const swap = () => {

  }

  setTimeout(swap, );
};

// Event Listener
for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
  mySecondBoxes[i].addEventListener('click', loopThrough);
};
