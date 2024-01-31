// Constructor function for Salmon Cookie Stand
function SalmonCookieStand(location, minCustomers, maxCustomers, avgCookiesPerCustomer) {
    this.location = location;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.cookiesPerHour = [];
    this.dailyTotal = 0;
}

// Method to calculate random customers and populate cookiesPerHour array
SalmonCookieStand.prototype.calculateCookiesPerHour = function () {
    for (let i = 6; i <= 19; i++) {
        let customers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
        let cookies = Math.round(customers * this.avgCookiesPerCustomer);
        this.cookiesPerHour.push(cookies);
        this.dailyTotal += cookies;
    }
};

// Method to render the table row for the Salmon Cookie Stand
SalmonCookieStand.prototype.render = function () {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${this.location}</td>`;
    for (let i = 0; i < this.cookiesPerHour.length; i++) {
        tableRow.innerHTML += `<td>${this.cookiesPerHour[i]}</td>`;
    }
    tableRow.innerHTML += `<td>${this.dailyTotal}</td>`;
    return tableRow;
};

// Create instances for each Salmon Cookie Stand
const seattle = new SalmonCookieStand('Seattle', 23, 65, 6.3);
const tokyo = new SalmonCookieStand('Tokyo', 3, 24, 1.2);
const dubai = new SalmonCookieStand('Dubai', 11, 38, 3.7);
const paris = new SalmonCookieStand('Paris', 20, 38, 2.3);
const lima = new SalmonCookieStand('Lima', 2, 16, 4.6);

// Calculate cookies per hour for each Salmon Cookie Stand
seattle.calculateCookiesPerHour();
tokyo.calculateCookiesPerHour();
dubai.calculateCookiesPerHour();
paris.calculateCookiesPerHour();
lima.calculateCookiesPerHour();

// Render table header
function renderTableHeader() {
    const tableHeader = document.createElement('tr');
    tableHeader.innerHTML = '<th></th>';
    for (let i = 6; i <= 19; i++) {
        tableHeader.innerHTML += `<th>${i}:00</th>`;
    }
    tableHeader.innerHTML += '<th>Daily Location Total</th>';
    return tableHeader;
}

// Render table footer with totals
function renderTableFooter() {
    const tableFooter = document.createElement('tr');
    tableFooter.innerHTML = '<td>Totals</td>';
    for (let i = 6; i <= 19; i++) {
        let hourTotal = 0;
        for (const stand of [seattle, tokyo, dubai, paris, lima]) {
            hourTotal += stand.cookiesPerHour[i - 6];
        }
        tableFooter.innerHTML += `<td>${hourTotal}</td>`;
    }
    tableFooter.innerHTML += '<td></td>'; // Add an empty cell for the Daily Grand Total
    return tableFooter;
}

// Render the entire table
function renderTable() {
    const table = document.createElement('table');
    table.appendChild(renderTableHeader());

    for (const stand of [seattle, tokyo, dubai, paris, lima]) {
        table.appendChild(stand.render());
    }

    table.appendChild(renderTableFooter());
    document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();
