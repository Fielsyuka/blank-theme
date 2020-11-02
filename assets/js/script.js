var ua, verArr, version, ieVer, ie, chrome, firefox, opera, safari, w=$(window).width(), mobile=w<769, currentWidth=window.innerWidth;
ua=navigator.userAgent, console.log(ua), ua.match(/msie/i)||ua.match(/trident/i)?(version=(version=(verArr=/(msie|rv:?)\s?([\d\.]+)/i.exec(ua))?verArr[2]:"").replace(".", "_"), ieVer="ie", $("html").addClass(ieVer)):ua.match(/Edge/i)?$("html").addClass("edge"):ua.match(/chrome/i)?$("html").addClass("chrome"):ua.match(/firefox/i)?$("html").addClass("firefox"):ua.match(/opera/i)?$("html").addClass("opera"):ua.match(/safari/i)&&$("html").addClass("safari"), 

function acdAction() {
  var e=$(".js-header-submenu");
  mobile||(e.mouseover(function() {
    $(this).addClass("is-open")
  }
  ), e.mouseleave(function() {
    $(this).removeClass("is-open")
  }
  ))
}

function scroll() {
  if(mobile)var t=70;
  else t=$(".js-header").innerHeight()+10;
  var n=$(".js-page").data("page"), i=location.hash;
  i&&($("body,html").stop().scrollTop(0), console.log(i), setTimeout(function() {
    var e=$(i).offset().top-t;
    $("body,html").stop().animate( {
      scrollTop: e
    }
    , 400, "swing")
  }
  , 200)), $(".js-link").on("click", function() {
    if(mobile)var e=600;
    else e=400;
    var i=$(this).attr("href"), o=(s=i.split(".html"))[0], s=s[1], a=$("#"==i||""==i?"html": s).offset().top-t;
    if(o===n)return $("body,html").animate( {
      scrollTop: a
    }
    , e, "swing"), !1
  }
  )
}

function pageTop() {
  var o=$(".js-pagetop"), s=$(".js-footer").offset().top;
  if(1320<w)var e=w/2+600;
  o.css("left", e), o.hide(), $(window).on("scroll", function() {
    var e=$(window).scrollTop(), i=$(window).scrollTop()+$(window).height()-30;
    100<e?o.fadeIn(): o.fadeOut(), s<=i?o.addClass("is-release"):o.removeClass("is-release")
  }
  ), o.click(function() {
    return $("body,html").animate( {
      scrollTop: 0
    }
    , 500), !1
  }
  )
}

function hbg() {
  $(".js-hbg-btn").on("click", function() {
    $(this).hasClass("is-active")?($(this).attr('aria-expanded', false), $(this).removeClass("is-active"), $("body").removeClass("is-menu-open"), $(".js-nav").fadeOut()): ($(this).attr('aria-expanded', true), $(this).addClass("is-active"), $("body").addClass("is-menu-open"), $(".js-nav").fadeIn())
  }
  ), $(".js-link").on("click", function() {
    if (window.innerWidth < 769) $(".js-hbg-btn").removeClass("is-active"), $("body").removeClass("is-menu-open"), $(".js-nav").fadeOut()
  }
  )
}

$(window).on("resize", function(){
  if (window.innerWidth > 768) {
    $(".js-nav").show();
  } else if (window.innerWidth < 769) {
    $(".js-nav").hide();
    $(".js-hbg-btn").removeClass("is-active");
    $("body").removeClass("is-menu-open");
  }
});

$(function() {
  hbg();
  // scroll(), pageTop(), hbg(), acdAction(), 
  // $(function() {
  //   $('a[href="#"]').on("click", function() {
  //     return!1
  //   }
  //   )
  // });
})