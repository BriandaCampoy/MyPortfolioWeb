const element = document.getElementById('modal--slide');

element.addEventListener("wheel", slide)

function slide(event){
    let y=event.deltaY;
    element.scrollLeft +=y;

}