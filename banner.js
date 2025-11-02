const dim=document.querySelector('.container').getBoundingClientRect();
// fade in from loader to banner
function start(){
    // 2.9
    let dur=4;
    gsap.to(".end-frame",{x:-500});
    let a=gsap.to(".loader",{
    duration: dur,     
    opacity: 0,      
    ease: "power2.inOut"
    });
    let b=gsap.to(".banner",{
    duration: dur,     
    opacity: 100,      
    ease: "power2.inOut"
    });
}
function moveUp(yStart,duration,opacity,delay=0){
    return {y:yStart,duration:duration,opacity:opacity,ease:"power2.inOut",delay:delay};
}
function spin(degree,duration,opacity=0){
    return {rotationY:degree,duration:duration,ease:"power2.inOut",opacity:opacity};
}
function masterLine(){
    let timeli=gsap.timeline();
    
    // 0 to 3 seconds
    timeli.fromTo('.sub-frame-1',{opacity:0},moveUp(-15,2,1,0));
    timeli.fromTo(".short-terms",{opacity:0},moveUp(0,2,1,0.9),"<<")
    //timeli.to('.sub-frame-1',moveUp(-20,2,0));
    let nextFraDu=0.9;
    timeli.to(".percentLockup",moveUp(-3,nextFraDu,0,2));
    timeli.to('.sub-frame-1',moveUp(-20,nextFraDu,0),"<<");
    timeli.fromTo('.sub-frame-2',{opacity:0},moveUp(-10,0.9,1,0))
    timeli.to('.coin-red',spin(720,1.8,1));
    //2
    let durr=3;
    let iconSpin=spin(0,1.7,1);
    iconSpin.delay=1;
    timeli.to('.frame-1',{x:500,duration:durr,delay:1,borderTopLeftRadius:"22px",ease:"power2.inOut"});
    timeli.fromTo('.end-frame',{x:-500},{x:0 ,duration:durr,ease:"power2.inOut"},"<<");
    timeli.fromTo(".icon",spin(90,0,0),iconSpin,"<<");
    timeli.fromTo('.cta-button',moveUp(9,0,0,0),moveUp(-3,3,1,0),"<<");
    console.log(timeli.duration())
    
}

start();
masterLine();

