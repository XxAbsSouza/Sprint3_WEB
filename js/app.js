const menuItens = document.querySelectorAll('.menu a[href^="#"]');
menuItens.forEach(item=>{
    item.addEventListener('click', scroll);
})

function getScrollByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
    
}

function scroll(event){
    event.preventDefault();
   const to = getScrollByHref(event.target) - 80;
scrollToPosition(to);
   
}

function scrollToPosition(to){
window.scroll({
    top: top,
    behavior: "smooth",
})
}
