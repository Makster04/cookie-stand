'use strict';
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function displayArrayAsTable(data) {
}
function City(cityName, minCustomers, maxCustomers, avgCookiesPerCustomer) {
  this.cityName = cityName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlySales = [];
  this.dailyTotal = 0;
  this.row = document.createElement('tr');
  this.calculateDailyTotal(); 
}
City.prototype.calculateDailyTotal = function () {
  this.dailyTotal = this.hourlySales.reduce((acc, val) => acc + val, 0);
};
City.prototype.simulateHourlySales = function () {
  let randomCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  let cookiesPurchased = Math.floor(randomCustomers * this.avgCookiesPerCustomer);
  this.hourlySales.push(cookiesPurchased);
  this.calculateDailyTotal(); 
  return cookiesPurchased;
};
City.prototype.drawRow = function () {
  createCell(this.cityName, this.row);
  for (let i = 0; i < this.hourlySales.length; i++) {
    createCell(this.hourlySales[i], this.row);
  }
  createCell(this.dailyTotal, this.row);
};

let seattle = new City("Seattle", 23, 65, 6.3);
let tokyo = new City("Tokyo", 3, 24, 1.2);
let dubai = new City("Dubai", 11, 38, 3.7);
let paris = new City("Paris", 20, 38, 2.3);
let lima = new City("Lima", 2, 16, 4.6);

let cities = [seattle, tokyo, dubai, paris, lima];

for (let hour = 6; hour <= 20; hour++) {
  cities.forEach(function (city) {
    city.simulateHourlySales();
  });
}
let tHeadElement = document.getElementById('table-data');
let tBodyElement = document.getElementById('daily-totals');

let headerRow = document.createElement('tr');
createCell('', headerRow); 
for (let hour = 6; hour <= 20; hour++) {
  createCell(hour <= 12 ? hour + 'am' : (hour - 12) + 'pm', headerRow);
}
createCell('Daily Totals', headerRow); 
tHeadElement.appendChild(headerRow);

cities.forEach(function (city) {
  city.drawRow();
  tBodyElement.appendChild(city.row);
});

let totalColumn = document.createElement('tr');
createCell('Location Totals', totalColumn); 
for (let i = 0; i < seattle.hourlySales.length; i++) {
  let hourlyTotal = cities.reduce((acc, city) => acc + city.hourlySales[i], 0);
  createCell(hourlyTotal, totalColumn);
}
createCell(cities.reduce((acc, city) => acc + city.dailyTotal, 0), totalColumn);
tBodyElement.appendChild(totalColumn); 

function createCell(value, row) {
  let cell = document.createElement('td');
  cell.textContent = value;
  row.appendChild(cell);
}

document.getElementById('table-form').addEventListener('submit', handleForm);

function handleForm(event) {
  event.preventDefault();
  
  let name = event.target.location.value
  let minCustomers = parseInt(event.target['min-customers'].value);
  let maxCustomers = parseInt(event.target['max-customers'].value);
  let avgCookiesPerCustomer = parseFloat(event.target['avg-cookies'].value);
  
  
  let newCity = new City(name, minCustomers, maxCustomers, avgCookiesPerCustomer);
  
  for (let hour = 6; hour <= 20; hour++) {
    newCity.simulateHourlySales();
  }
  

  newCity.drawRow();


  document.getElementById('table-data').appendChild(newCity.row);
}