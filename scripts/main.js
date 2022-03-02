

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cute.jpg') {
      myImage.setAttribute ('src','images/kitty-130X100.jpg');
    } else {
      myImage.setAttribute ('src','images/cute.jpg');
    }
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
      } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'You are so cute 1, ' + myName;
  }
}

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'You are so cute 2, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  