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
function downloadQRCode() {
    const qrCanvas = document.querySelector("#qrcode canvas");
    if (!qrCanvas) {
        alert("Vui lòng tạo mã QR trước!");
        return;
    }

    const imageData = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageData;
    link.download = "mã-qr.png";
    link.click();
}