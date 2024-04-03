import { 
  isUndefined,
  uuid,
 } from "../utilities";

import { formFields } from "../models/Field";

const Fields = new formFields();

const _options = {
  required: false,
  min: 0,
  max: 100,
  minLength: 0,
  maxLength: 100,
  pattern: ""
}


function createFormController(){
  let _fields = new formFields();

  const handleInputChange = (e,inputName) => {
  
  }
  
  const registerFormInput = (name,options = {}) => {
    let field = Fields[name];
    Fields[name] = {...(field || {}),f:{...(field && field.f ? field.f : {ref: {name}})}};
  
  
    const inputOptions = {..._options,...options};
  
    debugger;
    let inputName = name;
    const retObj = {
      id: uuid(),
      disabled: inputOptions.disabled,    
      "data-error": "false",
      onChange: (e) => handleInputChange(e,inputName),
      onReset: () => {},
      onBlur: (e) => handleInputChange(e,inputName),
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
          field.ref = ref;
        }
      },
      
    }
    return retObj;
  }
  
  const handleInputReset = (e,inputName) => {

  }

  const handleFormReset = (e) => {

  }

  const handleFormSubmit = (e,handler,args={}) => {

  }

  return {
    controller: {
      registerFormInput,
      get _fields(){
        return _fields;
      }
    },
    registerFormInput
  }
}

export default createFormController;
