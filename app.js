window.addEventListener('load',loader);
function loader(){
    const TLLOAD = gsap.timeline();

    TLLOAD
 .to('.load-container',{duration: 2, delay: 7, opacity: 0, display: 0});

 TLLOAD.add(()=>{
        document.querySelector('.load-container').style.display= "none";
    })
}