// THWANG button

function thwang() {
  var audio = new Audio();
  audio.play();
}




// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("cornerBtn").style.display = "block";
  } else {
    document.getElementById("cornerBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





// Fun Event bullshit - for that Gastery, Gastery goodness!
// Currently not functional, will need to debug further.
function fun() {
  document.getElementById("fun1").style.display = "flex";
  document.getElementById("fun2").style.display = "flex";
  document.getElementById("fun3").style.display = "flex";
  document.getElementById("fun4").style.display = "flex";
  document.getElementById("fun5").style.display = "flex";
  
}

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
};

function areWeFun() {
  let gasternum = getRandomIntInclusive(1, 2);
  if (gasternum === 1) {
    fun();
  };
};

window.onload = function () {
    document.getElementById("copyright").innerHTML = new Date().getFullYear();
    areWeFun();
}