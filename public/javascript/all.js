!function(){"use strict";window.XHR={_init:function(){return new XMLHttpRequest},post:function(e,t){var n=this._init();t=t||function(){},n.open("POST",e.url,!0),n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.send(e.data),n.onreadystatechange=function(){200===n.status&&4===n.readyState&&t(n.responseText)}},getJSON:function(e,t){var n,o=this._init(),a=(e.url=e.url||location.href,t=t||function(){},e.type=e.type||"json",e.url);"jsonp"===e.type&&(window.jsonCallback=t,a=a.replace("callback=?","callback=jsonCallback"),(n=document.createElement("script")).src=a,document.body.appendChild(n)),o.open("GET",e.url,!0),o.send(),o.onreadystatechange=function(){200===o.status&&4===o.readyState&&t(o.responseText)}}}}(),function(m,y){"use strict";var n,o;function k(e){return y.getElementById(e)}function a(){n.value=o(n.value)}function b(e,t){n=e,o=t,m.setTimeout(a,1)}function S(e){return e=(e=e.replace(/\D/g,"")).replace(/^(\d{5})(\d)/,"$1-$2")}function w(e){return e=(e=(e=e.replace(/\D/g,"")).replace(/^(\d{2})(\d)/g,"($1) $2")).replace(/(\d)(\d{4})$/,"$1-$2")}function q(e){k("address").innerHTML="Não foi possível obter sua posição."}function T(e){var e="geo/"+e.coords.latitude+","+e.coords.longitude+"&callback=?",t=k("cep"),n=k("address");t.value="Procurando..",XHR.getJSON({url:e},function(e){e=JSON.parse(e);n.innerHTML=e.address,t.value=e.cep})}m.onload=function(){var n=k("nome"),o=k("sobrenome"),a=k("telefone"),r=k("cep"),i=k("numero"),u=k("email"),c=k("detalhes"),l=y.querySelectorAll('input[name="sabor[]"]'),e=y.querySelector(".tweet"),t=y.querySelector(".like"),s=y.querySelector(".youtube"),p=y.querySelector(".gplus"),d=k("address"),f=k("js-geo"),h=k("phone"),v=k("form"),g=k("no-responsive"),l=[].slice.call(l);g.onclick=function(){y.querySelectorAll("meta[name='viewport']")[0].content="width=960px,initial-scale=0.3,user-scalable=yes"},a.onkeypress=function(){b(this,w)},r.onkeypress=function(){b(this,S)},r.onkeyup=function(){d.innerHTML=""},e.onclick=function(){_gaq.push(["_trackEvent","twitter Button",this.href,this.title])},t.onclick=function(){_gaq.push(["_trackEvent","facebook Button",this.href,this.title])},s.onclick=function(){_gaq.push(["_trackEvent","youtube Button",this.href,this.title])},p.onclick=function(){_gaq.push(["_trackEvent","google plus Button",this.href,this.title])},f.onclick=function(){navigator.geolocation.getCurrentPosition(T,q)},v.onsubmit=function(e){var t;return e.preventDefault(),""===a.value?(alert("Digite seu telefone para que eu possa te ligar e confirmar teu pedido!!"),a.focus(),!1):""===r.value?(alert("Informe o cep, para eu conseguir te entregar"),r.focus(),!1):""===u.value?(alert("Me diga seu email =)"),u.focus(),!1):(t="nome="+n.value+"&sobrenome="+o.value+"&telefone="+a.value+"&cep="+r.value+"&numero="+i.value+"&email="+u.value+"&detalhes="+c.value,l.forEach(function(e){e.checked&&(t+="&sabor[]="+e.value)}),void XHR.post({url:v.getAttribute("action"),data:t},function(e){"ok"===JSON.parse(e).status?alert("Tudo certo! já já lhe enviaremos um email para combinar a data de entrega."):alert("Por favor tente novamente, ou nos peça por email strudelfolhadinho@gmail.com")}))},XHR.getJSON({url:"/telephone"},function(e){e=JSON.parse(e);h.innerHTML='<i class="ico-phone"></i>'+e.telephone}),m.scrollTo(0,1),h.setAttribute("href",k("phone").getAttribute("data-href")),h.removeAttribute("data-href"),navigator.geolocation&&(f.style.display="block")}}(window,document);