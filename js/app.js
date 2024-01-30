// Function to generate a random number of customers within a range
function getRandomCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to calculate cookies sold in a given hour
function calculateCookies(customers, avgCookies) {
    return Math.round(customers * avgCookies);
}

// Shop locations
const seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    salesData: [],
    calculateSalesData: function () {
        for (let hour = 6; hour <= 19; hour++) {
            const customers = getRandomCustomers(this.minCustomers, this.maxCustomers);
            const cookiesSold = calculateCookies(customers, this.avgCookies);
            this.salesData.push({ hour: `${hour} o'clock`, cookies: cookiesSold });
        }
    },
    renderSalesData: function () {
        const ul = document.createElement('ul');
        for (const sale of this.salesData) {
            const li = document.createElement('li');
            li.textContent = `${sale.hour}: ${sale.cookies} cookies`;
            ul.appendChild(li);
        }
        const totalLi = document.createElement('li');
        totalLi.textContent = `SEATTLE TOTAL: ${this.calculateTotalCookies()} cookies`;
        ul.appendChild(totalLi);

        document.body.appendChild(ul);
    },
    calculateTotalCookies: function () {
        return this.salesData.reduce((total, sale) => total + sale.cookies, 0);
    }
    
};

const tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    salesData: [],
    calculateSalesData: function () {
        for (let hour = 6; hour <= 19; hour++) {
            const customers = getRandomCustomers(this.minCustomers, this.maxCustomers);
            const cookiesSold = calculateCookies(customers, this.avgCookies);
            this.salesData.push({ hour: `${hour} o'clock`, cookies: cookiesSold });
        }
    },
    renderSalesData: function () {
        const ul = document.createElement('ul');
        for (const sale of this.salesData) {
            const li = document.createElement('li');
            li.textContent = `${sale.hour}: ${sale.cookies} cookies`;
            ul.appendChild(li);
        }
        const totalLi = document.createElement('li');
        totalLi.textContent = `TOKYO TOTAL: ${this.calculateTotalCookies()} cookies`;
        ul.appendChild(totalLi);

        document.body.appendChild(ul);
    },
    calculateTotalCookies: function () {
        return this.salesData.reduce((total, sale) => total + sale.cookies, 0);
    }
};

const dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    salesData: [],
    calculateSalesData: function () {
        for (let hour = 6; hour <= 19; hour++) {
            const customers = getRandomCustomers(this.minCustomers, this.maxCustomers);
            const cookiesSold = calculateCookies(customers, this.avgCookies);
            this.salesData.push({ hour: `${hour} o'clock`, cookies: cookiesSold });
        }
    },
    renderSalesData: function () {
        const ul = document.createElement('ul');
        for (const sale of this.salesData) {
            const li = document.createElement('li');
            li.textContent = `${sale.hour}: ${sale.cookies} cookies`;
            ul.appendChild(li);
        }
        const totalLi = document.createElement('li');
        totalLi.textContent = `DUBAI TOTAL: ${this.calculateTotalCookies()} cookies`;
        ul.appendChild(totalLi);

        document.body.appendChild(ul);
    },
    calculateTotalCookies: function () {
        return this.salesData.reduce((total, sale) => total + sale.cookies, 0);
    }
};
const paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    salesData: [],
    calculateSalesData: function () {
        for (let hour = 6; hour <= 19; hour++) {
            const customers = getRandomCustomers(this.minCustomers, this.maxCustomers);
            const cookiesSold = calculateCookies(customers, this.avgCookies);
            this.salesData.push({ hour: `${hour} o'clock`, cookies: cookiesSold });
        }
    },
    renderSalesData: function () {
        const ul = document.createElement('ul');
        for (const sale of this.salesData) {
            const li = document.createElement('li');
            li.textContent = `${sale.hour}: ${sale.cookies} cookies`;
            ul.appendChild(li);
        }
        const totalLi = document.createElement('li');
        totalLi.textContent = `PARIS TOTAL: ${this.calculateTotalCookies()} cookies`;
        ul.appendChild(totalLi);

        document.body.appendChild(ul);
    },
    calculateTotalCookies: function () {
        return this.salesData.reduce((total, sale) => total + sale.cookies, 0);
    }
};

const lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    salesData: [],
    calculateSalesData: function () {
        for (let hour = 6; hour <= 19; hour++) {
            const customers = getRandomCustomers(this.minCustomers, this.maxCustomers);
            const cookiesSold = calculateCookies(customers, this.avgCookies);
            this.salesData.push({ hour: `${hour} o'clock`, cookies: cookiesSold });
        }
    },
    renderSalesData: function () {
        const ul = document.createElement('ul');
        for (const sale of this.salesData) {
            const li = document.createElement('li');
            li.textContent = `${sale.hour}: ${sale.cookies} cookies`;
            ul.appendChild(li);
        }
        const totalLi = document.createElement('li');
        totalLi.textContent = `LIMA TOTAL: ${this.calculateTotalCookies()} cookies`;
        ul.appendChild(totalLi);

        document.body.appendChild(ul);
    },
    calculateTotalCookies: function () {
        return this.salesData.reduce((total, sale) => total + sale.cookies, 0);
    }
};

// Generate and display sales data
seattle.calculateSalesData();
seattle.renderSalesData();

tokyo.calculateSalesData();
tokyo.renderSalesData();

dubai.calculateSalesData();
dubai.renderSalesData();

paris.calculateSalesData();
paris.renderSalesData();

lima.calculateSalesData();
lima.renderSalesData();