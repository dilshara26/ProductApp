let navtogglebtn = document.getElementById('hamburger');
let collapsenavbar = document.getElementsById('navbar-collapsible-section');
let registerItem= document.getElementsById('register-item-id');
//let testitem = document.getElementsById('test');
let state = false;

navtogglebtn.addEventListener('click', toggle);

function toggle(){
    state = !state;
    if(state){
        collapsenavbar.style.display = 'block'; 
        registerItem.style.display = 'block'; 
    }else{
        collapsenavbar.style.display = 'none'; 
        registerItem.style.display = 'none'; 
    }
}