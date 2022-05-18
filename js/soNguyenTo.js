function soNguyenTo() {
  var n = document.getElementById("inpNum").value;
  var content = "";
  for (var i = 1; i <= n; i++) {
    var count = 0;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 0 && i > 1) {
      content += i + " ";
      document.getElementById("ketQua").innerHTML = content;
    }
  }
}
