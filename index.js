import{S as y,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="47412942-a85f50e46f34315cc96f2bd1d",b="https://pixabay.com/api/";function F(s,r=1,o=12){const i=`${b}?key=${h}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${o}`;return fetch(i).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()})}function $(s,r){const o=s.map(({webformatURL:e,largeImageURL:t,tags:n,likes:d,views:f,comments:g,downloads:m})=>`
        <a class="gallery__item" href="${t}">
        <div class="gallery__card">
            <img src="${e}" alt="${n}" loading="lazy" />
            <div class="gallery__info">
            <p><b>Likes:</b> ${d}</p>
            <p><b>Views:</b> ${f}</p>
            <p><b>Comments:</b> ${g}</p>
            <p><b>Downloads:</b> ${m}</p>
            </div>
        </div>
        </a>
`).join("");r.innerHTML=o,new y(".gallery__item",{captionsData:"alt",captionDelay:250}).refresh()}function c(s){const r=document.querySelector(".loader");r.style.display=s?"block":"none"}const L=document.querySelector("#search-form"),l=document.querySelector(".gallery"),u=document.querySelector("#search-input");let p=1;const _=12;L.addEventListener("submit",async s=>{s.preventDefault();const r=u.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search query!",backgroundColor:"#EF4040",color:"#FAFAFB",position:"topRight"});return}p=1,l.innerHTML="";try{c(!0);const{hits:o,totalHits:i}=await F(r,p,_);o.length===0?a.warning({title:"No Results",message:"Sorry, there are no images matching your search query. Please, try again!",backgroundColor:"#EF4040",color:"#FAFAFB",position:"topRight"}):($(o,l),a.success({title:"Success",message:`Found ${i} images!`,position:"topRight",color:"#FAFAFB"}))}catch(o){a.error({title:"Error",message:o.message,backgroundColor:"#EF4040",position:"topRight",color:"#FAFAFB"})}finally{c(!1),u.value=""}});
//# sourceMappingURL=index.js.map
