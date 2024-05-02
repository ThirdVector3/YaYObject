function returnHome(){
    location.href = "index.html"
}
docsBlocks = ["1.0","1.1","1.2"]
function activateDocsBlock(blockID){
    docsBlocks.forEach(element => {
        document.getElementById(element).style.display = "none"
    });
    document.getElementById(blockID).style.display = "block"
}




document.getElementById("homeLink").addEventListener("click",returnHome)

$(document).ready(() => {
    setTimeout(() => $(".css-transitions-only-after-page-load").removeClass("css-transitions-only-after-page-load"), 10);
  });