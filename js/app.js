'use strict';

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to display an array as an HTML table
function displayArrayAsTable(data) {
  // Implementation for displaying array as table (not provided in the original code)
}

// Constructor function for City objects
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

// Prototype method to calculate the daily total sales for a city
City.prototype.calculateDailyTotal = function () {
  this.dailyTotal = this.hourlySales.reduce((acc, val) => acc + val, 0);
};

// Prototype method to simulate hourly sales for a city
City.prototype.simulateHourlySales = function () {
  let randomCustomers = getRandomInt(this.minCustomers, this.maxCustomers);
  let cookiesPurchased = Math.floor(randomCustomers * this.avgCookiesPerCustomer);
  this.hourlySales.push(cookiesPurchased);
  this.calculateDailyTotal();
  return cookiesPurchased;
};

// Prototype method to draw a row for a city in the HTML table
City.prototype.drawRow = function () {
  createCell(this.cityName, this.row);
  for (let i = 0; i < this.hourlySales.length; i++) {
    createCell(this.hourlySales[i], this.row);
  }
  createCell(this.dailyTotal, this.row);
};

// City objects
let seattle = new City("Seattle", 23, 65, 6.3);
let tokyo = new City("Tokyo", 3, 24, 1.2);
let dubai = new City("Dubai", 11, 38, 3.7);
let paris = new City("Paris", 20, 38, 2.3);
let lima = new City("Lima", 2, 16, 4.6);

// Array of City objects
let cities = [seattle, tokyo, dubai, paris, lima];

// Simulate hourly sales for each city from 6 am to 8 pm
for (let hour = 6; hour <= 20; hour++) {
  cities.forEach(function (city) {
    city.simulateHourlySales();
  });
}

// Get HTML table elements
let tHeadElement = document.getElementById('table-data');
let tBodyElement = document.getElementById('daily-totals');

// Create and append header row to the table
let headerRow = document.createElement('tr');
createCell('', headerRow);
for (let hour = 6; hour <= 20; hour++) {
  createCell(hour <= 12 ? hour + 'am' : (hour - 12) + 'pm', headerRow);
}
createCell('Daily Totals', headerRow);
tHeadElement.appendChild(headerRow);

// Draw rows for each city in the table body
cities.forEach(function (city) {
  city.drawRow();
  tBodyElement.appendChild(city.row);
});

// Create and append total column row to the table body
let totalColumn = document.createElement('tr');
createCell('Location Totals', totalColumn);
for (let i = 0; i < seattle.hourlySales.length; i++) {
  let hourlyTotal = cities.reduce((acc, city) => acc + city.hourlySales[i], 0);
  createCell(hourlyTotal, totalColumn);
}
createCell(cities.reduce((acc, city) => acc + city.dailyTotal, 0), totalColumn);
tBodyElement.appendChild(totalColumn);

// Function to create a table cell and append it to a row
function createCell(value, row) {
  let cell = document.createElement('td');
  cell.textContent = value;
  row.appendChild(cell);
}

// Event listener for form submission to add a new city
document.getElementById('table-form').addEventListener('submit', handleForm);

// Function to handle form submission
function handleForm(event) {
  event.preventDefault();

  let name = event.target.location.value;
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
function createCell(value, row) {
    let cell = document.createElement('td');
    cell.textContent = value;
    if (!isNaN(value)) {
      // Add a class for styling numbers
      cell.classList.add('numeric-cell');
    }
    row.appendChild(cell);
  }