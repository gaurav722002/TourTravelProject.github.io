        var side = document.getElementById("side")
        var firstSlide = document.getElementById("first_slide")
        var close = document.getElementById("close")
        var nav = document.getElementById("nav")

        side.addEventListener('click',function(event){
           firstSlide.style.left = "0"
           side.style.display ="none"
        })
        close.addEventListener('click',function(event){
            firstSlide.style.left = "-70%"
            side.style.display = "inherit"
        })