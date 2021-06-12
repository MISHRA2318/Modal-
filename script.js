const showmodal =document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const clsbtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');


const openmodal = function(){
    console.log("clicked");
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closemodal = function(){
    modal.classList.add("hidden");
    overlay.classList.add('hidden');
}



for(let i=0;i<showmodal.length;i++)    
        showmodal[i].addEventListener("click",openmodal)
    
        clsbtn.addEventListener("click",closemodal)

        overlay.addEventListener("click",closemodal)

        document.addEventListener("keydown",function(e){
             if(e.key=="Escape"){
                modal.classList.add("hidden");
                overlay.classList.add('hidden');}
            
           
        })