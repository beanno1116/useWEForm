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

/**
 * Checks if the provided parameter is of type Object
 * @param {*} obj - vallue to check
 * @returns {Boolean} true if value is object | false if value is not an object
 */
const isObject = (obj) => {
  try {
    if (obj === null || obj === undefined) throw new Error("Parameter undefined");
    if (typeof obj === 'object' && obj instanceof Object) {
      return true;
    }
    return false;    
  } catch (error) {
    console.log(`[utilities.js][isObject][ERROR]-${error.message}`);
  }
}

const isUndefined = (value) => value === undefined;




export {
  uuid,
  isObject,
  isUndefined
}