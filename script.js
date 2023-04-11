


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var overlay=document.querySelector("#overlay")
var isscroll=document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
    isscroll.style.scale=1
})

overlay.addEventListener("mouseleave",function(){
    isscroll.style.scale=0
})

overlay.addEventListener("mousemove",function(dets){
    isscroll.style.left=`${dets.x-45}px`
    isscroll.style.top=`${dets.y-36}px`
})

