window.onload = function() {
  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');

  box1.style.top = 0;
  box2.style.bottom = 0;
  box3.style.top = 0;
  box4.style.bottom = 0;
};

function moveRight() {
  var nFilter = document.getElementById('container');

  // nFilter.style.alignItems = 'flex-end';

  box1.style.left = "85vw";
  // box1.style.order = 2;
  box1.style.top = "120px";

  box2.style.left = "85vw";
  // box2.style.order = 1;
  box2.style.bottom = "120px";

  box3.style.left = "85vw";
  // box3.style.order = 4;
  box3.style.top = "120px";

  box4.style.left = "85vw";
  // box4.style.order = 3;
  box4.style.bottom = "120px";
}

function goBack() {
  var nFilter = document.getElementById('container');

  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');

  // nFilter.style.alignItems = 'flex-start';

  box1.style.left = 0;
  // box1.style.order = 1;
  box1.style.top = "0";

  box2.style.left = 0;
  // box2.style.order = 2;
  box2.style.bottom = "0";

  box3.style.left = 0;
  // box3.style.order = 3;
  box3.style.top = "0";

  box4.style.left = 0;
  // box4.style.order = 4;
  box4.style.bottom = "0";
}
