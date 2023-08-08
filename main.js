$(function() {
  let ilosc = 4;
  let ilosc2 = 3;
  if ($("body").width() < 600) {
    ilosc = 2;
    ilosc2 = 2;
  }
  $(".owl-carousel2").owlCarousel({
    nav: true,
    loop: false,
    items: ilosc,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
  $(".owl-carousel3").owlCarousel({
    loop: false,
    nav: true,
    items: ilosc2,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });
  $(".owl-carousel1").owlCarousel({
    loop: true,
    items: 1,
    autoplay: false,
    autoplayTimeout: 10000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
  });

  przesterzn_menu();
  przestan();
  if ($("body").width() < 426) {
    svg("menu-logo", "./eksport_grafika_XD/logo-5.svg");
    svg("mat-obraz", "./eksport_grafika_XD/pro08-5.svg");
  }
});

let lista = false;
let menu_przestrzen = 0;
let pro = false;
let menu = true;
let przycisk = true;


$(function() {
  $(".video").on("click", function () {
    $(".play").toggleClass("active");
  });

  $("#lista").on("click", function () {
    $(".blok6-obraz1").toggleClass("active");
    $(".blok6").toggleClass("active");
    $(".blok4-napis").toggleClass("active");
  });

  $("#lista2").on("click", function () {
    $(".blok6-obraz1").toggleClass("active");
    $(".blok6").toggleClass("active");
    $(".blok4-napis").toggleClass("active");
  });

  $(".menu-produkty").on("click", function () {
    if ($("body").width() > 1024) 
    {
      $(".menu-produkty2").toggleClass("active");
      const NewSize = $(".menu").outerHeight() * 0.6;
      $("#menu-produkty").css("padding-top",  NewSize + "px");
    } 
    else 
    {
      $(".menu-mini-lista").toggleClass("active");
    
      const wartosc = $(".tabela-menu-ul");
      if (pro == false) {
        wartosc.css("overflow", "scroll");
        wartosc.css("padding-bottom", "0px");
        pro = true;
      } else {
        wartosc.css("overflow", "hidden");
        wartosc.css("padding-bottom", "");
        pro = false;
      }
      lista = true;

      const NewSize = Math.ceil(wartosc.outerHeight()) +  parseFloat(wartosc.css("margin-top"));

      if (
        $("#menu-lista").height() != NewSize &&
          $("body").width() > 425
      ) {
        $("#menu-lista").css("height", NewSize + "px");
      }
    }
  });
  
  $("#hamburger").on("click", function () {
    $("#produkty").prop("href","#");
    const Obj_menu = $("#menu-lista");
    Obj_menu.css("transition", "all 1.5s ease");
    $(".menu-lista").toggleClass("active");
    $(".menu-logo").toggleClass("active");
    if (pro == true) {
      $("#menu").css("overflow", "hidden");
      $("#menu").css("addingBottom", "");
      pro = false;
    }
    if (przycisk == true) {
      $(".menu-przycisk").addClass("active");
      przycisk = false;
    } else {
      $(".menu-przycisk").removeClass("active");
      przycisk = true;
    }
    if (menu == false) {
      menu = true;
      Obj_menu.css("height","");
    } else {
      menu = false;
      Obj_menu.css("height", menu_przestrzen + "px");
    }
    if (lista == true) {
      Obj_menu.css("height","");
      lista = false;
      setTimeout(function () {
        $(".menu-mini-lista").removeClass("active");
      }, 2000);
    }
  });
});

$(window).resize(function () {
  przesterzn_menu();
  przestan();
});

function svg(id, url) {
  if ($('#' + id).length) {
    $('#' + id).attr('src', url);
  }
}

function przestan() {
  if (menu == true) {
    let height; 
    if ($("body").width() < 1025) 
      height = $("#hamburger").outerHeight();
    else 
      height = $("#menu-logo").outerHeight();
    
    const NewSize = height + parseInt($("#menu").css("padding-top")) * 2;
    $("#przesrzen").css("height", NewSize + "px");
  }
}

function przesterzn_menu() {
  const width = $("body").width();
  if (width < 1026) {
    if (menu == true) {
      if (width < 426) {
        menu_przestrzen = $("body").height();
        $(".menu-lista").removeClass("active");
      } else {
        const NewSize = ($(".tabela-menu-ul").outerHeight() +
          parseInt($(".tabela-menu-ul").css("margin-top")));
        menu_przestrzen = NewSize;
        $(".menu-lista").removeClass("active");
      }
    } else {
      $("#menu-lista").css("height", "0px")
      $(".menu-przycisk").removeClass("active");
      $(".menu-lista").removeClass("active");
      menu = true;
      przycisk = true;
      $(".menu-mini-lista").removeClass("active");
      $(".menu-logo").removeClass("active");
      lista = false;
      if (pro == true) {
        $("#menu").css("overflow", "hidden");
        $("#menu").css("paddingBottom", "");
        pro = false;
      }
    }
  }
}
