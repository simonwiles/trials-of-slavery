import{I as s,i as r,s as n,a as i,c as p,t as c,m as d}from"./chunk.e1429a07.js";delete s.Default.prototype._getIconUrl;s.Default.mergeOptions({iconUrl:r,shadowUrl:n,iconRetinaUrl:i});const o=document.querySelector("[data-locations]")?.dataset.locations;if(o){const a=JSON.parse(o),e=p("map").fitBounds([a.map(t=>[t.Latitude,t.Longitude])],{maxZoom:8});c("https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),a.forEach(t=>{d([t.Latitude,t.Longitude]).addTo(e).bindPopup(`<header>${t.Location}</header>
            <p>${t["Relation to case"]}</p>`)})}