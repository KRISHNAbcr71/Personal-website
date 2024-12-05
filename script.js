
$(document).ready(function(){
    $("#contactForm").validate({
        rules:{
            fname:{
                required:true
            },
            emailAddress:{
                required:true,
                email:true
            },
            var :number=$("#tel").val();
            if(number.length!==10 || isNaN(number)){ 
            $("#message").text("Please enter a valid 10-digit phone number.") ;
        }else
        {
            $("#message").text("Phone number is valid!").css("color", "green") ;
        }
        },
        messages:{
            fname:"Enter your name" ,
            emailAddress:"Enter your email"
        }
        
    });
});