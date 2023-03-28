import { createComponent } from "../../../core/component/index.js";
import { e } from "../../../core/virtualDom/index.js";

export default () => createComponent(()=>{
  return e('div',{id:'overview'},[
    'an overview of money',
    'some text'
  ]);
}) 