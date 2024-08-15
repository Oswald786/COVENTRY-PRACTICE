function submitForm(event) {

    const firstName = document.getElementById('firstName').value; 
    const lastName = document.getElementById('lastName').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const question = document.getElementById('comments').value;

    const selectedRadio = document.querySelector('input[name="queryType"]:checked').value;

    console.log(firstName)
    console.log(lastName)
    console.log(emailAddress)
    console.log(question)
    console.log(selectedRadio)
}

// let ScubaTankQuantity = document.getElementById("ScubaTankQuantity").value;
// ScubaTankPrice = 20;

// let underwaterFlashlightsQuantity = document.getElementById("FlashlightsQuantity").value;
// underwaterFlashlightsPrice = 60;

// let scubaFlippersQuantity = document.getElementById("scubaFlipperQuantity").value;
// scubaFlippersPrice = 40;

// let scubaDivingGogglesQuantity = document.getElementById("gogglesQuantity").value;
// scubaDivingGogglesPrice = 40;

// let SpecialsitCameraQuantity = document.getElementById("cameraQuantity").value;
// SpecialsitCameraPrice = 1500

// smallWetsuit = 165
// mediumWetsuit = 175
// largeWetsuit = 185

// salesTax = 0.25

// Discount = 0.10

let subtotal = 0


function updateCheckout() {
    const ScubaTankQuantity = parseInt(document.getElementById("ScubaTankQuantity").value) || 0;
    const ScubaTankPrice = 20;

    const underwaterFlashlightsQuantity = parseInt(document.getElementById("FlashlightsQuantity").value) || 0;
    const underwaterFlashlightsPrice = 60;

    const scubaFlippersQuantity = parseInt(document.getElementById("scubaFlipperQuantity").value) || 0;
    const scubaFlippersPrice = 40;

    const scubaDivingGogglesQuantity = parseInt(document.getElementById("gogglesQuantity").value) || 0;
    const scubaDivingGogglesPrice = 40;

    const SpecialsitCameraQuantity = parseInt(document.getElementById("cameraQuantity").value) || 0;
    const SpecialsitCameraPrice = 1500;

    const ScubaTankSubtotal = ScubaTankQuantity * ScubaTankPrice;

    const underwaterFlashlightsSubtotal = underwaterFlashlightsQuantity * underwaterFlashlightsPrice;

    const scubaFlippersSubtotal = scubaFlippersQuantity * scubaFlippersPrice;

    const scubaDivingGogglesSubtotal = scubaDivingGogglesQuantity * scubaDivingGogglesPrice;

    const SpecialsitCameraSubtotal = SpecialsitCameraQuantity * SpecialsitCameraPrice;

    subtotal = ScubaTankSubtotal + scubaFlippersSubtotal + underwaterFlashlightsSubtotal + scubaDivingGogglesSubtotal + SpecialsitCameraSubtotal;
    
    console.log("Subtotal: £" + subtotal);

    updateTotals();
}
function updateTotals(){
    let grandTotal;
    let taxAmount;

    if (subtotal >= 250) {
        const discount = subtotal * 0.10;
        const discountedSubtotal = subtotal - discount;
        taxAmount = discountedSubtotal * 0.25;
        grandTotal = discountedSubtotal + taxAmount;
    } else {
        taxAmount = subtotal * 0.25;
        grandTotal = subtotal + taxAmount;
    }

    document.getElementById("taxAmount").innerHTML = taxAmount.toFixed(2);
    document.getElementById("subtotal").innerHTML = subtotal.toFixed(2);
    document.getElementById("grandTotal").innerHTML = grandTotal.toFixed(2);
}

function clearCart() {
    subtotal = 0;
    document.getElementById("taxAmount").innerHTML = '0.00';
    document.getElementById("subtotal").innerHTML = '0.00';
    document.getElementById("grandTotal").innerHTML = '0.00';
}

function addSmall() {
    subtotal += 165;
    updateTotals();
}
function addMedium() {
    subtotal += 175;
    updateTotals();
}
function addLarge(){
    subtotal += 185;
    updateTotals();
}
