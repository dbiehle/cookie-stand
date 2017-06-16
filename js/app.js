'use strict';

// object constructor to create cookie stores
function CookieStores (shopName,minCustomers,maxCustomers,avgCookiesPerCustomer) {
  this.shopName = shopName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  this.customersPerHour = [];
  this.cookiesPerHour = [];
};

// function to return random number of customers per hour
CookieStores.prototype.getCustomersPerHour = function(){
  return randomNumberGenerator(this.minCustomers, this.maxCustomers);
};

function randomNumberGenerator (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Initialize table and create header for table with store hours
var parentEl = document.getElementById('needs');
var table = document.createElement('table');
var thead = document.createElement('thead');

CookieStores.prototype.addHeader = addHeader;

function addHeader() {
  var row = document.createElement('tr');
  var thBlank = document.createElement('th');
  thBlank.textContent = ' ';
  row.appendChild(thBlank);
  for (var j = 0; j < this.storeHours.length; j++) {
    var th = document.createElement('th');
    th.textContent = this.storeHours[j];
    row.appendChild(th);
  }
  var thTotal = document.createElement('th');
  thTotal.textContent = 'Totals';
  row.appendChild(thTotal);
  thead.appendChild(row);
}

// Empty object created to create header
// TODO: Is this necessary?
var foo = new CookieStores ('',0,0,0);
foo.addHeader();

// create body of table
var tbody = document.createElement('tbody');

// create form and event listener for adding new store locations to table
var storeForm = document.getElementById('addStoreForm');
storeForm.addEventListener('submit', addStoreHandler);

// event handler
function addStoreHandler(event){
  event.preventDefault();
  var shopName = event.target.shopName.value;
  var minCustomers = event.target.minCustomers.value;
  minCustomers = parseInt(minCustomers);
  var maxCustomers = event.target.maxCustomers.value;
  maxCustomers = parseInt(maxCustomers);
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;

  var newCookieStore = new CookieStores(shopName,minCustomers,maxCustomers,avgCookiesPerCustomer);
  newCookieStore.render();
  storeForm.reset();
}

CookieStores.prototype.render = render;

function render() {
  var row = document.createElement('tr');
  var th = document.createElement('th');
  th.textContent = this.shopName;
  row.appendChild(th);

  this.totalCookies = 0;

  for (var i = 0; i < this.storeHours.length; i++) {
    var td = document.createElement('td');
    this.customersPerHour[i] = this.getCustomersPerHour();
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.avgCookiesPerCustomer);
    td.textContent = this.cookiesPerHour[i];
    row.appendChild(td);
    this.totalCookies += this.cookiesPerHour[i];
  };
  var totalTh = document.createElement('th');
  totalTh.textContent = this.totalCookies;
  row.appendChild(totalTh);
  tbody.appendChild(row);
}


// Add footer
var tfoot = document.createElement('tfoot');
var rowFoot = document.createElement('tr');
var thFoot = document.createElement('th');
thFoot.textContent = 'Total per hour';
rowFoot.appendChild(thFoot);
tfoot.appendChild(rowFoot);
table.appendChild(tfoot);

table.appendChild(thead);
table.appendChild(tbody);
parentEl.appendChild(table);

// TODO: figure out this total per hour on footer thing
// var totalCookiesPerHour = [];
// totalCookiesPerHour[i] = this.cookiesPerHour[i];
// console.log('totalCookiesPerHour[i]' + totalCookiesPerHour[i]);
// var totalCell = document.createElement('td');
// totalCell.textContent = totalCookiesPerHour[i];
