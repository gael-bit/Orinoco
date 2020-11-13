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
   * @param   {String}  prenom    [prenom description]
   * @param   {String}  nom       [nom description]
   * @param   {String}  adresse   [adresse description]
   * @param   {String}  ville     [ville description]
   * @param   {String}  mail      [mail description]
   * @param   {Array}  products   [products description]
   *
   * @return  {objet} reponse du serveur sous forme d'id
   */
  sendData(prenom, nom, adresse, ville, mail,products){

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        "contact": {
          "firstName": prenom,
          "lastName": nom,
          "address": adresse,
          "city": ville,
          "email": mail
        },
        "products": products
    });

    const init = {
      method : 'POST',
      headers,
      body
    };

    fetch(this.src+"/order", init)
    .then((response) =>{
      return response.json();
    })
    .then((text) =>{
      console.log(text)
    })
    .catch((e) =>{

    });
  }
}