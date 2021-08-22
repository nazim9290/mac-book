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
function getPrice() {
    var memoriId = document
        .getElementById("memory").innerText;
    var memoriPrice = parseInt(memoriId);
    var storageId = document
        .getElementById("storage").innerText;
    var storagePrice = parseInt(storageId);
    var chargeId = document
        .getElementById("charge").innerText;
    var chargePrice = parseInt(chargeId);

    let extraPrice = memoriPrice + storagePrice + chargePrice;
    console.log(extraPrice)
    return extraPrice
}

//Total Update
function totalUpdate() {

    var subTotal = getPrice() + 1299;

    document.getElementById("subtotal")
        .innerText = subTotal;

    document.getElementById("total")
        .innerText = subTotal;
    return subTotal;
}

//promotion
function applyPromo() {
    var promoCode = "stevekaku";
    var input = document.getElementById(
        "promo-code");
    var inputValue = input.value;

    var subtotal = totalUpdate();
    console.log(subtotal)
    if (inputValue == promoCode) {
        var totalPromoValue = subtotal - (
            subtotal * 20 / 100);

        document.getElementById("total")
            .innerText = totalPromoValue;
    }
    input.value = "";
}
