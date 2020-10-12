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
    this.showDetails = false;
    orinoco.components[this._id.trim()] = this;
    this.render();
  }

  render(){
    this.DOM.innerHTML = this.showDetails ? this.templateDetailed : this.templateResume;

  }

  click(){
    this.showDetails = !this.showDetails;
    if (this.showDetails) new PageProduit(this._id);
    this.render();
  }

  get templateResume(){
    return `<h2>${this.name}</h2><price>${this.showPrice()}</price><button onclick="orinoco.components['${this._id}'].click()">+de detail</button>`
  }

  showPrice(){
    return this.price/100;
  }

  get templateDetailed(){
    return `
      <h2>${this.name}</h2>
      <price>${this.showPrice()}</price>
      <form method="post">
        <p>
          <label for="couleur"></label>
          <select name = "couleur" id = "couleur">
            <option value = "red">Red</option>
            <option value = "blue">Blue</option>
            <option value = "green">Green</option>
            <option value = "yellow">Yellow</option>
          </select>
        </p>
      </form>
      <button>Ajouter au panier</button> 
      <button onclick="orinoco.components['${this._id}'].click()">fermer</button>    
    `;
  }

  die(){
    this.DOM.parentNode.removeChild(this.DOM);
    delete(orinoco.components[this._id.trim()]);
  }
}