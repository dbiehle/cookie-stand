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
  // stores min/max hourly customers into object property
  minCustomers: 23,
  maxCustomers: 65,
  // stores average cookies per customer into object property
  avgCookiesPerCustomer: 6.3,
  // uses a method to generate a random # of customers per hour
  customersPerHour: 0,
  getCustomersPerHour: function(){
    this.customersPerHour = randomCustomersPerHour(this.minCustomers, this.maxCustomers) + ' customers per hour';
  },
  // calculate and store simulated amount of cookies purchased for each hour using avg cookies purchased and the random number of customers generated
  // resultsArray = [this.location, this.minCustomers, this.maxCustomers, this.avgCookiesPerCustomer, this.customersPerHour]
};

function randomCustomersPerHour (min, max) {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}

firstPike.getCustomersPerHour();

console.log(firstPike);
