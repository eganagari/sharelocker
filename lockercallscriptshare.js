jQuery(document).ready(function($) {
  var sandi = $(location).attr('href'); 
  $('#default-usage .to-lock').sociallocker({
    buttons: {order:["facebook-share"]},
    facebook: {like:{url:"https://www.facebook.com/PGRIWebsite/"}, share:{appId:859273720857036, url:"http://bloganalyzer.blogspot.com"},},
    text: {header: "Cara DOWNLOAD", message: "Klik Share untuk menampilkan LINK Download - sebagai Donasi"}, 
    locker: {close: false, timer: 0,},
    theme: "dandyish"
  });
});

