function validation(){



    var user=document.getElementById("user").value;
    var pass=document.getElementById("password").value;
    var cpass=document.getElementById("cpassword").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;









    if(user==""){

        document.getElementById("userspan").innerHTML="*please fill the username";
        return false; //ata na likhle submit a click korle information chole jabe

    }




    if((user.length<=3)||(user.length>10)){

        document.getElementById("userspan").innerHTML="*username must be between 2 and 20";
        return false; //ata na likhle submit a click korle information chole jabe


    }
    if(!isNaN(user)){

       document.getElementById("userspan").innerHTML="*only char allowed";
        return false; //ata na likhle submit a click korle information chole jabe
 
    }


    if(pass==""){

        document.getElementById("spanpass").innerHTML="*please fill the password";
        return false; //ata na likhle submit a click korle information chole jabe

    }
    if(pass.length<=8){

        document.getElementById("spanpass").innerHTML="*must be 8 digit";
        return false; //ata na likhle submit a click korle information chole jabe


    }

//password abong confirm password same milanor jonno

if(pass!=cpass){

   document.getElementById("cspan").innerHTML="*password are not match"
}



    if(cpass==""){

        document.getElementById("cspan").innerHTML="*please fill the confirm-password";
        return false; //ata na likhle submit a click korle information chole jabe

    }




    if(mobile==""){

        document.getElementById("mspan").innerHTML="*please fill the mobile number";
        return false; //ata na likhle submit a click korle information chole jabe

    }

   if(isNaN(mobile)){
    document.getElementById("mspan").innerHTML="*char not allowed just number allowed";
    return false; //ata na likhle submit a click korle information chole jabe

   }

   if(mobile<=10){
    document.getElementById("mspan").innerHTML="*invalid number";
    return false; //ata na likhle submit a click korle information chole jabe


   }

    if(email==""){

        document.getElementById("espan").innerHTML="*please fill the email";
        return false; //ata na likhle submit a click korle information chole jabe

    }


if(email.indexOf("@")<=0){

    document.getElementById("espan").innerHTML="*@ first not allowed";
        return false; //ata na likhle submit a click korle information chole jabe
}

if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){

    document.getElementById("espan").innerHTML="*@invlid position";
    return false; //ata na likhle submit a click korle information chole jabe

}

    
}