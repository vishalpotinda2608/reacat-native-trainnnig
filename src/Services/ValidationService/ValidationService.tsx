class ValidationService{

    isEmail(value){
        let reg=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
        return reg.test(value) ? true : false;

    }

    isMobile(value){
        let reg=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        return reg.test(value)? true : false;

    }
}


export default  new ValidationService;