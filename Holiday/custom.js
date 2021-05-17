
// Value(HTML) vs Data(numbers)
	var data = {
	  holidayOne: {
	    place: 'Samoa',
	    price: 889
	  },
	  holidayTwo: {
	    place: 'Fiji',
	    price: 759
	  },
	  hotelOne: {
	    name: 'Hilton',
	    pricePerNight: 269
	  },
	  hotelTwo: {
	    name: 'Sheraton',
	    pricePerNight: 249
	  }
	};
	// Obj ENDS
	
	// Variables
	var prices = [];
	var getBtn = document.querySelector('.btn')

// Button
	getBtn.onclick = function() {

	// *** click event will run this code
	var getLocation = document.querySelector('#holidaySlt').value;
	var getHotel = document.querySelector('#hotelSlt').value;
	console.log(getLocation);

	if (getLocation === 'Samoa $889.00' && getHotel === 'Hilton $269.00') {
		console.log(data.holidayOne.price + data.hotelOne.pricePerNight);
	}

	if  (getLocation === 'Fiji $759.00' && getHotel === 'Sheraton $249.00') {
		console.log(data.holidayTwo.price + data.hotelTwo.pricePerNight);
	}

	if (getHotel === 'Hilton $269.00' && getLocation === 'Fiji $759.00') {
		console.log(data.hotelOne.pricePerNight + data.holidayTwo.price);
	}

	if (getHotel === 'Sheraton $249.00' && getLocation === 'Samoa $889.00') {
		console.log(data.hotelTwo.pricePerNight + data.holidayOne.price);
	}

};
