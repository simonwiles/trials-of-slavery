import"./chunks/chunk.1b5e6502.js";import{_ as u}from"./chunks/chunk.cda477e3.js";import{i as h,m as v,D as d,a as p}from"./chunks/chunk.c8c63b8a.js";await u(()=>import("./chunks/chunk.9a80ad89.js"),[]);const L=document.querySelectorAll(".document > div"),i=document.querySelectorAll(".document header span");i.forEach(e=>{e.addEventListener("click",()=>{i.forEach(t=>t.classList.remove("active")),L.forEach(t=>t.classList.remove("shown")),e.classList.add("active"),document.querySelector(".document ."+e.dataset.doc).classList.add("shown")})});document.querySelectorAll("a[data-footnote-ref]").forEach(e=>{const t=e.href.split("#")[1];e.addEventListener("mouseover",()=>{document.querySelector(`li#${t}`).classList.add("anchor-hovered")}),e.addEventListener("mouseout",()=>{document.querySelector(`li#${t}`).classList.remove("anchor-hovered")})});const n=document.querySelectorAll("[data-location]"),r=[...n].map(e=>JSON.parse(e.dataset.location));if(r){const t=h("map",o=>{o.fitBounds([r.map(a=>[a.lat,a.long])],{maxZoom:8})});n.forEach(o=>{const{lat:a,long:c,name:l,desc:m}=JSON.parse(o.dataset.location),s=v([a,c],{icon:p});s.addTo(t).bindPopup(`<header>${l}</header><p>${m}</p>`),o.classList.add("clickable"),o.addEventListener("click",()=>t.setView([a,c])),o.addEventListener("mouseover",()=>d.addClass(s._icon,"highlight")),o.addEventListener("mouseout",()=>d.removeClass(s._icon,"highlight"))})}
