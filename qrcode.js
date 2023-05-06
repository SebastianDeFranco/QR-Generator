const qrcode = document.getElementById('qrcode');
new QRCode("qrcode", {
    text: "",
    width: 400,
    height: 400,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
});

document.addEventListener('DOMContentLoaded', function() {
  while (qrcode.firstChild) {
    qrcode.removeChild(qrcode.firstChild);
  }
});
  
  document.getElementById("convert").addEventListener("click", function() {
    const inputValue = document.getElementById("input").value;
    // qrcode.makeCode(inputValue);
    new QRCode(qrcode, inputValue)
  });

  document.getElementById("clear").addEventListener("click",function () {
    const qrcodeElement = document.getElementById("qrcode");
    while (qrcodeElement.firstChild) {
    qrcodeElement.removeChild(qrcodeElement.firstChild);
    }

  } )
  

function downloadQR() {
  const qrcodeElement = document.getElementById("qrcode");
  const qrcodeCanvas = qrcodeElement.querySelector("canvas");

  const canvas = document.createElement("canvas");
  canvas.width = 600;
  canvas.height = 600;
  const ctx = canvas.getContext("2d");

  ctx.drawImage(qrcodeCanvas, 0, 0, 600, 600);
  
  const qrcodeImage = canvas.toDataURL();

  const link = document.createElement("a");
  link.download = "qrcode.jpeg";
  link.href = qrcodeImage;
  link.click();
}



