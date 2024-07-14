function loadanimation()
{
    var tl = gsap.timeline()

    tl.from(".line #counter h4",{
        opacity : 0,
        onStart : function(){
            var inc = document.querySelector("#counter h4 span");

            var count = 0;
            var counter = setInterval(function(){
                count++;
                inc.textContent = count;
                if(count == 100) clearInterval(counter);
            },40)
        }
    })

    tl.from(".line h1",{
        y : 100,
        opacity : 0,
        delay : 0.4,
        duration : 0.4,
        stagger : 0.4
    })

    tl.to("#loader",{
        delay : 4,
        duration : 0.4,
        opacity : 0
    })

    tl.from("#page1",{
        y : 1200,
        opacity : 0,
        duration : 1
    })

    tl.to("#loader",{
        display : "none"
    })

}

function page1()
{
    var body = document.querySelector("body");

    body.addEventListener("mousemove",function(data){
        gsap.to("#crsr",{
            x : data.x + "px",
            y : data.y + "px",
        })
    })

    Shery.makeMagnet("#work", {});
    Shery.makeMagnet("#contacts", {});
    Shery.makeMagnet("#about", {});
    
}

loadanimation();
page1();


var mover = document.querySelector("#mover");
    var left = document.querySelector("#one");
    var right = document.querySelector("#two");


    left.addEventListener("mousemove",function(data){
        gsap.to("#mover",{
            opacity : 1,
            x : data.x + "px",
            y : data.y + "px"
        })
    })

    right.addEventListener("mousemove",function(data){
        gsap.to("#mover",{
            opacity : 1,
            x : data.x + "px",
            y : data.y + "px"
        })
    })

    left.addEventListener("mouseleave",function(data){
        gsap.to("#mover",{
            opacity : 0,
        })
    })

    right.addEventListener("mouseleave",function(data){
        gsap.to("#mover",{
            opacity : 0,
        })
    })