(function () {
  "use strict";
  /*global window:false, document:false, XMLHttpRequest:false, location:false*/

  window.XHR = {
    _init: function () {
      var instance = new XMLHttpRequest();
      return instance;
    },

    post: function(options, callback) {
      var xhttp = this._init();
      callback = callback || function () {};

      xhttp.open('POST', options.url, true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(options.data);
      xhttp.onreadystatechange = function () {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
          callback(xhttp.responseText);
        }
      };
    },

    getJSON: function (options, callback) {
      var xhttp = this._init();
      options.url = options.url || location.href;
      callback = callback || function () {};
      options.type = options.type || 'json';
      var url = options.url;


      if (options.type === 'jsonp') {
        window.jsonCallback = callback;
        var $url = url.replace('callback=?', 'callback=jsonCallback');
        var script = document.createElement('script');
        script.src = $url;
        document.body.appendChild(script);
      }
      xhttp.open('GET', options.url, true);
      xhttp.send();
      xhttp.onreadystatechange = function () {
        if (xhttp.status === 200 && xhttp.readyState === 4) {
          callback(xhttp.responseText);
        }
      };
    }
  };
}());
(function (window, document, undefined) {
  "use strict";

  /*global _gaq:false, alert:false, navigator:false*/

  /* mascaras er */
  var v_obj, v_fun;
  function getId(el) {
    return document.getElementById(el);
  }

  /* bind eventos */
  window.onload = function () {
    var $sabores = document.querySelectorAll('input[name="sabor[]"]'),
      $phone = getId('phone'),
      $noResponsive = getId('no-responsive');

    $sabores = [].slice.call($sabores);

    $noResponsive.onclick = function () {
      var vps = document.querySelectorAll("meta[name='viewport']");
      vps[0].content = 'width=960px,initial-scale=0.3,user-scalable=yes';
    };


    /* hack abrindo em "full" para mobile */
    window.scrollTo(0, 1);

    /* transformando span#phone em tag a */
    $phone.setAttribute('href', getId('phone').getAttribute('data-href'));
    $phone.removeAttribute('data-href');

  }



}(window, document));
