// export function createElement(type, props, children){
//   return {type, props, children}
// }

// export function render(element, container){
//   const dom = element.type === "text" ? document.createTextNode('') : document.createElement(element.type);
//   const isProperty = key => key !== 'children';

//   if(element.props) {Object.keys(element.props).filter(isProperty).forEach(name=>{dom[name]=element.props[name]});

//   element.children.forEach(child => render(child, dom));}
//   container.appendChild(dom);
// }

// export function updateElement(dom, prevProps, nextProps){
//   Object.keys(prevProps).forEach(name=>{
//     if(name !== 'children' && !nextProps.hasOwnProperty(name)){
//       dom[name] = ''
//     }
//   });

//   Object.keys(nextProps).forEach(name=>{
//     if(name !== 'children' && prevProps[name]!== nextProps[name]){
//       dom[name] = nextProps[name];
//     }
//   })
// }

// function reconcile(parentDom, element, prevElement){
//   if(!prevElement){
//     render(element, parentDom);
//   }else if(element.type !== prevElement.type){
//     parentDom.replaceChild(render(element), parentDom.childNodes[0])
//   }else{
//     updateElement(parentDom.childNodes[0], prevElement.props, element.props);

//     element.children.forEach((child,index)=>{
//       reconcile(parentDom.childNodes[0], child, prevElement.children[index]);
//     })
//   }
// }

// export function createElement(nodeType, attributes, children){

//   if(typeof children === 'string'){
//     return createElement(nodeType, attributes, [createElement('text', children)])
//   }

//   if(nodeType==='text'){
//     return {nodeType, attributes: {text: attributes}}
//   }
//   return {nodeType, attributes, children};
// }

// export function render(vnode, element){
//   if(vnode.nodeType === 'text'){
//     element.textContent = vnode.attributes.text;
//     return
//   }

//   if(element.nodeType === Node.ELEMENT_NODE){
//     for(const attribute in vnode.attributes){
//       element.setAttribute(attribute, vnode.attributes[attribute])
//     }
//   }

//   if(Array.isArray(vnode.children)){
//     vnode.children.forEach(child => {
//       let childElement
//       if(child.nodeType === 'text'){
//         childElement = document.createTextNode(child.attributes.text)
//       }else{
//         childElement = document.createElement(child.nodeType)
//       }
//       render(child, childElement)
//       element.appendChild(childElement)
//     });
//   }
// }

/**
 * 
 * @param {string} tagName 
 * @param {*} attributes 
 * @param {string | HTMLElement | HTMLElement[]} childs 
 * @returns 
 */
export function e(tagName, attributes={}, childs='') {
  const elt = document.createElement(tagName);

  for (const attribute in attributes) {
    elt.setAttribute(attribute, attributes[attribute]);
  }
  if (Array.isArray(childs)) {
    childs.forEach((c) => {
      elt.append(c);
    });
  } else {
    elt.append(childs);
  }
  return elt;
}

export function s(src) {
  const script = document.createElement("script");
  script.setAttribute("type", "module");
  script.setAttribute("src", src);
  document.body.appendChild(script);
}

export function css(srcs) {
  if (Array.isArray(srcs)) {
    srcs.forEach((src) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", src);
      document.head.appendChild(link);
    });
  } else {
    const src = srcs;
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", src);
    document.head.appendChild(link);
  }
}

export function title(name){
  if(document.querySelector('head title')){
    const _title = document.querySelector("head title");
    _title.textContent = name;
    document.title = name
  }
}

/**
 * 
 * @param {string} id the element target id
 * @param {() => void} cb call back contain the element selectionned
 */
export function select(id, cb) {
  const elt = document.getElementById(id);
  if(!elt) console.warn(`select: The element with '${id}' are not found.`);
  if(elt) cb(elt);
}
