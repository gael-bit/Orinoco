class Panier{
  constructor(DomTarget){
    // localStorage.clear();
     this.DOM = document.createElement("panier");
     this.DOM.className = "panier";
     this.domTarget = DomTarget;
     this.domTarget.appendChild(this.DOM);
     this.detailed = false;
     this.content = [];
     this.render();
     this.DOM.onclick= this.changeView.bind(this);

  }

  render(){
    this.DOM.innerHTML = this.resumeTemplate;
    if (this.detailed) this.detailedTemplate();
  }

  detailedTemplate(){
    this.modal = document.createElement("modal");
    this.DOM.appendChild(this.modal);
    const modalContent = document.createElement("modalContent");
    this.modal.appendChild(modalContent);
    let content = "";

    for(let i=0, size=this.content.length; i < size; i++){
      content += `
      <article>
        <div class="image_produit">
          <img src="${this.content[i].image}" height="155" />
        </div>
        <div>
          <h2>${this.content[i].name}</h2>
          <price>${this.content[i].price}</price>
          <button class="button-supprimer" onclick="orinoco.panier.remove(${i})">
            Supprimer
          </button>
        </div>
      </article>`
    }
    modalContent.innerHTML = content;
    new Formulaire(modalContent);
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
    // this.detailed = true;
    this.render();
  }

  remove(id){              
    console.log("---",id)             
    // this.DOM.parentNode.removeChild(this.DOM);
    // this.content.splice(0,1);
  }

  changeView(){
    if (this.content.length === 0) return;
    this.detailed = !this.detailed;
    this.render();
  }
}