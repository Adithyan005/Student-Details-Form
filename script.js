function show()
    {
        
        let a=document.forms["myform"]["fname"].value;
        let b=document.forms["myform"]["roll"].value;
        let c=document.forms["myform"]["stud"].value;
        let d=document.forms["myform"]["cs"].value;
        let e=document.forms["myform"]["em"].value;
        let f=document.forms["myform"]["clg"].value;
        let g=document.forms["myform"]["gend"].value;
        let h=document.forms["myform"]["dob"].value;
        let i=document.forms["myform"]["mob"].value;
       
        let nameRegex = /^[a-zA-Z]+$/;
        if (a === "" || !nameRegex.test(a)) {
        window.alert("Name must be filled and should contain only letters");
        return false;
        }
       
        else if(b=="")
        {
            window.alert("Roll Number must not be empty");
            return false;
        }
        else if(c==""||c=="1")
        {
            window.alert("Year should not be empty");
            return false;
        }
        else if(d=="")
        {
            window.alert("Department should not be empty");
            return false;
        }
        else if(e=="")
        {
            window.alert("Email should not be empty");
            return false;
        }
        else if(f=="")
        {
            window.alert("College Name should not be empty");
            return false;
        }
        
        else if(g=="")
        {
            window.alert("Gender must not be empty");
            return false;
        }
        else if(h=="")
        {
            window.alert("Date of Birth must not be empty")
            return false;
        }
        else if(i=="")
        {
            window.alert("Mobile Number should not be empty");
            return false;
        }
       
        else{
            window.open("ind.html","_blank");
            
        }
    
        
    }