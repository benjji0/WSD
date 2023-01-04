function setCookie(cvalue) {
    var x = cvalue
    document.cookie = x + ";";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[ i ];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function display() {
    var value = document.getElementById("color").value;

    document.body.style.backgroundColor = value;
    setCookie(color, value);
}
window.onload = function () {
    if (document.cookie.length != 0) {
        var array = document.cookie.split("=");
        document.getElementById("color").value = array[1];
        document.body.style.backgroundColor = array[1];
    }
};

function store() { //stores items in the sessionStorage
    var brand = document.getElementById('carBrand').value;
    var price = document.getElementById('carPrice').value;

    const car = {
        brand: brand,
        price: price,
    }
    
    window.sessionStorage.setItem('car',JSON.stringify(car));  
    //converting object to string
}

function retrieveRecords() { //retrieves items in the sessionStorage
        console.log("retrive records");
        var records = window.sessionStorage.getItem('car');
        var paragraph = document.createElement("p");
        var infor = document.createTextNode(records);
        paragraph.appendChild(infor);
        var element = document.getElementById("retrieve");
        element.appendChild(paragraph);
}

function removeItem() {//deletes item from sessionStorage
        sessionStorage.removeItem('car');
        console.log("remove items");
        location.reload();
}

function clearStorage() { //clears the entire sessionStorage
        sessionStorage.clear();
        console.log("clear records");
        location.reload();
}

window.onload =function() { //ensures the page is loaded before functions are executed.
        document.getElementById("carForm").onsubmit = store;
        document.getElementById("clearButton").onclick = clearStorage;
        document.getElementById("removeButton").onclick = removeItem;
        document.getElementById("retrieveButton").onclick = retrieveRecords;
}




