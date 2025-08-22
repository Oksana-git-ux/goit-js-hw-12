import{a as f,S as O,i as a}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const R="51858509-ed91bcb0bf71d536e00ec9eab";f.defaults.baseURL="https://pixabay.com/api/";async function g(o,t){const i={key:R,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await f.get("",{params:i})).data}catch(s){throw new Error(s.response.status)}}const h=document.querySelector(".gallery"),y=document.querySelector(".loader-container"),L=document.querySelector(".load-more");let u;function w(o){const t=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:r,views:n,comments:$,downloads:v})=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${s}">
                        <img class="gallery-image" src="${i}" alt="${e}" />
                        <ul class="info-list">
                            <li class="info-item">
                                <p>Likes</p>
                                <p>${r}</p>
                            </li>
                            <li class="info-item">
                                <p>Views</p>
                                <p>${n}</p>
                            </li>
                            <li class="info-item">
                                <p>Comments</p>
                                <p>${$}</p>
                            </li>
                            <li class="info-item">
                                <p>Downloads</p>
                                <p>${v}</p>
                            </li>
                        </ul>
                    </a>
                </li>
            `).join("");h.insertAdjacentHTML("beforeend",t),u?u.refresh():u=new O(".gallery a")}function B(){h.innerHTML=""}function b(){y.classList.remove("hidden")}function S(){y.classList.add("hidden")}function P(){L.classList.remove("hidden")}function p(){L.classList.add("hidden")}const m=document.querySelector(".form"),M=document.querySelector(".load-more"),E=document.querySelector(".gallery");let c="",l=1,d=0;const q=15;m.addEventListener("submit",async o=>{if(o.preventDefault(),c=o.target.elements.searchQuery.value.trim(),l=1,B(),p(),c===""){a.error({message:"Please enter a search query!",position:"topRight"});return}try{b();const t=await g(c,l);d=t.totalHits,t.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(w(t.hits),a.success({message:`Hooray! We found ${d} images.`,position:"topRight"}),d>q&&P())}catch{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{S()}m.reset()});M.addEventListener("click",async()=>{l+=1,b(),p();try{const o=await g(c,l);w(o.hits);const t=E.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"}),l*q>=d?(p(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):P()}catch{a.error({message:"Oops! Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
