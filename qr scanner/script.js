let qr1 = "";
let qr2 = "";
let scanner = null;
let currentScan = 0;

//---------------------
// Start Scanner
//---------------------

async function startScanner(target) {

    currentScan = target;

    document.getElementById("reader").style.display = "block";

    if (scanner) {
        try {
            await scanner.stop();
        } catch (e) {}
    }

    scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 220
        },
        onScanSuccess,
        function () {}
    );

}

//---------------------
// QR Found
//---------------------

async function onScanSuccess(decodedText) {

    try {
        await scanner.stop();
        await scanner.clear();
    } catch (e) {}

    document.getElementById("reader").innerHTML = "";

    if (currentScan === 1) {

        qr1 = decodedText;

        document.getElementById("qr1Text").innerText = decodedText;

    }

    if (currentScan === 2) {

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

    if (qr1 == "") {

        alert("Scan First QR");

        return;

    }

    if (qr2 == "") {

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

    let popup = document.getElementById("popup");

    let text = document.getElementById("popupText");

    popup.style.display = "flex";

    text.innerHTML = msg;

    text.style.background = color;

    text.style.color = "#fff";

    setTimeout(resetAll, 15000);

}

//---------------------
// Reset
//---------------------

function resetAll() {

    qr1 = "";
    qr2 = "";

    document.getElementById("popup").style.display = "none";

    document.getElementById("qr1Text").innerHTML = "Waiting For Scan...";

    document.getElementById("qr2Text").innerHTML = "Waiting For Scan...";

    document.getElementById("reader").innerHTML = "";

}