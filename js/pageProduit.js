class PageProduit{
  constructor(keep){
    if (keep === undefined) {

      new Product()
    }
    else {
      for (const [key, value] of Object.entries(orinoco.components)) {
        if (key !== keep) orinoco.components[key].die();
      }
    }
  }
}