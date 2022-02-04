/**
 * Modal Elements Get
 */
const mdl_button = document.querySelector('.mdl_btn')
const modal_area = document.querySelector('.modal-area')
const modal = document.querySelector('.sa-modal')
const close_btn = document.querySelector('.close')
const val = document.querySelector('.val')
const valwrite = document.querySelector('#valwrite')
const save = document.querySelector('#save')
const sa_alert = document.querySelector('.sa-alert')
const close_alert = sa_alert.querySelector('.close_alert')
const keep = sa_alert.querySelector('.keep')
const discard = sa_alert.querySelector('.discard')

mdl_button.addEventListener('click',function(e){
     e.preventDefault();
     modal_area.style.cssText = 'visibility:visible;opacity:1;'
     modal.style.cssText = 'transform:translateY(0px);visibility:visible;opacity:1;'
})

close_btn.addEventListener('click',function(){
    sa_alert.style.display = 'flex' 
})

valwrite.value = val.textContent;
save.addEventListener('click',function(){
    val.textContent = valwrite.value
    modal.style.cssText = 'transform:translateY(-20px);visibility:hidden;opacity:0;'
    modal_area.style.cssText = 'visibility:hidden;opacity:0;'
})

close_alert.addEventListener('click',function(e){
    sa_alert.style.display = 'none'
})

keep.addEventListener('click',function(e){
    e.preventDefault();
    sa_alert.style.display = 'none'
})

discard.addEventListener('click',function(e){
    e.preventDefault();
    sa_alert.style.display = 'none'
    modal.style.cssText = 'transform:translateY(-20px);visibility:hidden;opacity:0;'
    modal_area.style.cssText = 'visibility:hidden;opacity:0;'
})

modal_area.addEventListener('click',function(e) {
    if(e.target == this){
        modal.style.cssText = 'transform:translateY(-20px);visibility:hidden;opacity:0;'
        modal_area.style.cssText = 'visibility:hidden;opacity:0;'
    }
})

/** 
 * Accordion Elements get
*/
const accHeader = document.querySelectorAll('.acco-header')
const acc_content = document.querySelectorAll('.acco-content')

accHeader.forEach( item => {
     item.addEventListener('click', (e) =>{
        acc_content.forEach( content => {
            if(e.currentTarget.nextElementSibling !== content){
                content.classList.remove('active')
                accHeader.forEach( btn => {
                    btn.classList.remove('active')
                })
            }
        })

        item.nextElementSibling.classList.toggle('active')
        item.classList.toggle('active')
     })
})

