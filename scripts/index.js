    const ads = document.getElementById("ads-ads");
    window.addEventListener("load", function loaded(){
    setTimeout('ads.style.display="block"', 5000)

})


document.querySelector(".ads-closer").addEventListener("click", function(){
document.querySelector(".ads").style.display = "none";
})
