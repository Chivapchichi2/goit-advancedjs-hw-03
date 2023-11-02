import{a as c,S as m,i as p}from"./assets/vendor-ba63cf5d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();c.defaults.headers.common["x-api-key"]="live_jp4MAa6Q05x6bPwskekDsJZfzqCtg2YV4GCjsqnuUaFRE2dglgAL3yLtQhvHdwUY";async function h(){return c.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data).then(e=>{const o={};return e.map(r=>o[r.name]=r.id),o})}async function y(e){return c.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(o=>o.data[0])}const d=document.querySelector(".breed-select"),u=document.querySelector(".cat-info"),g=document.querySelector(".loader"),i=new m({select:d});i.disable();b();async function b(){const e=await h().catch(f),o=[{text:"Chose cat breed",value:"empty"},...Object.keys(e).map(r=>({text:r,value:e[r]}))];i.setData(o),i.enable(),a(!1)}d.addEventListener("change",async e=>{if(e.target.value==="empty"){u.innerHTML="";return}a(),await y(e.target.value).then(v).catch(f).finally(()=>a(!1))});function f(e){p.error({title:"Error",titleColor:"red",message:e.message,messageColor:"red",position:"topRight",close:!1,closeOnClick:!0,progressBarColor:"red",icon:null,timeout:1500})}function v(e){const o=e.url,r=e.breeds[0];u.innerHTML=`
    <h2 class='cat-title'>${r.name}</h2>
    <div class="cat-info-box">
      <img src="${o}" alt="${r.name}" width='800'>
      <div class="cat-info-text">
        <p>${r.description}</p>
        <ul>
          <li><b>Origin:</b> ${r.origin}</li>
          <li><b>Life Span:</b> ${r.life_span}</li>
          <li><b>Temperament:</b> ${r.temperament}</li>
        </ul>
      </div>
    </div>
  `}function a(e=!0){g.style.display=e?"block":"none"}
//# sourceMappingURL=commonHelpers.js.map
