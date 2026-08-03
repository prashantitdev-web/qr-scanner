let qr1 = "";
let qr2 = "";
let scanner = null;
let currentScan = 0;

//---------------------
// Start Scanner
//---------------------
async function startScanner(target) {

    currentScan = target;
    document.getElementById("scannerModal").style.display = "flex";

    const reader = document.getElementById("reader");

    reader.style.display = "block";
    //reader.innerHTML = "";
    

    // Stop old scanner if running
    if (scanner) {
        try {
            await scanner.stop();
            await scanner.clear();
        } catch (e) {}
        scanner = null;
    }

    scanner = new Html5Qrcode("reader");

    try {

        await scanner.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 220
            },
            onScanSuccess,
            function () {}
        );

    } catch (err) {

        alert("Camera Error : " + err);

    }

}

//---------------------
// QR Found
//---------------------
async function onScanSuccess(decodedText) {

    if (scanner) {
        try {
            await scanner.stop();
            await scanner.clear();
        } catch (e) {}
        scanner = null;
    }

    //document.getElementById("reader").innerHTML = "";

    document.getElementById("scannerModal").style.display = "none";

    if (currentScan === 1) {

        qr1 = decodedText;
        document.getElementById("qr1Text").innerText = decodedText;

    } else {

        qr2 = decodedText;
        document.getElementById("qr2Text").innerText = decodedText;

    }

}

//---------------------
// Buttons
//---------------------
document.getElementById("scan1").onclick = function () {
    startScanner(1);
};

document.getElementById("scan2").onclick = function () {
    startScanner(2);
};

//---------------------
// Compare
//---------------------
document.getElementById("submit").onclick = function () {

    if (qr1 === "") {
        alert("Scan First QR");
        return;
    }

    if (qr2 === "") {
        alert("Scan Second QR");
        return;
    }

    if (qr1 === qr2) {

        showPopup("MATCHED", "#16a34a");

    } else {

        showPopup("UNMATCHED", "#dc2626");

    }

};

//---------------------
// Popup
//---------------------
function showPopup(msg, color) {

    const popup = document.getElementById("popup");
    const text = document.getElementById("popupText");

    popup.style.display = "flex";

    text.innerHTML = msg;
    text.style.background = color;
    text.style.color = "#fff";

    setTimeout(function () {
        resetAll();
    }, 10000);

}

//---------------------
// Reset
//---------------------
async function resetAll() {

    if (scanner) {
        try {
            await scanner.stop();
            await scanner.clear();
        } catch (e) {}
        scanner = null;
    }

    qr1 = "";
    qr2 = "";
    currentScan = 0;

    document.getElementById("popup").style.display = "none";
    document.getElementById("scannerModal").style.display = "none";

    document.getElementById("qr1Text").innerText = "Waiting For Scan...";
    document.getElementById("qr2Text").innerText = "Waiting For Scan...";

    const reader = document.getElementById("reader");
    reader.innerHTML = "";
    reader.style.display = "none";

}
//---------------------
// Close Scanner
//---------------------

document.getElementById("closeScanner").onclick = async function () {

    document.getElementById("scannerModal").style.display = "none";

    if (scanner) {
        try {
            await scanner.stop();
            await scanner.clear();
        } catch (e) {}
        scanner = null;
    }

    document.getElementById("reader").innerHTML = "";

};
