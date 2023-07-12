window.onload = function () {
  tlo();
};

$(window).resize(function () {
  tlo();
});

function tlo() {
  var x = document.querySelector(".menu");
  if (document.getElementById("blok3-tlo") != null) {
    if (x.offsetWidth > 600) {
      const y = document.getElementById("blok3-obraz1-tu");
      const number =
        parseInt(y.offsetHeight) +
        parseInt(
          parseFloat(
            window.getComputedStyle(document.getElementById("blok3-tlo"))
              .paddingTop
          )
        ) *
          2;
      document.getElementById("blok3-tlo").style.backgroundSize =
        "100% " + number + "px";
    } else {
      var z = document.querySelector("#kontener35-tu");
      document.getElementById("blok3-tlo").style.backgroundSize =
        "100% " + z.offsetHeight + "px";
    }
  }
}
