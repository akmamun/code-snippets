//Library for validation
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.16.0/jquery.validate.min.js"></script>
                        
<form id="form1" name="form1" action=""> 
      <div><input type="name" name="name" id="name">
      <span class="help-inline"> </span>
      <div>
        <input type="email" name="email" id="email">
      <span class="help-inline"> </span>
      </div>
       <div>
        <input type="password" name="password_confirmation" id="password_confirmation">
      <span class="help-inline"> </span>
      </div>
 </form>
 //  Custom Js  Valdiation to id name of html form                  
$(document).ready(function () {
    var v = $("#form1").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 100
            },
            email: {
                required: true,
                minlength: 2,
                email: true,
                maxlength: 50
            },
                // confirmed password
           password_confirmation: {
                            minlength: 6,
                            maxlength: 50,
                            equalTo: "#password",

                        }

        },
                        
      //  custom messeage show 
        messages: {
                        name:{
                            equalTo: "Please Enter your name",
                        }
                    },
        errorElement: "span",
        errorClass: "help-inline",
    });
});

<style>
 .help-inline {
                color: red;
                font-size: 15px;
                font-weight: 500;
            }
</style>
