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
}

// 1. Create Function for Button To Calculate TOTAL
// 2. Add Var Data Together To Find Total
// 3. Console Log Total

// Button To Calculate The Total
$('.btn').click(function() {
  bookTrip();
  console.log(data.holidayOne.price + data.hotelOne.pricePerNight);
});
console.log(data.holidayOne);
