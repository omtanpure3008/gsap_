/*

    GSAP - 
        1. from()
        2. to()
        3. timeline()


        x: ,
        y: ,
        delay: ,
        duration: ,
        repeat: , // 2 = 2 + 1 = 3
        yoyo: true, // animation-direction: alternate;
        opacity: ,
        background-color: " ",

*/

var tl = gsap.timeline();


tl.from(".box", {
    x: 400,
    duration: 2,
    stagger: 2,
});
