function openNav() {
    document.querySelector(".sidebarBackdrop").style.width = "100%";
  document.getElementById("mySidenav").style.width = "418px";
}

function closeNav() {
    document.querySelector(".sidebarBackdrop").style.width = "0";
  document.getElementById("mySidenav").style.width = "0";
}

setInterval(() => {
  if(document.querySelector("#modal3").classList.contains("show"))
  {
    $("#modal3").delay(1800).fadeOut(200)
    setTimeout(() => {

      $("#modal3").modal('hide')
    }, 2000);
  }
}, 100);
