
$(function () {
    
var font_size = window.location.href.split("=")[1];
$('html').css({ fontSize: font_size + 'px' })
  
});
var set_size = function(href, url){
    console.log(href);
    var font_size = href.split("=")[1];
    $('html').css({ fontSize: font_size + 'px' })
    window.location.href = url + "?text_size=" + font_size;
}
