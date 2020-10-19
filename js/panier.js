class Panier{
  constructor(domTarget){
    // localStorage.clear();
     this.DOM = document.createElement("panier");
     domTarget.appendChild(this.DOM);
     this.detailed = false;
     this.content = [];
     this.render();
  }

  render(){
    this.DOM.innerHTML = this.detailed? this.detailedTemplate : this.resumeTemplate;
  }

  get detailedTemplate(){
    return ``
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
    this.render();
  }

}