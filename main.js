(()=>{"use strict";const t=(()=>{const t=document.querySelector(".place"),e=document.querySelector(".description"),n=document.querySelector(".icon"),o=document.querySelector(".temp_c"),c=document.querySelector(".temp_f");return{updateElements:function(r){t.textContent=`${r.area}, ${r.country}`,e.textContent=r.condition,n.src=r.icon,o.textContent=r.tempC,c.textContent=r.tempF}}})(),e=document.querySelector(".searchForm"),n=document.getElementById("queryBox");e.addEventListener("submit",(function(e){e.preventDefault();const o=new FormData(e.target).get("query");n.value="",function(e){(function(t="london"){return fetch(`https://api.weatherapi.com/v1/current.json?key=441a55bf31ca493eadd235239231704&q=${t}`).then((t=>t.json())).then((t=>t)).catch((t=>console.log("eRRor",t)))})(e).then((e=>{t.updateElements(function(t){return{tempC:t.current.temp_c,tempF:t.current.temp_f,condition:t.current.condition.text,icon:t.current.condition.icon,country:t.location.country,area:t.location.name}}(e))})).catch((t=>console.log("Something done went wrong",t)))}(o)}))})();