alert('Welcome Greek Learners! Please consider sending us your feedback at the contact page. Thank you!');


//console.log ("Hey Zorba!");




//function validateForm() {
    //console.log("Hello World!");}

    const animation=document.querySelector("#animation")

animation.addEventListener("mouseenter", () => {
    if(!animation.classList.contains("hover")) {
        animation.classList.add("hover");
    }
})

animation.addEventListener("mouseleave", () => {
    if(animation.classList.contains("hover")) {
    animation.classList.remove("hover");
    }
})







