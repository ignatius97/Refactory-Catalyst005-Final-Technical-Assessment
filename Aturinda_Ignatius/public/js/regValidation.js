function regValidation(){
    var surname = document.registration_form.surname;
    var given_name = document.registration_form.given_name;
    var dob = document.registration_form.dob;
    var place_of_residence = document.registration_form.place_of_residence;
    var occupation = document.registration_form.occupation;
    var nationality = document.registration_form.nationality;

    function alertError(errId,errMsg){
        document.getElementById(errId).innerHTML = errMsg;
    }

    var letters = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;


    var surname_error = given_name_error = dob_error = place_of_residence_error = occupation_error = nationality_error = true;

    if(surname.value.length == " " || !surname.value.match(letters)   ){
        alertError("surname_error","surname should not be empty and should have only characters *")
        surname.style.border = "1px solid red";
        surname.style.display = "inline-block";
          
    }
    else {
        alertError("surname_error"," ")
        surname.style.border = "none";
        surname_error = false; 
    };

    if(given_name.value.length == " " || !given_name.value.match(letters)   ){
        alertError("given_name_error","given_name should not be empty and should have only characters *")
        given_name.style.border = "1px solid red";
        given_name.style.display = "inline-block";
          
    }
    else {
        alertError("given_name_error"," ")
        given_name.style.border = "none";
        given_name_error = false; 
    };

    if(dob.value.length == " "    ){
        alertError("dob_error","dob should not be empty *")
        dob.style.border = "1px solid red";
        dob.style.display = "inline-block";
          
    }
    else {
        alertError("dob_error"," ")
        dob.style.border = "none";
        dob_error = false; 
    };

    if(place_of_residence.value.length == " "   ){
        alertError("place_of_residence_error","place_of_residence should not be empty  *")
        place_of_residence.style.border = "1px solid red";
        place_of_residence.style.display = "inline-block";
          
    }
    else {
        alertError("place_of_residence_error"," ")
        place_of_residence.style.border = "none";
        place_of_residence_error = false; 
    };

    if(occupation.value.length == " "   ){
        alertError("occupation_error","occupation should not be empty *")
        occupation.style.border = "1px solid red";
        occupation.style.display = "inline-block";
          
    }
    else {
        alertError("occupation_error"," ")
        occupation.style.border = "none";
        occupation_error = false; 
    };

    if(nationality.value.length == " " ){
        alertError("nationality_error","nationality should not be empty *")
        nationality.style.border = "1px solid red";
        nationality.style.display = "inline-block";
          
    }
    else {
        alertError("nationality_error"," ")
        nationality.style.border = "none";
        nationality_error = false; 
    };





    if(( surname_error || given_name_error || dob_error || place_of_residence_error || occupation_error || nationality_error )===true){
        event.preventDefault();
    }
    else{
        event.currentTarget.submit();
    }

}