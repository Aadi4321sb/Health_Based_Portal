gsap.from(".nlink", {
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})
Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    window.addEventListener('scroll', function() {
        scrollIndicator.style.opacity = '0';
    });
});
function show() {
   showHiddenDivs();
   changeText();
   showindicator();
}
function showHiddenDivs() {
    var div1 = document.getElementById("specialists");
    div1.style.display = "flex";
}
function changeText() {
    
    var inputText = document.getElementById("textInput").value;

   
    document.getElementById("outputSpan").innerText = inputText;
    document.getElementById("outputSpan2").innerText = inputText;
    document.getElementById("outputSpan3").innerText = inputText;
    document.getElementById("outputSpan4").innerText = inputText;
    document.getElementById("outputSpan5").innerText = inputText;
    document.getElementById("outputSpan6").innerText = inputText;
    document.getElementById("outputSpan7").innerText = inputText;
    document.getElementById("outputSpan8").innerText = inputText;
    document.getElementById("outputSpan9").innerText = inputText;
}
function showindicator() {
    var indicator = document.querySelector(".scroll-indicator");
    indicator.style.display = "flex";
}
