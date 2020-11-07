class Card{
   /**
   * construit l'affichage de chaque produit contenu dans le serveur
   *
   * @param   {Objet, element(main)}  "Objet" est un produit contenu dans le serveur  "Element" correspond a l'element html où on va afficher le produit (main)
   * 
   * @constructor
   */

  constructor(props, domTarget){
   //localStorage.clear();
    this.DOM = document.createElement("card");
    domTarget.appendChild(this.DOM);
    for (const [key, value] of Object.entries(props)) {
      this[key] = value;
    }
    this.showDetails = false;
    orinoco.components[this._id.trim()] = this;
    this.render();
  }
  /**
   * affiche les informations de chaque produit(Nom, Prix, Description)
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void} rempli le contenu du DOM
   */
  render(){
    this.DOM.innerHTML = `<div class="image_produit"><img src='${this.imageUrl}' height ="215"/></div><div>${this.showDetails ? this.templateDetailed : this.templateResume}</div>`
  }
   /**
   * affiche la page produit du produit sélectionné
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void} 
   */
  openAndClose(){
    localStorage.setItem('name', orinoco.components[this._id].name);
    changePage("produit", localStorage.getItem("name"));
    this.showDetails = !this.showDetails;
    if (this.showDetails) new pageProduit(this._id);
    this.render();
  }
   /**
   * affiche les informations de chaque produit(Nom, Prix, Description) et un bouton permettant d'aller sur la page du produit
   *
   * @param {void} aucun paramettre
   * 
   * @return  affiche les informations de chaque produit, non détaillée(sans les couleurs)
   */
  get templateResume(){ 
    return `<h2>${this.name}</h2>
            <price>${this.showPrice()} €</price>
            <button onclick="orinoco.components['${this._id}'].openAndClose()">+de detail</button>
            <p>${this.description}</p>`
  }
  /**
   * convertie le prix en euro
   *
   * @param {void} aucun paramettre
   * 
   * @return  {integer} prix réel en euro
   */
  showPrice(){
    return this.price/100;
  }
  /**
   * ajoute le produit au panier
   *
   * @param {void} aucun paramettre
   * 
   * @return  les informations du produit(Nom, Prix, Couleurs) 
   */
  get templateDetailed(){
    return `
      <h2>${this.name}</h2>
      <price>${this.showPrice()} €</price>
      <form method="post">
        <p>
          <label for="couleur"></label>
          <select name = "couleur" id = "couleur">
            <option value = "red">${this.colors[0]}</option>
            <option value = "blue">${this.colors[1]}</option>
            <option value = "green">${this.colors[2]}</option>
            <option value = "yellow">${this.colors[3]}</option>
          </select>
        </p>
      </form>
      <button onclick="orinoco.components['${this._id}'].addToCart()">Ajouter au panier</button> 
      <button onclick="orinoco.components['${this._id}'].openAndClose()">fermer</button>    
    `;
  }
  /**
   * ajoute le produit au panier
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  addToCart(){
    orinoco.panier.add({
      "name" : this.name,
      "price" : this.price,
      "image" : this.imageUrl
    });
  }
  /**
   * supprime tous les produits present sur la page avant de changer de page
   *
   * @param {void} aucun paramettre
   * 
   * @return  {void}  
   */
  die(){
    this.DOM.parentNode.removeChild(this.DOM);     
    // on supprime l'element du parent mais le parent c'est lui même, nan?
    delete(orinoco.components[this._id.trim()]);
  }

}