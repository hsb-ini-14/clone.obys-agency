function loaderPageAnimation() {
    var tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    });

    tl.from("#line1-part1", {
        opacity: 0,
        onStart: function () {
            var hFiveTimer = document.querySelector("#line1-part1 h5");
            var grow = 0;
            setInterval(function () {
                if (grow < 100) {
                    grow++;
                    hFiveTimer.innerHTML = grow;
                }
                else {
                    hFiveTimer.innerHTML = grow;
                }
            }, 20)
        }
    });

    tl.to(".line h2", {
        animationName: "animeOne",
        opacity: 1
    });

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2
    });

    tl.from("#page1", {
        opacity: 0,
        delay: 0.2,
        duration: 0.2,
        y: 1600,
        ease: Power4
    })

    tl.to("#loader", {
        display: 'none'
    })

    tl.from("#nav", {
        opacity: 0 
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y:120,
        stagger: 0.2 
    })
}
function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
        //Parameters are optional.
        
    });
}
loaderPageAnimation();
cursorAnimation();