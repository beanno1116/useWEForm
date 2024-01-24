import { useState } from "react";

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
  const [formData,setFormData] = useState();
  const [errors,setErrors] = useState([]);
  const inputs = useRef([]);


  const handleInputChange = (e,inputName) => {

  }

  const handleInputReset = (e,inputName) => {

  }

  const handleFormReset = (e) => {

  }

  const handleFormSubmit = (e,handler,args={}) => {

  }



  const registerFormInput = (name,options = {}) => {
    let inputName = name;
    const retObj = {
      id: uuid(),
      value: formData[inputName],
      "data-error": "false",
      ref: (ele) => registerInput(inputName,ele,options),
      onchange: () => {},
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