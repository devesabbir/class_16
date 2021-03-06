//getElements for Modal
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


//getElements for Accordion 

const accHeader = document.querySelectorAll('.acco-header')
const acc_content = document.querySelectorAll('.acco-content')

accHeader.forEach( item => {
     item.addEventListener('click',function(){
        accHeader.forEach( i => {
            if(i != this){
                i.classList.remove('active')
                i.nextElementSibling.style.height = '0px';
              
            }
        })

        item.classList.toggle('active')
        if(item.classList.contains('active')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight +'px'
            
     
        }else{
            item.nextElementSibling.style.height = '0px';
         
        }

     })  

})


 // getElements for tab
const tab_menu = document.querySelectorAll('.tab-menu ul a')
const tab_pane_all = document.querySelectorAll('.tab-pane')

 tab_menu.forEach( item => {
    item.addEventListener('click', function(e){
        e.preventDefault()
        tab_menu.forEach( i => {
            i.classList.remove('active')
        })
        item.classList.add('active')
        tab_pane_all.forEach( d => {
            d.classList.remove('active')
        })
        let tab_pane = document.querySelector(this.getAttribute('href'))
        tab_pane.classList.add('active')
    })
    
 })

