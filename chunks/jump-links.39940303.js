(()=>{const o=document.querySelector(".jump-links"),t=document.querySelectorAll(".jump-targets [id]"),c=5;window.onscroll=()=>{const s=document.documentElement.scrollTop||document.body.scrollTop;t.forEach(e=>{e.offsetTop-parseInt(getComputedStyle(e)["scroll-margin-top"],10)-c<=s&&(o.querySelector(".active")?.classList.remove("active"),o.querySelector(`[href*=${e.id}]`).classList.add("active"))})}})();
