class Card{

  // colors;
  // description;
  // imageUrl;
  // name;
  // price;
  // _id;


  constructor(props, domTarget){
    this.DOM = document.createElement("card");
    domTarget.appendChild(this.DOM);
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
    this
    orinoco.components[this._id.trim()] = this;
    this.render();
  }

  render(){
    this.DOM.innerHTML = `<p>${this.name}</p><button onclick="orinoco.components['${this._id}'].click()"> cliquez moi</button>`;
  }

  click(){
    alert(this.name);
  }
}