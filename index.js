import{a as p,S as h,i as n}from"./assets/vendor-M-s4IJFZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let g="48568808-b5581b6c1359d9abd76100469",y="https://pixabay.com/api/";async function L(a){return await p.get(y,{params:{key:g,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>t)}let d=document.querySelector("ul.gallery"),v=new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(a){let t=a.map(function(i){let{webformatURL:o,largeImageURL:e,tags:r,likes:l,views:u,comments:m,downloads:f}=i;return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img
            class="gallery-image"
            src="${o}" 
            alt="${r}"
        />
        <div class="image-description">
          <div><h2>Likes</h2><p>${l}</p></div>
          <div><h2>Views</h2><p>${u}</p></div>
          <div><h2>Comments</h2><p>${m}</p></div>
          <div><h2>Downloads</h2><p>${f}</p></div>
        </div>
      </a>
      </li>
    `});d.innerHTML=t.join(""),v.refresh()}function w(){d.innerHTML=""}function S(){let a=document.querySelector("#loader"),t=document.querySelector("#loaderText");t.innerHTML="Loading images, please wait...",a.classList.add("loader")}function s(){let a=document.querySelector("#loader"),t=document.querySelector("#loaderText");t.innerHTML=null,a.classList.remove("loader")}let c=document.querySelector("form");s();c.addEventListener("submit",a=>{a.preventDefault();let t=c.querySelector("input"),i=t.value.trim();if(!i){n.warning({title:"Warning",message:"Please enter a search term"});return}t.value="",w(),S(),L(i).then(o=>{let e={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation"};if(o.message){e.message=o.message,n.show(e);return}if(o&&!o.length){e.message="Sorry, there are no images matching your search query. Please try again!",n.show(e);return}b(o),s()}).catch(o=>{n.error({title:o})}).finally(()=>{s()})});
//# sourceMappingURL=index.js.map
