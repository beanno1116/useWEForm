

const Field = {
  f: {
    ref: undefined,
    name: "",
    refs: [],
    mount: false,
    options: {}
  }
}


const proxyHandler = {
  get: (target,property) => {
    if (target[property]){
      return Reflect.get(target,property);
    }
    return {}
  },
  set: (target,property,value) => {
    return Reflect.set(target,property,value);
  }
}

const formFields = function(){
  const instance = {}

  const instanceProxy = new Proxy(instance,proxyHandler);

  return instanceProxy;
}

export {
  formFields
}

