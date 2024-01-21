const moonPath = "M18 28.9388C18 44.4027 30 56.9388 30 56.9388C13.4315 56.9388 0 44.4027 0 28.9388C0 13.4748 13.4315 0.938765 30 0.938765C30 0.938765 18 13.4748 18 28.9388Z"  ;
const sunpath = " M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z" ;
const darkMode =  document.querySelector("#darkMode");
let toggle=false;
darkMode.addEventListener( 'click', () =>{
const timeline =  anime.timeline({   
    // here we set up the timeline
    duration: 750,
    easing : "easeOutExpo"

});
// SO everything in this timeline happens for 750 ms . First it morphs 
// into the half moon over 750ms and then rotates 
  // add different animations to the timeline
  timeline.add({
    targets: ".sun",
    d : [{value: toggle ? sunpath : moonPath}]
  })
  .add({
    targets: "#darkMode",
    rotate: 320
  }, 
  "-=350")
  .add({
     targets: "section",
     backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)'
  }, '-=250')
  .add({
    targets: "h1",
  color: toggle ? 'rgb(22,22,22)' :'rgb(255,255,255)'
  } , '-=350');
  // everytime on click toggle must switch so here goes
  toggle = !toggle;

  
});

