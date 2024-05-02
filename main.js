function openDocs(){
    location.href = "docs.html"
}


document.getElementById("docsLink").addEventListener("click",openDocs)

$(document).ready(() => {
    setTimeout(() => $(".css-transitions-only-after-page-load").removeClass("css-transitions-only-after-page-load"), 10);
  });

