function appendLi() {
    const node = document.createElement("li");
    const textnode = document.createTextNode("Python");
    node.appendChild(textnode);
    
    document.getElementById("lista").appendChild(node);
  }
