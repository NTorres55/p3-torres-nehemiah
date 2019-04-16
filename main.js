const myBoxes = document.getElementsByClassName('square');

function loopThrough() {

  const changeColor = () => this.classList.toggle('red');
  changeColor();

  for (let i = 0; i < this.textContent.length; i++) {
    changeColor();
  }
};

for (let i = 0; i < myBoxes.length; i++) {
  myBoxes[i].addEventListener('click', loopThrough);
};
