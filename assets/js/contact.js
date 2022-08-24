$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
        console.log("we are ready1");
        
        emailjs.init("LDggvTFCPJuh37e2t");
        
var templateParams = {
    from_name: 'James Web',
    message: 'Check this out!',
    title: "My little Queen"
};
 
//emailjs.send('service_xgc1i9s', 'template_wzm53c6', templateParams)
//    .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//    }, function(error) {
//       console.log('FAILED...', error);
//    });
        

 document.querySelector('form').addEventListener('submit', (e) => {
     console.log("weait");
    e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  if (data.message && data.name && data.email && data.subject) {
      console.log(data)
      
    var templateParams = {
        from_name: data.name,
        message: data.message,
        title: data.subject,
        email: data.email,
    };
    emailjs.send('service_xgc1i9s', 'template_wzm53c6', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
      
      alert("Email Sent, thanks!");
    }, function(error) {
        alert("Something went wrong, please contact us directly at muchelshotels@gmail.com");
       console.log('FAILED...', error);
    });
    document.querySelector('form').reset();
  } else {
      console.log("not filled completely.");
  }
});


    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
//            submitHandler: function(form) {
//                $(form).ajaxSubmit({
//                    type:"POST",
//                    data: $(form).serialize(),
//                    url:"contact_process.php",
//                    success: function() {
//                        $('#contactForm :input').attr('disabled', 'disabled');
//                        $('#contactForm').fadeTo( "slow", 1, function() {
//                            $(this).find(':input').attr('disabled', 'disabled');
//                            $(this).find('label').css('cursor','default');
//                            $('#success').fadeIn()
//                            $('.modal').modal('hide');
//		                	$('#success').modal('show');
//                        })
//                    },
//                    error: function() {
//                        $('#contactForm').fadeTo( "slow", 1, function() {
//                            $('#error').fadeIn()
//                            $('.modal').modal('hide');
//		                	$('#error').modal('show');
//                        })
//                    }
//                })
//            }
        })
    })
        
        
 })(jQuery)
})