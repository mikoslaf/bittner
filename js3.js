window.onload = function () {
  tlo();
  tlo2();
};

$(window).resize(function () {
  tlo();
  tlo2();
});

function tlo() {
  var x = document.querySelector(".menu");
  var y = document.querySelector("#blok3-obraz1-tu");
  if (document.getElementById("blok3-tlo") != null) {
    if (x.offsetWidth > 1920) {
      document.getElementById("blok3-tlo").style.backgroundSize = "100% 60%";
    } else if (x.offsetWidth > 600) {
      const s = window.getComputedStyle(document.getElementById("blok3-tlo"));
      const p = parseInt(parseFloat(s.paddingTop)) * 2 + y.offsetHeight;
      document.getElementById("blok3-tlo").style.backgroundSize =
        "100% " + p + "px";
    } else {
      document.getElementById("blok3-tlo").style.backgroundSize = "100% 100%";
    }
  }
}

function tlo2() {
  var x = document.querySelector(".menu");
  var y = document.querySelector("#blok3-obraz1-tu2");
  if (document.getElementById("blok3-tlo2") != null) {
    if (x.offsetWidth > 600) {
      const s = window.getComputedStyle(document.getElementById("blok3-tlo2"));
      const p = parseInt(parseFloat(s.paddingTop)) * 2 + y.offsetHeight;
      document.getElementById("blok3-tlo2").style.backgroundSize =
        "100% " + p + "px";
      if (document.getElementById("blok3-tlo3") != null) {
        document.getElementById("blok3-tlo3").style.backgroundSize =
          "100% " + p + "px";
      }
    } else {
      const z = document.querySelector("#kontener35-tu");
      document.getElementById("blok3-tlo2").style.backgroundSize =
        "100% " + z.offsetHeight + "px";
      if (document.getElementById("blok3-tlo3") != null) {
        const z = document.querySelector("#kontener352-tu");
        document.getElementById("blok3-tlo3").style.backgroundSize =
          "100% " + z.offsetHeight + "px";
      }
    }
  }
}
