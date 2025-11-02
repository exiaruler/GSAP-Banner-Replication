// fade in from loader to banner
function start(){
    let dur=4;
    gsap.to(".end-frame",{x:-300});
    gsap.to(".loader",{
    duration: dur,     
    opacity: 0,      
    ease: "power2.inOut"
    });
    gsap.to(".banner",{
    duration: dur,     
    opacity: 100,      
    ease: "power2.inOut"
    });
}
function moveUp(yStart,duration,opacity,delay=0){
    return {y:yStart,duration:duration,opacity:opacity,ease:"power2.inOut",delay:delay};
}
function spin(degree,duration,delay,opacity=0){
    return {rotationY:degree,duration:duration,ease:"power2.inOut",opacity:opacity,delay:delay};
}
function masterLine(){
    let timeli=gsap.timeline();
    // start
    timeli.fromTo('.sub-frame-1',{opacity:0},moveUp(-15,2,1,0));
    timeli.fromTo(".short-terms",{opacity:0},moveUp(0,2,1,0.9),"<<");   
    // move onto sub frame 2
    let nextFraDu=1.1;
    timeli.to(".percentLockup",moveUp(-3,nextFraDu,0,2));
    timeli.to('.sub-frame-1',moveUp(-20,nextFraDu,0),"<<");
    timeli.fromTo('.sub-frame-2',{opacity:0},moveUp(-10,0.9,1,0),">>");
    // coin spin
    let front={
    rotationY: 180,
    scaleX: -1, 
    duration: 0.5,
    ease: "sine.inOut"
    };
    let back={
    rotationY: 360,
    scaleX: 1, 
    duration: 0.5,
    ease: "sine.inOut"
    };
    timeli.to('.coin-red',front)
    timeli.to('.coin-red',back);
    // move onto last frame
    let nextFramDurr=2;
    timeli.to('.frame-1',{x:300,duration:nextFramDurr,delay:2,borderTopLeftRadius:"22px",ease:"power2.inOut"});
    timeli.to('.end-frame',{x:0 ,duration:nextFramDurr,ease:"power2.inOut"},"<<");
    // icons appear and move to forward facing position while frame 1 and last frame transition
    let iconSpin=spin(0,1.7,0.5,1);
    timeli.fromTo(".icon",spin(90,0,0),iconSpin,"<<");
    timeli.fromTo('.cta-button',moveUp(15,0,0,0),moveUp("-=13",2.5,1,0),"<<");
    
}

start();
masterLine();

