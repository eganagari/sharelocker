$(function(){
  $('.socialLocker .to-lock').sociallocker({

    buttons: {order:["facebook-share"]},

    twitter: {url:"http://twitter.com/menightfury"},
    facebook: {like:{url:"https://www.facebook.com/PGRIWebsite/"}, share:{appId:859273720857036, url:"http://bloganalyzer.blogspot.com"},},
    google: {url:"https://plus.google.com/+BloganalyzerBlogspot"},

    text: {
      header: "Like us To Unlock This Content",
      message: "Cara DOWNLOAD", message: "Klik Share untuk menampilkan LINK Download - sebagai Donasi."
    },

    locker: {close: false, timer: 0,},
    theme: "flat"
  });
});
