$(function() {
  background_index();
});

$(window).resize(function () {
  background_index()
});


function background_index()
{
  if($("#blok3-tlo").length > 0)
  {
    if($(".menu").width() > 515)
    {
      const paddingTop = parseFloat($("#blok3-tlo").css("padding-top")) * 2;
      const NewSize = $("#blok3-obraz1-tu").height() + paddingTop;
      $("#blok3-tlo").css("backgroundSize", "100% " + NewSize + "px");
    }
    else 
    {
      background_smartphone();
    }
  }
}

function background_smartphone()
{
  $("#blok3-tlo").css("backgroundSize", "100% " + $("#kontener35-tu").height() + "px");
}


// function background_onas()
// {
//   if($(".menu").width() > 515)
//   {
//     const paddingTop = parseInt($("#blok3-tlo").css("padding-top"));
//     const marginBottom = parseInt($("#blok3-obraz1-tu").css("margin-bottom"));
//     const height = parseInt($("#blok3-obraz1-tu").height()) * 1.1;
//     const height2 = parseInt($("#obraz-tu").height());

//     const NewSize_1 = paddingTop + marginBottom + height;
//     const NewSize_2 = marginBottom + height2;
//     if(NewSize_1 > NewSize_2)
//     {
//       $("#blok3-tlo").css("backgroundSize", "100% " + NewSize_1 + "px");
//     }
//     else 
//     {
//       $("#blok3-tlo").css("backgroundSize", "100% " + NewSize_2 * 1.02 + "px");
//     }
//   }
//   else 
//   {
//     background_smartphone();
//   }
// }