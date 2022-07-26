alert('kalo kata pepatah "tak kenal maka tak sayang", yuk kenalan :), eh bentar-bentar. kita kan dah kenalan wkwk, emm gpp dahh tapi wajib isi nama yahhh');
var nama = prompt('Nama kamu siapa?');
alert('Hallo ' + nama + ' tau gak sihh, ngeliat kamu tuh kek ngeliat kamera bawaannya pen senyum terooss heheh');
alert('Terima kasih udh mau kenalan, kita lanjut yahh');
flag = 1;
function f1() {
  alert('jahatt bangett kamuuu dodolll taikkk :( ');
}
function f() {
  if (flag == 1) {
    Bn.style.top = 400;
    Bn.style.left = 300;
    flag = 2;
  } else if (flag == 2) {
    Bn.style.top = 400;
    Bn.style.left = 50;
    flag = 3;
  } else if (flag == 3) {
    Bn.style.top = 370;
    Bn.style.left = 166;
    flag = 1;
  }
}
