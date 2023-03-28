import { createComponent } from "../../core/component/index.js";
import { e } from "../../core/virtualDom/index.js";

export default (child) => createComponent(()=>{
  
  return e('div',{id:'layout'},[
    'navbar',
    child,
    'something else'
  ]);
}) 