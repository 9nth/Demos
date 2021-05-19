// All custom js here

  console.log('working....');
  // This is global

  // iife immediately invoked functional expression
  (function() {

    var cloudObject = {
      div: false,
      btnA: false,
      btnB: false
    };

    // *** Vars below are inside the function scope // Hidden from external code
    // Use the cloud object to access them
    function setupElements () {
      var getDiv = document.querySelector('.holder');
      var getBtnA = document.querySelector('#addClassAnimation');
      var getBtnB = document.querySelector('#removeClassAnimation');

      // Setting up our cloud object
      cloudObject.div = getDiv;
      cloudObject.btnA = getBtnA;
      cloudObject.btnB = getBtnB;

      console.log(cloudObject);

      // Setup click events
      cloudObject.btnA.onclick = function () {
        console.log('working...');
        // calling the functions
        startAnimation();
      };

      cloudObject.btnB.onclick = function () {
        // calling the functions
        endAnimation();
      };

      // setup setupClicks
      // setupClicks();
    }


    function startAnimation () {
      console.log('working vanilla js....');
      // Adding a class with vanilla .js
      cloudObject.div.classList.add('animation');
    }

    function endAnimation () {
      console.log('working vanilla js....');
      // Removing a class with vanilla .js
      cloudObject.div.classList.remove('animation');
    }

    // Init function
    setupElements();

  }());
  // iife ENDS
