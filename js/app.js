// problem domain:
// Pat needs to calculate the number of cookies each location must make each day so the company can manage supplies inventory and baking schedule.
//  number of cookies to make for each location
//    depends on following factors:
//      hours of operation for each location
//      minimum # of customers per hour
//      maximum # of customers per hour
//      average number of cookies purchased per customer
// Pat wants adapatability so she can:
//  add/remove locations from daily projections report,
//  modify input numbers for each location based on day of the week, special events, etc.
// Pat wants nice formatting in the web application.
// Pat wants customer-facing website designed, too.
//  a color scheme,
//  custom font
//  additional images

'use strict';

// separate object for each shop location
var firstPike = {
  location: '1st and Pike',
  storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  // stores min/max hourly customers into object property
  minCustomers: 23,
  maxCustomers: 65,
  // stores average cookies per customer into object property
  avgCookiesPerCustomer: 6.3,
  // uses a method to generate a random # of customers per hour
  getCustomersPerHour: function(){
    this.customersPerHour = randomCustomersPerHour(this.minCustomers, this.maxCustomers);
  }
};

console.log(firstPike);

function randomCustomersPerHour (min, max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
};

var parentEl = document.getElementById('first');
var article = document.createElement('article');
parentEl.appendChild(article);
var h2 = document.createElement('h2');
h2.textContent = firstPike.location;
article.appendChild(h2);
var ul = document.createElement('ul');
article.appendChild(ul);

// firstPike.getCustomersPerHour();

var totalCookies = 0;

for (var i = 0; i < firstPike.storeHours.length; i++) {
  var li = document.createElement('li');
  firstPike.getCustomersPerHour();
  var cookiesPerHour = Math.ceil(firstPike.customersPerHour * firstPike.avgCookiesPerCustomer);
  li.textContent = firstPike.storeHours[i] + ': ' + cookiesPerHour + ' cookies';
  ul.appendChild(li);
  totalCookies += cookiesPerHour;
}

var liTotal = document.createElement('li');
liTotal.textContent = 'Total: ' + totalCookies + ' cookies';
ul.appendChild(liTotal);
