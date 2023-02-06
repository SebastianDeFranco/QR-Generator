

const qrcode = document.getElementById('qrcode');
new QRCode("qrcode", {
    text: "",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    // correctLevel: QRCode.CorrectLevel.H,
    logo: "./img/meta.png",
    logoSize: 50,
    logoBackgroundColor: '#ffffff',
    logoMargin: 4
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
    const qrcodeImage = qrcodeElement.querySelector("canvas").toDataURL();
  
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = qrcodeImage;
    link.click();
  }



