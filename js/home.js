class Home{
  constructor(){
    orinoco.dataManager.getData(this.showProducts.bind(this));
  }

  showProducts(products){
    console.log(products);
  }
}