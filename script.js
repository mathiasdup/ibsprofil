// Variables

const elem1 = document.getElementById("img1")
const elem2 = document.getElementById("img2")
const elem3 = document.getElementById("img3")
const elem4 = document.getElementById("img4")
const elem5 = document.getElementById("img5")
const elem6 = document.getElementById("img6")

const text = document.getElementById("content-portrait")

// Functions

function changeImage(a, b, c) {
  document.getElementById('content-portrait').src=c;

  elem1.classList.remove("selected-portrait");
  elem1.src='./Julien.png'
  elem2.classList.remove("selected-portrait");
  elem2.src='./Amandine.png'
  elem3.classList.remove("selected-portrait");
  elem3.src='./Benoit.png'
  elem4.classList.remove("selected-portrait");
  elem4.src='./Vincent.png'
  elem5.classList.remove("selected-portrait");
  elem5.src='./Ophelie.png'
  elem6.classList.remove("selected-portrait");
  elem6.src='./Constance.png'

  document.getElementById(b).classList.add("selected-portrait");
  document.getElementById(b).src=a;
  //setTimeout(function(){ document.getElementById(b).src=a; }, 100);
}

function freezeImage(a, b, c) {

  elem1.src='./Julien.png'
  elem2.src='./Amandine.png'
  elem3.src='./Benoit.png'
  elem4.src='./Vincent.png'
  elem5.src='./Ophelie.png'
  elem6.src='./Constance.png'

  document.getElementById(b).src=a;
  text.src=c;
}

function unfreezeImage(a, b) {

  elem1.src='./Julien.png'
  elem2.src='./Amandine.png'
  elem3.src='./Benoit.png'
  elem4.src='./Vincent.png'
  elem5.src='./Ophelie.png'
  elem6.src='./Constance.png'

  if (elem1.classList.contains("selected-portrait")) { 

    elem1.src='./Julien-selected.png';
    text.src='./Julien.jpg';

  } else if (elem2.classList.contains("selected-portrait")) {

    elem2.src='./Amandine-selected.png';
    text.src='./Amandine.jpg';

  } else if (elem3.classList.contains("selected-portrait")) {

    elem3.src='./Benoit-selected.png';
    text.src='./Benoit.jpg';

  } else if (elem4.classList.contains("selected-portrait")) {

    elem4.src='./Vincent-selected.png';
    text.src='./Vincent.jpg';

  } else if (elem5.classList.contains("selected-portrait")) {

    elem5.src='./Ophelie-selected.png';
    text.src='./Ophelie.jpg';

  } else if (elem6.classList.contains("selected-portrait")) {

    elem6.src='./Constance-selected.png';
    text.src='./Constance.jpg';

  } else {
    document.getElementById(b).src=a;
    elem1.src="./Julien-selected.png"
    text.src="./Julien.jpg"
  }

}