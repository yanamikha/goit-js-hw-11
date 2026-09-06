import{a as v,S as w,i as l}from"./assets/vendor-DMb0YYtc.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();let b="48568808-b5581b6c1359d9abd76100469",E="https://pixabay.com/api/";async function S(o){return await v.get(E,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>{throw r})}let d,f,m,q=new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function s(){return d||(d=document.querySelector("ul.gallery")),d}function c(){return f||(f=document.querySelector("#loaderText")),f}function u(){return m||(m=document.querySelector("#loader")),m}function x(o){let r=o.map(function(a){let{webformatURL:i,largeImageURL:e,tags:t,likes:n,views:h,comments:y,downloads:L}=a;return`<li class="gallery-item">
      <a href="${e}" class="gallery-link">
        <img
            class="gallery-image"
            src="${i}" 
            alt="${t}"
        />
        <div class="image-description">
          <div><h2>Likes</h2><p>${n}</p></div>
          <div><h2>Views</h2><p>${h}</p></div>
          <div><h2>Comments</h2><p>${y}</p></div>
          <div><h2>Downloads</h2><p>${L}</p></div>
        </div>
      </a>
      </li>
    `});s()&&(s().innerHTML=r.join("")),q.refresh()}function P(){s()&&(s().innerHTML="")}function T(){!u()||!c()||(c().innerHTML="Loading images, please wait...",u().classList.add("loader"))}function g(){!u()||!c()||(c().innerHTML=null,u().classList.remove("loader"))}let p=document.querySelector("form");g();p.addEventListener("submit",o=>{o.preventDefault();let r=p.querySelector("input"),a=r.value.trim();if(!a){l.warning({title:"Warning",message:"Please enter a search term"});return}r.value="",P(),T(),S(a).then(i=>{let e={theme:"dark",position:"topRight",maxWidth:432,backgroundColor:"#EF4040",icon:"fa-solid fa-triangle-exclamation"};if(i.message){e.message=i.message,l.show(e);return}if(i&&!i.length){e.message="Sorry, there are no images matching your search query. Please try again!",l.show(e);return}x(i)}).catch(i=>{l.error({title:i.message})}).finally(()=>{g()})});
//# sourceMappingURL=index.js.map
