class Home {
  constructor() {
    orinoco.dataManager.getData(this.showProducts.bind(this));
    orinoco.page = this;
  }

  showProducts(products) {
    console.log(products);
    const target = document.querySelector("main");
    for (let i = 0, size = products.length; i < size; i++) {
      new Card(products[i], target);
    }
  }
}