function generateQRCode() {
    const text = document.getElementById("textInput").value.trim();
    const qrDiv = document.getElementById("qrcode");
    qrDiv.innerHTML = "";

    if (!text) {
        alert("Vui lòng nhập nội dung!");
        return;
    }

    new QRCode(qrDiv, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}