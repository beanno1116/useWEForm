import { useState,useRef } from "react";
import { isObject, isUndefined, uuid } from "./utilities";
import { formFields } from "./models/Field";
import createFormController from "./controllers/formController";


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
  const _controller = useRef(undefined);

  if (!_controller.current){
  _controller.current = createFormController();  
  }


  return _controller.current;
}

  





  

export default useWEForm;