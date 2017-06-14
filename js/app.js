// problem domain:
// Pat needs to calculate the number of cookies each location must make each day so the company can manage supplies inventory and baking schedule.
//  number of cookies to make for each location
//    depends on following factors:
//      hours of operation for each location ("6am to 8pm" for all locations)
//      minimum # of customers per hour (provided)
//      maximum # of customers per hour (provided)
//      average number of cookies purchased per customer (provided)
// Pat wants adapatability so she can:
//    add/remove locations from daily projections report,
//    modify input numbers for each location based on day of the week, special events, etc.
// Pat wants nice formatting in the web application.
// Pat wants customer-facing website designed, too.
//    a color scheme,
//    custom font,
//    additional images

'use strict';

// separate object for each shop location

function CookieStores (shopName,minCustomers,maxCustomers,avgCookiesPerCustomer) {
  this.shopName = shopName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
};

CookieStores.prototype.getCustomersPerHour = function(){
  this.customersPerHour = randomNumberGenerator(this.minCustomers, this.maxCustomers);
};

function randomNumberGenerator (min, max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
};

var firstPike = new CookieStores ('1st and Pike', 23, 65, 6.3);
var seatac = new CookieStores ('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new CookieStores ('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStores ('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStores ('Alki', 2, 16, 4.6);


// objects added to sales.html in list format
// var article = document.createElement('article');
// parentEl.appendChild(article);
// var h2 = document.createElement('h2');
// h2.textContent = shop.location;
// article.appendChild(h2);
// var ul = document.createElement('ul');
// article.appendChild(ul);
var parentEl = document.getElementById('needs');
var table = document.createElement('table');
var thead = document.createElement('thead');
var row1 = document.createElement('tr');


var th1_1 = document.createElement('th');
th1_1.textContent = ' ';
var th1_2 = document.createElement('th');
th1_2.textContent = firstPike.storeHours[0];
var th1_3 = document.createElement('th');
th1_3.textContent = firstPike.storeHours[1];
var th1_4 = document.createElement('th');
th1_4.textContent = firstPike.storeHours[2];

var tbody = document.createElement('tbody');
var row2 = document.createElement('tr');
var th2_1 = document.createElement('th');
th2_1.textContent = firstPike.shopName;

row1.appendChild(th1_1);
row1.appendChild(th1_2);
row1.appendChild(th1_3);
row1.appendChild(th1_4);
row2.appendChild(th2_1);

// var td2_2 = document.createElement('td');
// th2_2.textContent =
// var td2_3 = document.createElement('td');
// var td2_4 = document.createElement('td');

// var row3 = document.createElement('tr');
// var row4 = document.createElement('tr');
// var row5 = document.createElement('tr');
// var row6 = document.createElement('tr');



  // calculate and list cookies sold per hour and total cookies
// firstPike.getCustomersPerHour();
firstPike.totalCookies = 0;
// firstPike.cookiesPerHour = [];
// firstPike.customersPerHour = [];

for (var i = 0; i < firstPike.storeHours.length; i++) {
  var td = document.createElement('td');
  firstPike.getCustomersPerHour();
  firstPike.cookiesPerHour = Math.ceil(firstPike.customersPerHour * firstPike.avgCookiesPerCustomer);
  td.textContent = firstPike.cookiesPerHour;
  row2.appendChild(td);
  // firstPike.totalCookies += firstPike.cookiesPerHour;
};

tbody.appendChild(row2);
thead.appendChild(row1);
table.appendChild(thead);
parentEl.appendChild(table);
// var liTotal = document.createElement('li');
// liTotal.textContent = 'Total: ' + shop.totalCookies + ' cookies';
// ul.appendChild(liTotal);
