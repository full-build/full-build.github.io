 // animation on href
 $(document).ready(function () {
     $('a[href^="#"]').on('click', function (e) {
         e.preventDefault();

         var target = this.hash,
             $target = $(target);

         $('html, body').stop().animate({
             'scrollTop': $target.offset().top
         }, 900, 'swing', function () {
             window.location.hash = target;
         });

         $(".navbar-collapse").collapse('hide');
     });
 });

 // google analytics
 (function (i, s, o, g, r, a, m) {
     i['GoogleAnalyticsObject'] = r;
     i[r] = i[r] || function () {
         (i[r].q = i[r].q || []).push(arguments)
     }, i[r].l = 1 * new Date();
     a = s.createElement(o),
     m = s.getElementsByTagName(o)[0];
     a.async = 1;
     a.src = g;
     m.parentNode.insertBefore(a, m)
 })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

 ga('create', 'UA-25006917-5', 'auto');
 ga('send', 'pageview');

 // image refresh
 function refresh(node) {
     var times = 60*1000; // gap in Milli Seconds;

     (function startRefresh() {
         var address;
         if (node.src.indexOf('?') > -1)
             address = node.src.split('?')[0];
         else
             address = node.src;
         node.src = address + "?time=" + new Date().getTime();

         setTimeout(startRefresh, times);
     })();

 }

 window.onload = function () {
     var node = document.getElementById('buildstatus');
     refresh(node);
     // you can refresh as many images you want just repeat above steps
 }