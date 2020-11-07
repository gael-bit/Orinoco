class DataManager{
   /**
   * Gère les données, récuéprère les données du serveur, gère le local storage
   *
   * @param   {string}  src  adresse du serveur
   *
   * @constructor
   */
  constructor(src){
    this.src = src;
    this.products = [];
  }
  /**
   * Récuprère les données du serveur
   *
   * @param {function} envoie les données du serveur sous format json
   * 
   * @return  {void} 
   */
  async getData(callback){
    const data = await fetch(this.src);
    this.products = await data.json();
    callback(this.products);
  }
  /**
   * crée les éléments du local Storage
   *
   * @param {string, string} 
   * 
   * @return  {void} 
   */
  setLocalStorage(key,value){
    if( typeof value === "object") value = JSON.stringify(value);
    localStorage.setItem(key, value);
  }
   /**
   * récupère les éléments du local Storage
   *
   * @param {string} 
   * 
   * @return  {string} retourne la valeur de ce que contient la clé du localStorge
   */
  getLocalStorage(key){
    if( typeof value === "object") return JSON.parse(localStorage.getItem(key));
    return localStorage.getItem(key);
  }
   /**
   * envoie les données au serveur
   *
   * @param {string, string, string,string, string} 
   * 
   * @return  {objet} reponse du serveur sous forme d'id
   */
  sendData(prenom, nom, adresse, ville, mail){

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = {
        contact: {
          firstName: prenom,
          lastName: nom,
          address: adresse,
          city: ville,
          email: mail
        },
        products: ['teddy1']
    };

    const init = {
      method : 'POST',
      headers,
      body
    };

    fetch("​http://localhost:3000/api/teddies/order", init)
    .then((response) =>{
      return response.json;
    })
    .then((text) =>{

    })
    .catch((e) =>{

    });
  }
}