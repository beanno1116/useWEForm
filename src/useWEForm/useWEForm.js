import { useState,useRef } from "react";

const uuid = (prefix) => {
  try {
    var text = prefix || "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-";  
    for (var i = 0; i < 64; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }  
    return text;
  } catch (error) {
    console.error(`[FNC][UUID][ERROR] - ${error.message}`);
  }        
}


const useWEForm = (initialState = {},onSubmit = null) => {
  const [formData,setFormData] = useState(initialState);
  const [errors,setErrors] = useState([]);
  const inputs = useRef({});


  const handleInputChange = (e,inputName) => {
    let inputObj = inputs.current[inputName];    
    setFormData({...formData,[inputName]:e.target.value})    
  }

  const handleInputReset = (e,inputName) => {

  }

  const handleFormReset = (e) => {

  }

  const handleFormSubmit = (e,handler,args={}) => {

  }



  const registerInput = (name,input,options) => {
    try {      
      let inputsCopy = {...inputs.current};
      if (inputsCopy.hasOwnProperty(name)) return;
      inputsCopy[name] = {name,input,options};
      console.log(inputsCopy);
      inputs.current = {...inputsCopy};
    } catch (error) {
      console.error(`[FN]registerInput()[ERROR]-${error.message}`);
      console.error(error.stack);
    }
  }

  const registerFormInput = (name,options = {}) => {
    // debugger;
    let inputName = name;
    const retObj = {
      id: uuid(),
      value: formData[inputName],
      "data-error": "false",      
      ref: (ele) => registerInput(inputName,ele,options),
      onChange: (e) => handleInputChange(e,inputName),
      onReset: () => {},
      onBlur: () => {}
    }
    return retObj;
  }

  return {
    formData,
    errors,
    registerFormInput,
    handleFormReset,
    handleFormSubmit
  }

}

export default useWEForm;