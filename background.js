$(function() {
  background_index("#blok3-tlo");
  background_index("#blok3-tlo2", "#blok3-obraz1-tu2");
  background_index("#blok3-tlo3", "#blok3-obraz1-tu2", "#blok3-tlo2");
});

$(window).resize(function () {
  background_index("#blok3-tlo");
  background_index("#blok3-tlo2", "#blok3-obraz1-tu2");
  background_index("#blok3-tlo3", "#blok3-obraz1-tu2", "#blok3-tlo2");
});


function background_index(id, id_height = "#blok3-obraz1-tu", id_padding = id)
{
  if($(id).length > 0)
  {
    if($(".menu").width() > 515)
    {
      const paddingTop = parseFloat($(id_padding).css("padding-top")) * 2;
      const NewSize = $(id_height).height() + paddingTop;
      $(id).css("backgroundSize", "100% " + NewSize + "px");
    }
    else 
    {
      if(id == "#blok3-tlo3")
        background_smartphone(id, "#kontener352-tu");
      else if(id == "#blok3-tlo" && $("#blok3-tlo3").length > 0)
        background_smartphone(id, 100);
      else
        background_smartphone(id);
    }
  }
}

function background_smartphone(id, id_height = "#kontener35-tu")
{
  if(id_height == 100)
    $(id).css("backgroundSize", "100% 100%");
  else if (id_height == "#kontener352-tu")
    {
      const padding = parseFloat($(id_height).css("padding-top"));
      const height = $(id_height).height();
      const NewSize = height + padding
      $(id).css("backgroundSize", "100% " + NewSize + "px");
    }
  else if(id == "#blok3-tlo2")
    {
      const paddingTop = parseFloat($(id_height).css("padding-top"));
      const height = $(id_height).height();
      const paddingBottom = parseFloat($(id_height).css("padding-bottom"));
      const NewSize = paddingTop + height + paddingBottom;
      $(id).css("backgroundSize", "100% " + NewSize + "px");
    }
  else 
    $(id).css("backgroundSize", "100% " + $(id_height).height() + "px");
}