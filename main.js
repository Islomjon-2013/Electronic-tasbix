document.querySelector(".btn").addEventListener("click", function () {
  var ekran = document.querySelector(".ekran");
  console.log(typeof parseInt(ekran.value));
  ekran.value = parseInt(ekran.value) + 1;
});
