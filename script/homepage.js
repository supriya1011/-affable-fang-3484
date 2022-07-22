let loadmore = document.querySelector('#load-more');
    let currentitem = 3;
    loadmore.onclick = () =>{
        let boxes = [...document.querySelectorAll(".container .box-container .box")];
        for(let i=currentitem;i < currentitem + 3;i++){
            boxes[i].style.display = "inline-block";
        }
        currentitem = currentitem + 3;
        if(currentitem >= boxes.length){
            loadmore.style.display = "none";
        }
    }