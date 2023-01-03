const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

prevBtn.onclick=function(){
    toTop()
}

nextBtn.onclick=function(){
    toTop()
}
function toTop(){
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}