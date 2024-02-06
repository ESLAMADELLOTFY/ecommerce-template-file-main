let navOpen=document.querySelector(".mobile-open-btn");
let navClose=document.querySelector(".mobile-close-btn");
let primaryNavigation=document.querySelector("#primary-navigation");
navOpen.addEventListener('click',()=>
{
    let visibilty =primaryNavigation.getAttribute('data-visible');
    if(visibilty==='false')
    {
        primaryNavigation.setAttribute('data-visible',true);
        navClose.setAttribute('data-visible',true);
    }
    else
    {
        primaryNavigation.setAttribute('data-visible',false);
        navClose.setAttribute('data-visible',false);

    }
}
)
navClose.addEventListener('click',()=>
{
    let visibilty =primaryNavigation.getAttribute('data-visible');
    if (visibilty==='true')
    {
        primaryNavigation.setAttribute('data-visible',false);
        navClose.setAttribute('data-visible',false);
    }
}
)
// =======Cart Menue=======//
let shoppingBag=document.getElementById('cart-box');
let CartItem = document.getElementById('cart-icon');
let CrossBtn = document.getElementById('cross-btn');
shoppingBag.addEventListener('click' , ()=>
{
    let ShowCart = CartItem.getAttribute('data-visible');
    if(ShowCart === 'false')
    {
        CartItem.setAttribute('data-visible',true);
    }
    else
    {
        CartItem.setAttribute('data-visible',false);
    }
}
)
CrossBtn.addEventListener('click' , ()=>
{
    let ShowCart = CartItem.getAttribute('data-visible');
    if(ShowCart === 'true')
    {
        CartItem.setAttribute('data-visible' , false)
    }
})
console.log(CrossBtn)