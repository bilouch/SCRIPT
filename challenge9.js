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
console.log(plusLongMot(tabMot));
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
    tabPage=tablObj.map(function ( ))

}             
            
]