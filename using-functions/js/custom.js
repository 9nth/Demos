// ***Task A: Add comments to the code below.

// ***Task B: Complete the code so when the user clicks the update button, the DOM/HTML is
// updated. Use Pseudo Code

// *PseudoCode
    // 1. Identify where VARS are connected to HTML
    // 2. Setup document.write statements in the right place for each change (Font color, BG Color, Font Size)
    // 3. Write CSS in above statements (Color Selection)

// *** Task C:  Create a class that when added to the body with javascript, turns the entire UI
// into a dark theme. This will occur when he #dark button is clicked. You will need both .js
// and css for this.

// Variable for Update Button. Variable GRABS the update button
var getUpdateButton = document.getElementById('update');
// Variable for Dark Theme Button
var getDarkButton = document.getElementById('dark');


// Click Function for the update button
getUpdateButton.onclick = function () {
  // Date Var
  var date = document.querySelector('.holder');
  // Variables to Access What is Typed
  var getFontColor = document.getElementById('selectFontColor').value;
  var getBackgroundColor = document.getElementById('selectBackgroundColor').value;
  var getFontSize = document.getElementById('selectFontSize').value;

// Changes to whatever is typed (Type in "white" or HEX Number) SO COOL!!!!
    date.style.color = getFontColor;
    date.style.backgroundColor = getBackgroundColor;
    date.style.fontSize = getFontSize;


  console.log(getFontColor);
  console.dir(getBackgroundColor);
  console.log(getFontSize);
};


getDarkButton.onclick = function () {
  // Grabbing the OLD CLASS Below
  var darkMode = document.querySelector('body')
  // Replacing the OLD CLASS with the NEW CLASS when clicked
  darkMode.classList.add('darkMode')

  var darkHolder = document.querySelector('.holder')
  darkHolder.classList.add('darkHolder')
}
