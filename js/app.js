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
storeCookiesGenerator('1st and Pike', 'first', 23, 65, 6.3);
storeCookiesGenerator('SeaTac Airport', 'seatac', 3, 24, 1.2);
storeCookiesGenerator('Seattle Center', 'seattlecenter', 11, 38, 3.7);
storeCookiesGenerator('Capitol Hill', 'caphill', 20, 38, 2.3);
storeCookiesGenerator('Alki', 'alki', 2, 16, 4.6);

function storeCookiesGenerator(loc, idName, minCus, maxCus, avgCookies) {
  var shop = {
    location: loc,
    storeHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    // stores min/max hourly customers into object property
    minCustomers: minCus,
    maxCustomers: maxCus,
    // stores average cookies per customer into object property
    avgCookiesPerCustomer: avgCookies,
    // uses a method to generate a random # of customers per hour
    getCustomersPerHour: function(){
      this.firstCustomersPerHour = randomCustomersPerHour(this.minCustomers, this.maxCustomers);
    }
  };
  console.log(loc);

  function randomCustomersPerHour (min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
  };

  // objects added to sales.html in list format
  var parentEl = document.getElementById(idName);
  var article = document.createElement('article');
  parentEl.appendChild(article);
  var h2 = document.createElement('h2');
  h2.textContent = shop.location;
  article.appendChild(h2);
  var ul = document.createElement('ul');
  article.appendChild(ul);

  // calculate and list cookies sold per hour and total cookies
  shop.totalCookies = 0;
  shop.cookiesPerHour = [];
  shop.customersPerHour = [];

  for (var i = 0; i < shop.storeHours.length; i++) {
    var li = document.createElement('li');
    shop.getCustomersPerHour();
    shop.firstCookiesPerHour = Math.ceil(shop.firstCustomersPerHour * shop.avgCookiesPerCustomer);
    li.textContent = shop.storeHours[i] + ': ' + shop.firstCookiesPerHour + ' cookies';
    ul.appendChild(li);
    if (i < shop.storeHours.length - 1) {
      shop.cookiesPerHour += li.textContent + ', ';
      shop.customersPerHour += shop.storeHours[i] + ': ' + shop.firstCustomersPerHour + ' customers, ';
    } else {
      shop.cookiesPerHour += li.textContent + '.';
      shop.customersPerHour += shop.storeHours[i] + ': ' + shop.firstCustomersPerHour + ' customers.';
    }
    shop.totalCookies += shop.firstCookiesPerHour;
  };

  delete shop.firstCookiesPerHour;
  delete shop.firstCustomersPerHour;

  console.log(shop);

  var liTotal = document.createElement('li');
  liTotal.textContent = 'Total: ' + shop.totalCookies + ' cookies';
  ul.appendChild(liTotal);
}
