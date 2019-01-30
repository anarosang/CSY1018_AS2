var timer = 0;

function moveHorse(){
  var horse1 = document.getElementById('horse1');
  var horse2 = document.getElementById('horse2');
  var horse3= document.getElementById('horse3');
  var horse4 = document.getElementById('horse4');

  var speed = Math.random()*10+10;
  setInterval(moveRight(horse1),speed);
}

function moveDown(){
  var horses = document.getElementsByClassName('horse');
  for(var i=0;i<horses.length;i++){
    var element = horses[i];
      var positionTop = element.offsetTop;
      element.className = 'horse runDown';
      element.style.top = positionTop + 1 + 'px';

      if(positionTop+150 == window.innerHeight){
        clearInterval(timer);
        timer = setInterval(moveRight, 10);
      }
    }
}

function moveRight(horse){
    var element = horse
    var positionLeft = element.offsetLeft;
    element.className = 'horse runRight';
    element.style.left = positionLeft + 1 + 'px';

    if(positionLeft+260 == window.innerWidth){
      clearInterval(timer);
      timer = setInterval(moveUp, 10);
    }
}

function moveLeft(){
  var horses = document.getElementsByClassName('horse');
  for(var i=0;i<horses.length;i++){
    var element = horses[i];
      var positionLeft = element.offsetLeft;
      element.className = 'horse runLeft';
      element.style.left = positionLeft - 1 + 'px';

      if(positionLeft-40 == 0){
        clearInterval(timer);
        timer = setInterval(moveDown, 10);
      }
    }
}

function moveUp(){
  var horses = document.getElementsByClassName('horse');
  for(var i=0;i<horses.length;i++){
    var element = horses[i];
    var positionTop = element.offsetTop;
    element.className = 'horse runUp';
    element.style.top = positionTop - 1 + 'px';

      if(positionTop ==0){
        clearInterval(timer);
        timer = setInterval(moveLeft, 10);
      }
    }
}

function myButtonClicked(){
  timer = setInterval(moveRight,10);
  var button = document.getElementById('start');
  button.removeEventListener('click', myButtonClicked);
}

function myClickFunction(){
  var button = document.getElementById('start');
  button.addEventListener('click', myButtonClicked);
}

document.addEventListener('DOMContentLoaded', myClickFunction);
