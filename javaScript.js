function hesapla() {

   let kilo = parseFloat(document.getElementById("input1").value);
   let boy = parseFloat(document.getElementById("input2").value);

   let vki = kilo/boy**2;

   if(vki<18.5) {
      document.getElementById("sonuc").innerHTML = vki.toFixed(2);
      document.getElementById("çerçeve").style.left= "31px";
      document.getElementById("çerçeve").style.visibility= "visible";
     }
     else if(vki<24.9) {
      document.getElementById("sonuc").innerHTML = vki.toFixed(2);
      document.getElementById("çerçeve").style.left= "89px";
      document.getElementById("çerçeve").style.visibility= "visible";
     }
     else if(vki<29.9) {
      document.getElementById("sonuc").innerHTML = vki.toFixed(2);
      document.getElementById("çerçeve").style.left= "146px";
      document.getElementById("çerçeve").style.visibility= "visible";
     }
     else if(vki<34.9) {
      document.getElementById("sonuc").innerHTML = vki.toFixed(2);
      document.getElementById("çerçeve").style.left= "203px";
      document.getElementById("çerçeve").style.visibility= "visible";
     }
     else if(isNaN(vki)) {    
      document.getElementById("sonuc").innerHTML = "Boy-Kilo Giriniz";
      document.getElementById("çerçeve").style.visibility= "hidden";
     }
     else {
      document.getElementById("sonuc").innerHTML = vki.toFixed(2);
      document.getElementById("çerçeve").style.left= "260px";
      document.getElementById("çerçeve").style.visibility= "visible";
     }
  }