window.addEventListener("load", function() {
    console.log("Page has finished loading!");
    console.log(window);
    console.log(window.document);
    gsap.to("body", {backgroundColor: "red", duration: 3});
});