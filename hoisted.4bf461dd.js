import{_ as h}from"./chunks/preload-helper.d1fceed1.js";import{i as m,m as u,D as a,a as f}from"./chunks/leaflet-shared.57cf374e.js";document.querySelectorAll("a[data-footnote-ref]").forEach(t=>{const i=t.href.split("#")[1];t.addEventListener("mouseover",()=>{document.querySelector(`li#${i}`).classList.add("anchor-hovered")}),t.addEventListener("mouseout",()=>{document.querySelector(`li#${i}`).classList.remove("anchor-hovered")}),t.addEventListener("click",e=>{e.preventDefault();const s=document.querySelector(`li#${i}`);s.classList.remove("target"),s.scrollIntoViewIfNeeded?s.scrollIntoViewIfNeeded(!1):s.scrollIntoView(!1),s.classList.add("target")})});document.querySelectorAll("li[id*='-fn-']").forEach(t=>{t.addEventListener("mouseover",()=>{document.querySelector(`a[href='#${t.id}']`).classList.add("fn-hovered")}),t.addEventListener("mouseout",()=>{document.querySelector(`a[href='#${t.id}']`).classList.remove("fn-hovered")}),t.style.cursor="pointer",t.addEventListener("click",i=>{i.preventDefault();const e=document.querySelector(`a[href='#${t.id}']`);e.classList.remove("target"),e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded(!1):e.scrollIntoView(!0),e.classList.add("target")})});window.addEventListener("click",()=>{document.querySelectorAll(".target").forEach(t=>t.classList.remove("target"))},!0);await h(()=>import("./chunks/glossary.e4eadd08.js"),[]);class g{constructor(i,e={}){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0)return;const s={contentSelector:".content",duration:400,easing:"ease-out"};this.options={...s,...e},this.el=i,this.summary=i.querySelector("summary"),this.content=i.querySelector(this.options.contentSelector),this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.summary.addEventListener("click",n=>this.onClick(n))}onClick(i){i.preventDefault(),this.el.style.overflow="hidden",this.isClosing||!this.el.open?this.open():(this.isExpanding||this.el.open)&&this.shrink()}shrink(){this.isClosing=!0;const i=`${this.el.offsetHeight}px`,e=`${this.summary.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[i,e]},{duration:this.options.duration,easing:this.options.easing}),this.animation.onfinish=()=>this.onAnimationFinish(!1),this.animation.oncancel=()=>this.isClosing=!1}open(){this.el.style.height=`${this.el.offsetHeight}px`,this.el.open=!0,window.requestAnimationFrame(()=>this.expand())}expand(){this.isExpanding=!0;const i=`${this.el.offsetHeight}px`,e=`${this.summary.offsetHeight+this.content.offsetHeight}px`;this.animation&&this.animation.cancel(),this.animation=this.el.animate({height:[i,e]},{duration:this.options.duration,easing:this.options.easing}),this.animation.onfinish=()=>this.onAnimationFinish(!0),this.animation.oncancel=()=>this.isExpanding=!1}onAnimationFinish(i){this.el.open=i,this.animation=null,this.isClosing=!1,this.isExpanding=!1,this.el.style.height=this.el.style.overflow=""}}const p=()=>{document.querySelectorAll(".document").forEach(t=>{const i=t.querySelectorAll("[data-lang]"),e=t.querySelectorAll("[data-doc-lang]");i.forEach(s=>{s.addEventListener("click",()=>{i.forEach(n=>n.classList.remove("active")),e.forEach(n=>n.classList.remove("shown")),s.classList.add("active"),[...e].find(n=>n.dataset.docLang===s.dataset.lang).classList.add("shown")})})})};p();document.querySelectorAll(".documents details").forEach(t=>{new g(t,{contentSelector:".document"})});const r=document.querySelectorAll("[data-location]"),l=[...r].map(t=>JSON.parse(t.dataset.location));if(l){const i=m("map",e=>{e.fitBounds([l.map(s=>[s.lat,s.long])],{maxZoom:8})});r.forEach(e=>{const{lat:s,long:n,name:c,desc:d}=JSON.parse(e.dataset.location),o=u([s,n],{icon:f});o.addTo(i).bindPopup(`<header>${c}</header><p>${d}</p>`),e.classList.add("clickable"),e.addEventListener("click",()=>i.setView([s,n])),e.addEventListener("mouseover",()=>a.addClass(o._icon,"highlight")),e.addEventListener("mouseout",()=>a.removeClass(o._icon,"highlight"))})}
