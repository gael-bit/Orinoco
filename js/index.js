var orinoco = {
  dataManager : new DataManager("http://localhost:3000/api/teddies")
};

function initPage(page){
  switch(page){
    case "home" : 
      new Home();
      break;
  }
}