import{a as c,S as f,i}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="51858509-ed91bcb0bf71d536e00ec9eab";c.defaults.baseURL="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await c.get("",{params:o})).data}catch(t){throw new Error(t.response.statusText)}}const u=document.querySelector(".gallery"),d=document.querySelector(".loader-container"),m=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
        />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>
  `).join("");u.insertAdjacentHTML("beforeend",o),m.refresh()}function h(){u.innerHTML=""}function b(){d.classList.remove("hidden")}function L(){d.classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(o===""){i.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}h(),b();try{const a=(await y(o)).hits;a.length===0?i.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g(a)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),l.reset()}});
//# sourceMappingURL=index.js.map
