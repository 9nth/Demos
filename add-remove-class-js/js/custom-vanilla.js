// All custom js here
console.log('working....');
// This is global

(function() {

  var cloudObject = {};
  console.log(cloudObject);

  // getBtnA.onclick = function () {
  //   startAnimation();
  // };
  //
  // getBtnB.onclick = function () {
  //   endAnimation();
  // };

  function getElementsFromDom () {
    console.log('is this working');
    var getDiv = document.querySelector('.holder');
    var getBtnA = document.querySelector('#addClassAnimation');
    var getBtnB = document.querySelector('#removeClassAnimation');

    cloudObject.getDivProp = getDiv;
    cloudObject.getDivBtnAProp = getBtnA;
    cloudObject.getDivBtnBProp = getBtnB;
  }

// call Function
  getElementsFromDom();


console.log(cloudObject);
console.log(getBtnB);

cloudObject.getDivBtnAProp.onclick = function () {
  console.log('done');
}

function startAnimation () {
  console.log('workingggg');
  getDiv.classList.add('animation');
}
  // function startAnimation () {
  //   console.log('working vanilla js....');
  //   getDiv.classList.add('animation');
  // }
  //
  // function endAnimation () {
  //   console.log('working vanilla js....');
  //   getDiv.classList.remove('animation');
  // }


}());
// iife ENDS
