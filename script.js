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

tl.loader("#loader",{
    display : "none"
})
