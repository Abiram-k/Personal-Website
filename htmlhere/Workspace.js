$(document).ready(function(){
    $("#form1").validate({
        rules:{
        name:{
            required:true,
            minlength:4
        }}
        
    })
})
