(()=>{"use strict";const t=function(){const t=document.createElement("div");return t.classList.add("loader"),t},e=(()=>{const e=document.querySelector(".content"),n=a("h1",{class:["place"]}),o=a("p",{class:["description"]}),c=a("img",{class:["icon"],src:"#",alt:"Weather Icon"}),r=a("p",{class:["temps","temp_c"]}),i=a("p",{class:["temps","temp_c"]});function a(t,e){const n=document.createElement(t);for(let[t,o]of Object.entries(e))"class"===t?n.setAttribute(t,o.join(" ")):n.setAttribute(t,o);return n}function s(){e.innerHTML=""}return{updatedElements:function(t){s(),n.textContent=`${t.area}, ${t.country}`,o.textContent=t.condition,c.src=t.icon,c.style.visibility="visible",r.textContent=t.tempC+" °C",i.textContent=t.tempF+" ℉",[n,o,c,r,i].forEach((t=>e.appendChild(t)))},loadingIcon:function(){s(),e.appendChild(t())},clear:s}})(),n=document.querySelector(".searchForm"),o=document.getElementById("queryBox");n.addEventListener("submit",(function(t){t.preventDefault(),e.loadingIcon();const n=new FormData(t.target).get("query");o.value="",function(t){(function(t="london"){return fetch(`https://api.weatherapi.com/v1/current.json?key=441a55bf31ca493eadd235239231704&q=${t}`).then((t=>t.json())).then((t=>t)).catch((t=>console.log("eRRor",t)))})(t).then((t=>{e.updatedElements(function(t){return{tempC:t.current.temp_c,tempF:t.current.temp_f,condition:t.current.condition.text,icon:t.current.condition.icon,country:t.location.country,area:t.location.name}}(t))})).catch((t=>console.log("Something done went wrong",t)))}(n)}))})();