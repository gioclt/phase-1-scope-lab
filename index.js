var customerName = "bob";


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
        return customerName;
}


function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    return (bestCustomer = "maybe bob");
}

const leastFavoriteCustomer = "me"

function changeLeastFavoriteCustomer() {
    return (leastFavoriteCustomer = "you");
}
