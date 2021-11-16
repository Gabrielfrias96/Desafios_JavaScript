$(`#no-view`).click(()=>{
   $(`#tienda`).fadeOut();
})  

$(`#view`).click(()=>{
   $(`#tienda`).fadeIn();
})  


$(`#button`).click(()=>{
   let producto =$(`#input`).val();
   $(`#box-productos`).append(`
   <div>${producto}</div>`)
   }) ;


