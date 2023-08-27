const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout = 0

function squeeze(){
    var xs = 1;
    var ys = 1;
    var xp = 0;
    var yp = 0;
    window.addEventListener("mousemove",function(details){
        clearTimeout(timeout)
        xs = gsap.utils.clamp(.8,1.5,details.clientX-xp);
        ys = gsap.utils.clamp(.8,1.5,details.clientY-yp);

        xp = details.clientX;
        yp = details.clientY;
        circleMouse(xs,ys)
        timeout = setTimeout(circleMouse(1,1),100)
    })
}

function circleMouse(xs,ys){
    window.addEventListener("mousemove",function(details){
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px,${details.clientY}px) scale(${xs},${ys})`
    })

    window.addEventListener("mouseleave",function(dets){
        dodocument.querySelector("#minicircle").style.opacity = 0;
    })
}

function firstPage(){
    var t1 = gsap.timeline();
     
    t1.from("#nav",{
        y: '-10',
        opacity : 0,
        duration : 1.5 ,
        ease : Expo.easeInOut
    })
        .to(".effect",{
            y: 0,
            ease:Expo.easeInOut,
            duration : 2,
            delay : -1,
            stagger:.2
        })
        .from("#subheads",{
            y : -10,
            opacity : 0,
            duration : 1.5 ,
            delay : -1,
            ease : Expo.easeInOut
        })
}


document.querySelectorAll(".element").forEach(function(elem){
    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"),{
            opacity : 1,
            ease : Power1,
            top : diff,
            left : dets.clientX
        })
    })

    elem.addEventListener("mouseleave",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"),{
            opacity : 0,
            ease : Power3,
            duration : 0.5
        })
    })

    })


squeeze();
firstPage()