/* Minified JavaScript of strudelfolhadinho */
!function(){"use strict";window.XHR={_init:function(){var a=new XMLHttpRequest;return a},post:function(a,b){var c=this._init();b=b||function(){},c.open("POST",a.url,!0),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.send(a.data),c.onreadystatechange=function(){200===c.status&&4===c.readyState&&b(c.responseText)}},getJSON:function(a,b){var c=this._init();a.url=a.url||location.href,b=b||function(){},a.type=a.type||"json";var d=a.url;if("jsonp"===a.type){window.jsonCallback=b;var e=d.replace("callback=?","callback=jsonCallback"),f=document.createElement("script");f.src=e,document.body.appendChild(f)}c.open("GET",a.url,!0),c.send(),c.onreadystatechange=function(){200===c.status&&4===c.readyState&&b(c.responseText)}}}}(),function(a,b){"use strict";function c(a){return b.getElementById(a)}function d(){j.value=k(j.value)}function e(b,c){j=b,k=c,a.setTimeout(d,1)}function f(a){return a=a.replace(/\D/g,""),a=a.replace(/^(\d{5})(\d)/,"$1-$2")}function g(a){return a=a.replace(/\D/g,""),a=a.replace(/^(\d{2})(\d)/g,"($1) $2"),a=a.replace(/(\d)(\d{4})$/,"$1-$2")}function h(){var a=c("address");a.innerHTML="Não foi possível obter sua posição."}function i(a){var b="geo/"+a.coords.latitude+","+a.coords.longitude+"&callback=?",d=c("cep"),e=c("address");d.value="Procurando..",XHR.getJSON({url:b},function(a){var b=JSON.parse(a);e.innerHTML=b.address,d.value=b.cep})}var j,k;a.onload=function(){var d=c("nome"),j=c("sobrenome"),k=c("telefone"),l=c("cep"),m=c("numero"),n=c("email"),o=c("detalhes"),p=b.querySelectorAll('input[name="sabor[]"]'),q=b.querySelector(".tweet"),r=b.querySelector(".like"),s=b.querySelector(".youtube"),t=b.querySelector(".gplus"),u=c("address"),v=c("js-geo"),w=c("phone"),x=c("form"),y=c("no-responsive");p=[].slice.call(p),y.onclick=function(){var a=b.querySelectorAll("meta[name='viewport']");a[0].content="width=960px,initial-scale=0.3,user-scalable=yes"},k.onkeypress=function(){e(this,g)},l.onkeypress=function(){e(this,f)},l.onkeyup=function(){u.innerHTML=""},q.onclick=function(){_gaq.push(["_trackEvent","twitter Button",this.href,this.title])},r.onclick=function(){_gaq.push(["_trackEvent","facebook Button",this.href,this.title])},s.onclick=function(){_gaq.push(["_trackEvent","youtube Button",this.href,this.title])},t.onclick=function(){_gaq.push(["_trackEvent","google plus Button",this.href,this.title])},v.onclick=function(){navigator.geolocation.getCurrentPosition(i,h)},x.onsubmit=function(a){if(a.preventDefault(),""===k.value)return alert("Digite seu telefone para que eu possa te ligar e confirmar teu pedido!!"),k.focus(),!1;if(""===l.value)return alert("Informe o cep, para eu conseguir te entregar"),l.focus(),!1;if(""===n.value)return alert("Me diga seu email =)"),n.focus(),!1;var b="nome="+d.value+"&sobrenome="+j.value+"&telefone="+k.value+"&cep="+l.value+"&numero="+m.value+"&email="+n.value+"&detalhes="+o.value;p.forEach(function(a){a.checked&&(b+="&sabor[]="+a.value)}),XHR.post({url:x.getAttribute("action"),data:b},function(a){var b=JSON.parse(a);alert("ok"===b.status?"Tudo certo! já já lhe enviaremos um email para combinar a data de entrega.":"Por favor tente novamente, ou nos peça por email strudelfolhadinho@gmail.com")})},XHR.getJSON({url:"/telephone"},function(a){var b=JSON.parse(a);w.innerHTML='<i class="ico-phone"></i>'+b.telephone}),a.scrollTo(0,1),w.setAttribute("href",c("phone").getAttribute("data-href")),w.removeAttribute("data-href"),navigator.geolocation&&(v.style.display="block")}}(window,document);