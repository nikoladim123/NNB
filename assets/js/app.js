// order commission relationship
var selectionBox = document.getElementsByClassName('selectionBox');
var carTextMoving = document.getElementsByClassName('carTextMoving');
var selectionUnderline = document.getElementsByClassName('selectionUnderline');

function sectionBoxReset() {
  for (var i = 0; i < selectionBox.length; i++) {
    selectionBox[i].style.color = 'black';
    selectionUnderline[i].style.width = '0vw';
  }
}

selectionBox[0].addEventListener('click',(e)=>{
  sectionBoxReset();
  e.currentTarget.children[1].style.width = '23.31578vw';
  console.log(e.target.children);
  carTextMoving[0].style.left = '0%';
  e.currentTarget.style.color = 'red';
});

selectionBox[1].addEventListener('click',(e)=>{
  sectionBoxReset();
  e.currentTarget.children[1].style.width = '23.31578vw';
  carTextMoving[0].style.left = '-100%';
  e.currentTarget.style.color = 'red';
});

selectionBox[2].addEventListener('click',(e)=>{
  sectionBoxReset();
  e.currentTarget.children[1].style.width = '23.31578vw';
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