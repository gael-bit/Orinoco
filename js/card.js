class Card{

  // colors;
  // description;
  // imageUrl;
  // name;
  // price;
  // _id;


  constructor(props, domTarget){
   // localStorage.clear();
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
    this.DOM.innerHTML = `<div class="image_produit"><img src='${this.imageUrl}' height ="215"/></div><div>${this.showDetails ? this.templateDetailed : this.templateResume}</div>`
  }

  openAndClose(){
    this.showDetails = !this.showDetails;
    if (this.showDetails) new pageProduit(this._id);
    this.render();
  }

  get templateResume(){ //que signifie get?
      console.log(orinoco.components[this._id]);
    return `<h2>${this.name}</h2><price>${this.showPrice()}</price><button onclick="orinoco.components['${this._id}'].openAndClose()">+de detail</button>
    <p>${this.description}</p>`
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
      <button onclick="orinoco.components['${this._id}'].addToCart()">Ajouter au panier</button> 
      <button onclick="orinoco.components['${this._id}'].openAndClose()">fermer</button>    
    `;
  }

  addToCart(){
    orinoco.panier.add({
      "name" : this.name,
      "price" : this.price,
      "image" : this.imageUrl
    })
  }

  die(){
    this.DOM.parentNode.removeChild(this.DOM); // on supprime l'element du parent mais le parent c'est lui même, nan?
    delete(orinoco.components[this._id.trim()]);
  }
}