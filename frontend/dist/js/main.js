window.cssCircleMenu=function(e){var o=document.querySelector(e),t=o?o.querySelector(".js-menu-toggle"):void 0,i=o?o.querySelector(".js-menu-mask"):void 0;if(!(o&&t&&i))throw new Error("Invalid elements, check the structure.");return t.addEventListener("click",function(e){e.preventDefault(),t.classList.contains("is-active")?c():s()}),{openMenu:s,closeMenu:c};function s(){o.classList.add("is-active"),t.classList.add("is-active"),i.classList.add("is-active")}function c(){o.classList.remove("is-active"),t.classList.remove("is-active"),i.classList.remove("is-active")}},$(function(){$(".itemsScaleUp-true").owlCarousel({autoPlay:3e3,items:3,itemsScaleUp:!0})}),$(function(){$("body.kinema-visual-supply").niceScroll({cursorborder:"",boxzoom:!0,scrollspeed:100,autohidemode:!0,mousescrollstep:40,cursorcolor:"#424242",cursorwidth:"7px",bouncescroll:!0,smoothscroll:!0})}),$(document).ready(function(){setTimeout(function(){$("body").addClass("loaded"),$(".hideButton").removeClass("hideButton")},4e3)});var Conclave=function(){var l,n=[];return{init:function(){this.addCN(),this.clickReg()},addCN:function(){for(var e=["holder_bu_awayL1","holder_bu_center","holder_bu_awayR1"],o=1;o<=e.length;++o)$("#bu"+o).removeClass().addClass(e[o-1]+" holder_bu")},clickReg:function(){$(".holder_bu").each(function(){n.push($(this).attr("class"))}),l=n.length;for(var e=0;e<l;++e)n[e]=n[e].replace(" holder_bu","");$(".holder_bu").click(function(e){var o=this.id||e,t=$("#"+o).attr("class").replace(" holder_bu",""),i=n.indexOf(t),s=n.indexOf("holder_bu_center");if(i!=s)for(tomove=s<i?l-i+s:s-i;tomove;){var c=n.shift();n.push(c);for(var r=1;r<=l;++r)$("#bu"+r).removeClass().addClass(n[r-1]+" holder_bu");--tomove}})},auto:function(){for(i=1;i<=1;++i)$(".holder_bu").delay(2e3).trigger("click","bu"+i).delay(4e3),console.log("called this function !!")}}}();$(document).ready(function(){(window.conclave=Conclave).init()});