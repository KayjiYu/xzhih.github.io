var searchFunc=function(e,t){"use strict";fetch("/searchData.json").then(function(e){return e.json()}).then(function(r){var n=JSON.stringify(r),i=JSON.parse(n),a=document.getElementById(e);if(a){var s=document.getElementById(t);a.addEventListener("input",function(){var e='<ul class="search-result-list">',t=this.value.trim().toLowerCase().split(/[\s\-]+/);s.innerHTML="",this.value.trim().length<=0||(i.forEach(function(r){var n=!0;r.title&&""!==r.title.trim()||(r.title="Untitled");var i=r.title.trim().toLowerCase(),a=r.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),s=r.url,c=-1,l=-1,o=-1;if(""!==a?t.forEach(function(e,t){c=i.indexOf(e),l=a.indexOf(e),c<0&&l<0?n=!1:(l<0&&(l=0),0==t&&(o=l))}):n=!1,n){e+="<li><a href='"+s+"' class='search-result-title'>"+i+"</a>";var u=r.content.trim().replace(/<[^>]+>/g,"");if(o>=0){var f=o-20,h=o+80;f<0&&(f=0),0==f&&(h=100),h>u.length&&(h=u.length);var v=u.substr(f,h);t.forEach(function(e){var t=new RegExp(e,"gi");v=v.replace(t,'<em class="search-keyword">'+e+"</em>")}),e+='<p class="search-result">'+v+"...</p>"}e+="</li>"}}),e+="</ul>",s.innerHTML=e)})}})};