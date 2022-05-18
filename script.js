function checkSnt() {
  let nhapSo = parseInt(document.getElementById("oNhap").value);
  let laSnt = true;
  if (nhapSo < 2) {
    laSnt = false;
  }
  if (nhapSo > 2) {
    for (let i = 2; i < nhapSo; i++) {
      if (nhapSo % i === 0) {
        laSnt = false;
      }
    }
  }
  if (laSnt == false) {
    alert(`${nhapSo} không phải là số nguyên tố`);
  } else {
    alert(`${nhapSo} là số nguyên tố`);
  }
}

checkSnt(document.getElementById("oNhap").value);
