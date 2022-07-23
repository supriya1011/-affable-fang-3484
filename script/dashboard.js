let actualprice = document.querySelector("#actual-price");
let image_input = document.querySelector("#first-file-upload-btn");
let upload_image="";
image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", ()=>{
        upload_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${upload_image})`;
    });
    reader.readAsDataURL(this.file[0]);
})