
'use strict';

// Location: 1st and Pike
var firstPike = {
  location: '1st and Pike',
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  avgCookiesPerCustomer: 6.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  getCustomersPerHour: function(){
    return randomCustomersPerHour(23, 65);
  }
};

function randomCustomersPerHour (min, max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
};

// objects added to sales.html in list format
var parentEl = document.getElementById('first');
var h2 = document.createElement('h2');
h2.textContent = firstPike.location;
parentEl.appendChild(h2);
var ul = document.createElement('ul');
parentEl.appendChild(ul);

// calculate and list cookies sold per hour and total cookies
for (var i = 0; i < firstPike.storeHours.length; i++) {
  firstPike.customersPerHour[i] = firstPike.getCustomersPerHour();
  firstPike.cookiesPerHour[i] = Math.ceil(firstPike.customersPerHour[i] * firstPike.avgCookiesPerCustomer);
  var li = document.createElement('li');
  li.textContent = firstPike.storeHours[i] + ': ' + firstPike.cookiesPerHour[i] + ' cookies';
  ul.appendChild(li);
  firstPike.totalCookies += firstPike.cookiesPerHour[i];
};


var liTotal = document.createElement('li');
liTotal.textContent = 'Total: ' + firstPike.totalCookies + ' cookies';
ul.appendChild(liTotal);


// Location: SeaTac Airport
var seatac = {
  location: 'SeaTac Airport',
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  avgCookiesPerCustomer: 1.2,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  getCustomersPerHour: function(){
    return randomCustomersPerHour(3, 24);
  }
};

// objects added to sales.html in list format
var parentEl_2 = document.getElementById('seatac');
var h2_2 = document.createElement('h2');
h2_2.textContent = seatac.location;
parentEl_2.appendChild(h2_2);
var ul_2 = document.createElement('ul');
parentEl_2.appendChild(ul_2);

// calculate and list cookies sold per hour and total cookies
for (i = 0; i < seatac.storeHours.length; i++) {
  seatac.customersPerHour[i] = seatac.getCustomersPerHour();
  seatac.cookiesPerHour[i] = Math.ceil(seatac.customersPerHour[i] * seatac.avgCookiesPerCustomer);
  var li_2 = document.createElement('li');
  li_2.textContent = seatac.storeHours[i] + ': ' + seatac.cookiesPerHour[i] + ' cookies';
  ul_2.appendChild(li_2);
  seatac.totalCookies += seatac.cookiesPerHour[i];
};

var liTotal_2 = document.createElement('li');
liTotal_2.textContent = 'Total: ' + seatac.totalCookies + ' cookies';
ul_2.appendChild(liTotal_2);


// Location: Seattle Center
var seattlecenter = {
  location: 'Seattle Center',
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  avgCookiesPerCustomer: 3.7,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  getCustomersPerHour: function(){
    return randomCustomersPerHour(11, 38);
  }
};

// objects added to sales.html in list format
var parentEl_3 = document.getElementById('first');
var h2_3 = document.createElement('h2');
h2_3.textContent = seattlecenter.location;
parentEl_3.appendChild(h2_3);
var ul_3 = document.createElement('ul');
parentEl_3.appendChild(ul_3);

// calculate and list cookies sold per hour and total cookies
for (i = 0; i < seattlecenter.storeHours.length; i++) {
  seattlecenter.customersPerHour[i] = seattlecenter.getCustomersPerHour();
  seattlecenter.cookiesPerHour[i] = Math.ceil(seattlecenter.customersPerHour[i] * seattlecenter.avgCookiesPerCustomer);
  var li_3 = document.createElement('li');
  li_3.textContent = seattlecenter.storeHours[i] + ': ' + seattlecenter.cookiesPerHour[i] + ' cookies';
  ul_3.appendChild(li_3);
  seattlecenter.totalCookies += seattlecenter.cookiesPerHour[i];
};

var liTotal_3 = document.createElement('li');
liTotal_3.textContent = 'Total: ' + seattlecenter.totalCookies + ' cookies';
ul_3.appendChild(liTotal_3);


// Location: Capitol Hill
var caphill = {
  location: 'Capitol Hill',
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  avgCookiesPerCustomer: 2.3,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  getCustomersPerHour: function(){
    return randomCustomersPerHour(20, 38);
  }
};

// objects added to sales.html in list format
var parentEl_4 = document.getElementById('first');
var h2_4 = document.createElement('h2');
h2_4.textContent = caphill.location;
parentEl_4.appendChild(h2_4);
var ul_4 = document.createElement('ul');
parentEl_4.appendChild(ul_4);

// calculate and list cookies sold per hour and total cookies
for (i = 0; i < caphill.storeHours.length; i++) {
  caphill.customersPerHour[i] = caphill.getCustomersPerHour();
  caphill.cookiesPerHour[i] = Math.ceil(caphill.customersPerHour[i] * caphill.avgCookiesPerCustomer);
  var li_4 = document.createElement('li');
  li_4.textContent = caphill.storeHours[i] + ': ' + caphill.cookiesPerHour[i] + ' cookies';
  ul_4.appendChild(li_4);
  caphill.totalCookies += caphill.cookiesPerHour[i];
};

var liTotal_4 = document.createElement('li');
liTotal_4.textContent = 'Total: ' + caphill.totalCookies + ' cookies';
ul_4.appendChild(liTotal_4);


// Location: Alki
var alki = {
  location: 'Alki',
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  avgCookiesPerCustomer: 4.6,
  cookiesPerHour: [],
  customersPerHour: [],
  totalCookies: 0,
  getCustomersPerHour: function(){
    return randomCustomersPerHour(2, 16);
  }
};

// objects added to sales.html in list format
var parentEl_5 = document.getElementById('first');
var h2_5 = document.createElement('h2');
h2_5.textContent = alki.location;
parentEl_5.appendChild(h2_5);
var ul_5 = document.createElement('ul');
parentEl_5.appendChild(ul_5);

// calculate and list cookies sold per hour and total cookies
for (i = 0; i < alki.storeHours.length; i++) {
  alki.customersPerHour[i] = alki.getCustomersPerHour();
  alki.cookiesPerHour[i] = Math.ceil(alki.customersPerHour[i] * alki.avgCookiesPerCustomer);
  var li_5 = document.createElement('li');
  li_5.textContent = alki.storeHours[i] + ': ' + alki.cookiesPerHour[i] + ' cookies';
  ul_5.appendChild(li_5);
  alki.totalCookies += alki.cookiesPerHour[i];
};

var liTotal_5 = document.createElement('li');
liTotal_5.textContent = 'Total: ' + alki.totalCookies + ' cookies';
ul.appendChild(liTotal);
