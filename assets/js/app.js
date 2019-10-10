// top carousel
var leftArrowBox = document.getElementsByClassName('leftArrowBox');
var rightArrowBox = document.getElementsByClassName('rightArrowBox');
var carControlImageContainerInside = document.getElementsByClassName('carControlImageContainerInside');


var topCarouselLeft = 0;
var topCarMobLeft = 0;

function arrowLeft() {
  if(window.innerWidth > window.innerHeight){
    if (topCarouselLeft < -1) {
      topCarouselLeft+= 50;
      carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
    }else{
      topCarouselLeft = -400;
      carControlImageContainerInside[0].style.transition = '0s';
      console.log(topCarMobLeft);
      setTimeout(function () {
      carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
        setTimeout(function () {
          carControlImageContainerInside[0].style.transition = 'all 1s ease';
          topCarouselLeft += 50;
          carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
        }, 100);
      }, 100);
    }
  }else{
    if (topCarMobLeft < -1) {
      topCarMobLeft += 100;
      carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
    }else{
      topCarMobLeft = -800;
      carControlImageContainerInside[0].style.transition = '0s';
      console.log(topCarMobLeft);
      setTimeout(function () {
      carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
        setTimeout(function () {
          carControlImageContainerInside[0].style.transition = 'all 1s ease';
          topCarMobLeft += 100;
          carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
        }, 100);
      }, 100);
    }
  }
};

function arrowRight() {
  if(window.innerWidth > window.innerHeight){
    if (topCarouselLeft > -399) {
      topCarouselLeft-= 50;
      carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
    }else{
      topCarouselLeft = 0;
      carControlImageContainerInside[0].style.transition = '0s';
      console.log(topCarMobLeft);
      setTimeout(function () {
      carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
        setTimeout(function () {
          carControlImageContainerInside[0].style.transition = 'all 1s ease';
          topCarouselLeft -= 50;
          carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
        }, 100);
      }, 100);
    }
  }else{
    if (topCarMobLeft > -899) {
      topCarMobLeft -= 100;
      carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
      console.log(topCarouselLeft);
    }else{
      topCarMobLeft = -100;
      carControlImageContainerInside[0].style.transition = '0s';
      console.log(topCarMobLeft);
      setTimeout(function () {
      carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
        setTimeout(function () {
          carControlImageContainerInside[0].style.transition = 'all 1s ease';
          topCarMobLeft -= 100;
          carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
        }, 100);
      }, 100);
    }
  }
};

// function arrowRight() {
//   if(window.innerWidth > window.innerHeight){
//     if (topCarouselLeft > -299) {
//       topCarouselLeft-= 50;
//     }
//     carControlImageContainerInside[0].style.left = topCarouselLeft + '%';
//   }else{
//     if (topCarMobLeft > -699) {
//       topCarMobLeft -= 100;
//     }
//     carControlImageContainerInside[0].style.left = topCarMobLeft + '%';
//   }
// };


leftArrowBox[0].addEventListener('click',()=>{
  arrowLeft();
});

rightArrowBox[0].addEventListener('click',()=>{
  arrowRight();
});




// order commission relationship
var selectionBox = document.getElementsByClassName('selectionBox');
var carTextMoving = document.getElementsByClassName('carTextMoving');
var selectionUnderline = document.getElementsByClassName('selectionUnderline');

function sectionBoxReset() {
  for (var i = 0; i < selectionBox.length; i++) {
    selectionBox[i].style.color = '#b3b3b3';
    selectionUnderline[i].style.width = '0vw';
  }
}

selectionBox[0].addEventListener('click',(e)=>{
  sectionBoxReset();
  e.currentTarget.children[1].style.width = '70%';
  console.log(e.target.children);
  carTextMoving[0].style.left = '0%';
  e.currentTarget.style.color = 'red';
});

selectionBox[1].addEventListener('click',(e)=>{
  sectionBoxReset();
  e.currentTarget.children[1].style.width = '80%';
  carTextMoving[0].style.left = '-100%';
  e.currentTarget.style.color = 'red';
});

selectionBox[2].addEventListener('click',(e)=>{
  sectionBoxReset();
  e.currentTarget.children[1].style.width = '80%';
  carTextMoving[0].style.left = '-200%';
  e.currentTarget.style.color = 'red';
});

// mob car commission
var commissionleftArrowBox = document.getElementsByClassName('commissionleftArrowBox');
var commissionrightPopArrow = document.getElementsByClassName('commissionrightPopArrow');
var titleContainer = document.getElementsByClassName('titleContainer');
var carTextMoving = document.getElementsByClassName('carTextMoving');

var commissionTitleContainerLeft = 0;
var commissionTextContainerLeft = -100;

commissionleftArrowBox[0].addEventListener('click',()=>{
  if(commissionTitleContainerLeft < 99){
    commissionTitleContainerLeft+= 100;
    commissionTextContainerLeft+= 100;
  }
  titleContainer[0].style.left = commissionTitleContainerLeft + '%';;
  carTextMoving[0].style.left = commissionTextContainerLeft + '%';
});

commissionleftArrowBox[1].addEventListener('click',()=>{
  if(commissionTitleContainerLeft > -99){
    commissionTitleContainerLeft-= 100;
    commissionTextContainerLeft-= 100;
  }
  titleContainer[0].style.left = commissionTitleContainerLeft + '%';;
  carTextMoving[0].style.left = commissionTextContainerLeft + '%';
});



// window events;
window.addEventListener('resize',()=>{
  // reset  the car for desk/mob
  carControlImageContainerInside[0].style.left = 0;
});
