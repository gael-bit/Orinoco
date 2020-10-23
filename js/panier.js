class Panier{
  constructor(DomTarget){
    // localStorage.clear();
     this.DOM = document.createElement("card");
     this.domTarget = DomTarget;
     this.domTarget.appendChild(this.DOM);
     this.detailed = false;
     this.content = [];
  }

  render(){
    this.DOM.innerHTML = this.detailed? this.detailedTemplate : this.resumeTemplate;
    new Formulaire(this.domTarget);
  }

  get detailedTemplate(){
    return `<div class="image_produit"><img src='${this.content[0].image}' height ="155"/></div>
            <div>
              <h2>${this.content[0].name}</h2>
              <price>${this.content[0].price}</price>
              <button class="button-supprimer" onclick = "${this.content[0]}.remove()">Supprimer</button>
            </div>`
  }

  get resumeTemplate(){
    return this.content.length;
  }

  /**
   * [add description]
   *
   * @param   {object}  product  [product description]
   *
   * @return  {void}           [return description]
   */
  add(product){
    this.content.push(product);
    this.detailed = true;
    this.render();
  }

  remove(){                           
    this.DOM.parentNode.removeChild(this.DOM);
    this.content.splice(0,1);
  }

}