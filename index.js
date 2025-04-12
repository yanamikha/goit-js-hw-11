import{a as f,i as n,S as g}from"./assets/vendor-M-s4IJFZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let h="48568808-b5581b6c1359d9abd76100469",y="https://pixabay.com/api/";function L(o){return f.get(y,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>{n.error({title:"Error",message:"Error on load images"})})}let c=document.querySelector("ul.gallery"),v=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(o){if(o.length===0){let i={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation",message:"Sorry, there are no images matching your search query. Please try again!"};n.show(i);return}let t=o.map(function(i){let{webformatURL:a,largeImageURL:e,tags:r,likes:l,views:u,comments:m,downloads:p}=i;return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img
            class="gallery-image"
            src="${a}" 
            alt="${r}"
        />
        <div class="image-description">
          <div><h2>Likes</h2><p>${l}</p></div>
          <div><h2>Views</h2><p>${u}</p></div>
          <div><h2>Comments</h2><p>${m}</p></div>
          <div><h2>Downloads</h2><p>${p}</p></div>
        </div>
      </a>
      </li>
    `});c.innerHTML=t.join(""),v.refresh()}function E(){c.innerHTML=""}function S(){let o=document.querySelector("#loader"),t=document.querySelector("#loaderText");t.innerHTML="Loading images, please wait...",o.classList.add("loader")}function d(){let o=document.querySelector("#loader"),t=document.querySelector("#loaderText");t.innerHTML=null,o.classList.remove("loader")}let s=document.querySelector("form");d();s.addEventListener("submit",o=>{o.preventDefault();let t=s.querySelector("input"),i=t.value.trim();if(!i){n.warning({title:"Warning",message:"Please enter a search term"});return}t.value="",E(),L(i).then(a=>{S(),b(a),d()})});
//# sourceMappingURL=index.js.map
