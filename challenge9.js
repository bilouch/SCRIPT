/*____________________ Exercice 1 __________________________*/
let tab=[1,2,3,4,5,6,7,8,9,10];
function moyennePaire(tabl){
    let tabPaire=(tabl.filter(function(elem){ return elem%2===0;}));
    console.log("Le tableux des nombre paire est\n",tabPaire);
    return tabPaire.reduce(function(acc,current,index,array){
      //  console.log(array.length,`accumulateur ${acc}`,array);
      return  acc+current;
      // return acc/array.length;  
    })/tabPaire.length;
}
console.log("________________ Exercice 1 ________________");
console.log("Le tableux complet\n",tab)
console.log("Leur moyenne est des ",moyennePaire(tab));


/*____________________ Exercice 2 __________________________*/
let tabMot=["première","deuxième","troisième","quatrième","cinqième","sixième","septième"];
function plusLongMot(tabl){
    return tabl.reduce(function(accum,current,index,array){
       if(accum.length<current.length){accum=current}
       return accum;
    });
}
console.log("________________ Exercice 2 ________________");
console.log("le tableaux des mot est",tabMot);
console.log("le mot le plus long est: ",plusLongMot(tabMot));

/*____________________ Exercice 3 __________________________*/
class livre{
    constructor(titre,auteur,nbPage){
        this.titre=titre;
        this.auteur=auteur;
        this.nbPage=nbPage;
    }
}
tabObjLivre=[(new livre("Un été dans le Sahara","Anne-Marie Christin",384)),(new livre("La Terre et le Sang","Mouloud Feraoun",250)),
             (new livre("La traversée","Mouloud Mammeri",195)),(new livre("L'opium et le bâton","Mouloud Mammeri",320))];
function moyennePageLivre(tablObj){
    let tabPage=tablObj.map(function (elem,inde, array ){
    //    console.log(elem.nbPage)   ;   
        return elem.nbPage;
    });
    let moynePage=tabPage.reduce(function(accumulateur,current,index,arry){
        return accumulateur+current;
    })/tabPage.length;
    return moynePage;
}
console.log("________________ Exercice 3 ________________");
console.log("Le tableux d'objet complet\n",tabObjLivre)
console.log("La moyenne des page est des ",moyennePageLivre(tabObjLivre));
console.log();

/*____________________ Exercice 4 __________________________*/

let tabString=["mama","papa","maman a la maison",'papa conduit la voiture',"voiture voiture"];

function freqMotDanTab(tab,mot){
//    tabMotPhrase=phrase.split(" ");
   let frqMot=tab.reduce((accum , current,index, array) => {
       if (mot == current) { accum++; }
       return accum;
   },0);
   return {[mot]:frqMot,};
}

function freqMot(tabStr){
     let tabMot=(tabStr.map(function(elem,index,array){//
        return elem.split(" ");// genere un tableux multidimensienelle 
     }));
     tabMot=tabMot.flat();// aplatire le tableux tabMot
     //console.log("le tableaux des mots",tabMot);
     obj={};//console.log(typeof (obj));
     for(let i= 0;i<tabMot.length;i++){
        // console.log("tabl des clés objet ",Object.keys(obj));
        // console.log("le mot ",tabMot[i]);
        // console.log( !Object.keys(obj).includes(tabMot[i]));
        if (!Object.keys(obj).includes(tabMot[i])){
            // console.log(Object.values(freqMotDanTab(tabMot,tabMot[i])));
           obj[tabMot[i]]=Object.values(freqMotDanTab(tabMot,tabMot[i]))[0];
        }
     }
     return obj;
}

// console.log(freqMotDanTab(tabString,"mama"));
console.log("________________ Exercice 4 ________________");
console.log("Le tableux de String \n",tabString);
console.log("L'objet des frequences des mots est ",freqMot(tabString));
console.log();
/*____________________ Exercice 5 __________________________*/
class Perssone {
    constructor(nom,age,ville){
        this.nom=nom;
        this.age=age;
        this.ville=ville;
    }  
}
tabObjPerssonne=[(new Perssone("Alice",30,"New York" )),(new Perssone("Bob",40,"Chicago" )),(new Perssone("Charlie",50,"New York" ))];
tabVille=tabObjPerssonne.map(function(elem,index,array){
    return elem.ville;
});
// console.log(tabVille);console.log(freqMot(tabVille));

function freqPhrase(tabStr){//presque la mm fonction freqMot() de l'exo4
    obj={};
    for(let i= 0;i<tabStr.length;i++){
       if (!Object.keys(obj).includes(tabStr[i])){
          obj[tabStr[i]]=Object.values(freqMotDanTab(tabStr,tabStr[i]))[0];//apple a la fonction freqMotDanTab() de l'exo4 
       }
    }
    return obj;
}
console.log("________________ Exercice 5 ________________");
console.log("Le tableux ds Objet est \n",tabObjPerssonne);
console.log("L'objet des frequences des Villes est",freqPhrase(tabVille));
