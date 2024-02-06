// Side bar anvigation
let side_nav=document.getElementById('side-nav');
let arrow=document.getElementById('arrow');
arrow.addEventListener('click' ,()=>
{
    let catogray_show=side_nav.getAttribute('data-catogray');
    if(catogray_show === 'false')
    {
        side_nav.setAttribute('data-catogray',true)
        arrow.setAttribute('data-catogray' , true)
    }
    else
    {
        side_nav.setAttribute('data-catogray',false)
        arrow.setAttribute('data-catogray' , false)
    }
})