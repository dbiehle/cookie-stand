'use strict';

// object constructor to create cookie stores
function CookieStores (shopName,minCustomers,maxCustomers,avgCookiesPerCustomer) {
  this.shopName = shopName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
};

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

var foo = new CookieStores ('',0,0,0);
foo.addHeader();

// create body of table
var tbody = document.createElement('tbody');

// create form for adding new store locations to table
var storeForm = document.getElementById('addStoreForm');
storeForm.addEventListener('submit', addStoreHandler);

function addStoreHandler(event){
  event.preventDefault();
  var shopName = event.target.shopName.value;
  var minCustomers = event.target.minCustomers.value;
  minCustomers = parseInt(minCustomers);
  console.log('parseint minCustomers: ' + minCustomers);
  var maxCustomers = event.target.maxCustomers.value;
  maxCustomers = parseInt(maxCustomers);
  console.log('parseint maxCustomers: ' + maxCustomers);
  var avgCookiesPerCustomer = event.target.avgCookiesPerCustomer.value;
  console.log('NO parseint avgCookiesPerCustomer: ' + avgCookiesPerCustomer);

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
    this.customersPerHour = this.getCustomersPerHour();
    console.log('customers per hour ' + this.customersPerHour);
    this.cookiesPerHour = Math.ceil(this.customersPerHour * this.avgCookiesPerCustomer);
    // console.log(this.cookiesPerHour);
    td.textContent = this.cookiesPerHour;
    row.appendChild(td);
    this.totalCookies += this.cookiesPerHour;
  };
  var totalTh = document.createElement('th');
  totalTh.textContent = this.totalCookies;
  row.appendChild(totalTh);
  tbody.appendChild(row);
}

// create store location objects
// var firstPike = new CookieStores ('1st and Pike', 23, 65, 6.3);
// var seatac = new CookieStores ('SeaTac Airport', 3, 24, 1.2);
// var seattleCenter = new CookieStores ('Seattle Center', 11, 38, 3.7);
// var capHill = new CookieStores ('Capitol Hill', 20, 38, 2.3);
// var alki = new CookieStores ('Alki', 2, 16, 4.6);

// add cells and cookie needs and totals to table
// firstPike.addHeader();
// firstPike.render();
// seatac.render();
// seattleCenter.render();
// capHill.render();
// alki.render();

// Add footer
// TODO: need to add totals per hour across locations to this footer
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
