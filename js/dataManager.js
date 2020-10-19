class DataManager{
  constructor(src){
    this.src = src;
    this.products = [];
  }

  async getData(callback){
    const data = await fetch(this.src);
    this.products = await data.json();
    callback(this.products);
  }

  setLocalStorage(key,value){
    if( typeof value === "object") value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }

  getLocalStorage(key){
    return localStorage.getItem(key);
  }
}