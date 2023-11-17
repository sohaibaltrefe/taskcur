export const validationdata =(user)=>{
    let errors={};
    if(user.name.trim()=="")
    {
        errors.name="name is required";
    }else if(user.name.trim().length<3)
    {
        errors.name="user must be at least 3 characters";
    }
    if(user.email.trim()=="")
    {
        errors.email="email is required";
    }else if(user.email.trim().length<14)
    {
    errors.email="email must be at least 13 characters";
    } if(user.password.trim()=="")
    {
        errors.password="password is required";
    }else if(user.password.trim().length<3)
    {
        errors.password="password must be at least 3 characters";
    }
    return errors;
}   