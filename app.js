//commonfunction
function updatePrice(product, price) {
    var commonId = document
        .getElementById(product).innerText = price;
    totalUpdate()
}


//memory
var memory8Gb = document.getElementById(
    "memory8gb");
memory8Gb.addEventListener("click",
    function () {
        updatePrice("memory", 0)
    }
)

var memory16Gb = document.getElementById(
    "memory16gb");
memory16Gb.addEventListener("click",
    function () {
        updatePrice("memory", 180)
    }
)

//storage
var storage1 = document.getElementById(
    "storage1");
storage1.addEventListener("click",
    function () {
        updatePrice("storage", 0)
    }
)

var storage2 = document.getElementById(
    "storage2");
storage2.addEventListener("click",
    function () {
        updatePrice("storage", 100)
    }
)
var storage3 = document.getElementById(
    "storage3");
storage3.addEventListener("click",
    function () {
        updatePrice("storage", 180)
    }
)

//shipping

var shipping1 = document
    .getElementById("free-ship");
shipping1.addEventListener("click",
    function () {
        updatePrice("charge", 0)
    }
)

var entryShip = document
    .getElementById("entry-ship");
entryShip.addEventListener("click",
    function () {
        updatePrice("charge", 20)
    }
)
//get value
function getPrice(productprice) {
    let price = document
        .getElementById(productprice);
    var priceValue = parseInt(price
        .innerText);
    return priceValue;

}

//Total Update
function totalUpdate() {
    var subTotal = getPrice("subtotal");
    var totalPrice = getPrice("total");

    var memoriPrice = getPrice(
        "memory");
    var storagePrice = getPrice(
        "storage");

    var shippingPrice = getPrice(
        "charge");


    var subTotalValue = subTotal + memoriPrice + shippingPrice;
    document.getElementById("subtotal")
        .innerText = subTotalValue;


    var totalValue = totalPrice;
    document.getElementById("total")
        .innerText = subTotalValue;
}

//promotion
function applyPromo() {
    var promoCode = "stevekaku";
    var input = document.getElementById(
        "promo-code");
    var inputValue = input.value;

    var subtotal1 = getPrice(
        "subtotal");
    if (inputValue == promoCode) {
        var totalPromoValue = subtotal1 - (
            subtotal1 * 20 / 100);

        document.getElementById("total")
            .innerText = totalPromoValue;
    }
    input.value = "";
}
