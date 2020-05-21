/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Ibanez RG7421PB.jpg') {
    myImage.setAttribute ('src', 'images/Ibanez RG7421PB Back.jpg');
  } else {
    myImage.setAttribute ('src', 'images/Ibanez RG7421PB.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null || myName === "null") {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'This guitar is cool, ' + myName;
  }
}

if(!localStorage.getItem('name') || localStorage.getItem('name') === null || localStorage.getItem('name') === "null") {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'This guitar is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
