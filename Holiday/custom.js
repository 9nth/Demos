
// Value(HTML) vs Data(numbers)
	var data = {
	  holidayOne: {
	    place: 'Samoa',
	    price: 889,
			image: 'img/samoa-image.png',
	  },
	  holidayTwo: {
	    place: 'Fiji',
	    price: 759,
			image: 'img/fiji-image.png',
	  },
	  hotelOne: {
	    name: 'Hilton',
	    pricePerNight: 269,
			image: 'img/hilton-image.png',
	  },
	  hotelTwo: {
	    name: 'Sheraton',
	    pricePerNight: 249,
			image: 'img/sher-image.png',
	  }
	};
	// Obj ENDS

	// Variables
	var prices = [];
	var getBtn = document.querySelector('.btn')


// Button
	getBtn.onclick = function() {
console.log(getLocation);
	// *** click event will run this code
	var getLocation = document.querySelector('#holidaySlt').value;
	var getHotel = document.querySelector('#hotelSlt').value;
	var getTotal = document.getElementById('totalPrice');
	// Images
	var getSamoa = document.getElementById('samoaImage');
	var getFiji = document.getElementById('fijiImage');
	var getHilton = document.getElementById('hiltonImage');
	var getSheraton = document.getElementById('sheratonImage');

	if (getLocation === 'Samoa $889.00' && getHotel === 'Hilton $269.00') {
		getTotal.textContent = data.holidayOne.price + data.hotelOne.pricePerNight;
		getSamoa.style.display = 'inline';
		getFiji.style.display = 'none';
		getHilton.style.display = 'inline';
		getSheraton.style.display = 'none';
	}

	if  (getLocation === 'Fiji $759.00' && getHotel === 'Sheraton $249.00') {
		getTotal.textContent = data.holidayTwo.price + data.hotelTwo.pricePerNight;
		getSamoa.style.display = 'none';
		getFiji.style.display = 'inline';
		getHilton.style.display = 'none';
		getSheraton.style.display = 'inline';
	}

	if (getHotel === 'Hilton $269.00' && getLocation === 'Fiji $759.00') {
		getTotal.textContent = data.hotelOne.pricePerNight + data.holidayTwo.price;
		getSamoa.style.display = 'none';
		getFiji.style.display = 'inline';
		getHilton.style.display = 'inline';
		getSheraton.style.display = 'none';
	}

	if (getHotel === 'Sheraton $249.00' && getLocation === 'Samoa $889.00') {
		getTotal.textContent = data.hotelTwo.pricePerNight + data.holidayOne.price;
		getSamoa.style.display = 'inline';
		getFiji.style.display = 'none';
		getHilton.style.display = 'none';
		getSheraton.style.display = 'inline';
	}

};
