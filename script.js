var index = 0
function carousel(){
    let i;
    let x = document.getElementsByClassName("slider");
    for(i=0; i<x.length; i++){
        x[i].style.display = "none";
        
    }
    index++;
    if(index > x.length){
        index = 1
    }
    x[index-1].style.display = "block";
    setTimeout(carousel,2000)
}
carousel()
