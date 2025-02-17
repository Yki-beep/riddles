// const toggleAnswer = (e) => {
    // e.target.nextElementSibling.classList.toggle('hide');
// }

document.querySelectorAll(".myBtn").forEach((btn) => {
    btn.addEventListener("click", toggleAnswer)
})

document.querySelector("section").addEventListener("click", function(e){
    if(e.target.classList.contains("myBtn")){
        e.target.nextElementSibling.classList.toggle('hide');
    }
})
