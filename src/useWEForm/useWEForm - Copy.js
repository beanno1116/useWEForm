import { useState,useRef } from "react";
import { isObject, isUndefined, uuid } from "./utilities";
import { formFields } from "./models/Field";


const Fields = new formFields();

const _options = {
  required: false,
  min: 0,
  max: 100,
  minLength: 0,
  maxLength: 100,
  pattern: ""
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
    let field = Fields[name];
    Fields[name] = {...(field || {}),f:{...(field && field.f ? field.f : {ref: {name}})}};


    const inputOptions = {..._options,...options};

    // debugger;
    let inputName = name;
    const retObj = {
      id: uuid(),
      disabled: inputOptions.disabled,
      value: formData[inputName],
      "data-error": "false",
      onChange: (e) => handleInputChange(e,inputName),
      onReset: () => {},
      onBlur: () => {},
      ref: (ele) => {
        debugger;
        if (ele) {

          registerFormInput(name,options);
          field = Fields[name];

          const ref = isUndefined(ele.value)
            ? ele.querySelectorAll 
              ? (ele.querySelectorAll('input,select,textarea')[0]) || ele 
              : ele 
            : ele
            debugger;
            console.log(ref);
        }
      },
      
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