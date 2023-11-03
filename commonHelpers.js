import{a as l,S as m,i as p}from"./assets/vendor-ba63cf5d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();l.defaults.headers.common["x-api-key"]="live_jp4MAa6Q05x6bPwskekDsJZfzqCtg2YV4GCjsqnuUaFRE2dglgAL3yLtQhvHdwUY";async function h(){return l.get("https://api.thecatapi.com/v1/breeds").then(t=>t.data)}async function y(t){return l.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${t}`).then(o=>o.data[0])}const u=document.querySelector(".breed-select"),d=document.querySelector(".cat-info"),g=document.querySelector(".loader"),a=new m({select:u});a.disable();b();async function b(){const t=await h().then(r=>{const s={};return r.map(e=>s[e.name]=e.id),s}).catch(f),o=[{text:"Chose cat breed",value:"empty"},...Object.keys(t).map(r=>({text:r,value:t[r]}))];a.setData(o),a.enable(),c(!1)}u.addEventListener("change",async t=>{if(t.target.value==="empty"){d.innerHTML="";return}c(),await y(t.target.value).then(v).catch(f).finally(()=>c(!1))});function f(t){p.error({title:"Error",titleColor:"red",message:t.message,messageColor:"red",position:"topRight",close:!1,closeOnClick:!0,progressBarColor:"red",icon:null,timeout:1500}),d.innerHTML=""}function v(t){const o=t.url,r=t.breeds[0];d.innerHTML=`
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
  `}function c(t=!0){g.style.display=t?"block":"none"}
//# sourceMappingURL=commonHelpers.js.map
