$(document).ready(function(){//The ready event occurs when the DOM (document object model) has been loaded.The document object represents your web page.
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            }
        }
        
    })
})