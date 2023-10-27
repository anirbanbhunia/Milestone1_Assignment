const progressBar = document.getElementById("Progressbar")

function update(){
    progressBar.style.width = Math.round((scrollY)/(document.body.scrollHeight-innerHeight)*100)+"%"
    requestAnimationFrame(update)
}
update()