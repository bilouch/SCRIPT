/*____________________ Exercice 1 __________________________*/
let tab= [11,5,12,56,4,88,25,90,101,71];
function pairTab(tab){
    let tabPair=[];
    for(i=0;i<=tab.length-1;i++){
        if(tab[i]%2==0){  tabPair.push(tab[i]); }
        // tab[i]%2==0 ? tabPair.push(tab[i]):tabPair;
    }
    return tabPair;
}
console.log("____ Exercice 1: le tableaux des nombre paire ____\n Le tableau dorrigine",tab)
console.log("Le tableau des nombre paire ",pairTab(tab));
/*_____________________ Exercice 2______________________________*/
class Perssone {
    constructor(nome,prenome,age,adresseEmail){
    this.nome=nome;
    this.prenome=prenome;
    this.age=age;
    this.adresseEmail=adresseEmail;
    }  
}

let tabPersonne=[(new Perssone("bila","mok",40,"bilamok")),(new Perssone("racha","code",27,"rachacode")),
    (new Perssone("samira","agro",38,"samiraagro")),(new Perssone("nawel","fr",30,"nawelFr"))];

function personnePlus30(tab){
    let tabPerssonePlus30=[];
    for(i=0;i<=tab.length-1;i++){ 
      if(tab[i]["age"]>30) {tabPerssonePlus30.push(tab[i]);  }
    }
    return tabPerssonePlus30;
}
console.log("____ Exercice 2:Les perssone de plus de 30 \n___",personnePlus30(tabPersonne));
/*__________________________ Exercice 3 _____________________________*/
let pile=[];
function empiler(pil,...val){
    for (let i=0;i<val.length;i++){
        pil.push(val[i]);
    }
return pil;
}
function depiler(pil){
   return pil.pop();
}
console.log("____ Exercice 3:la pile ___\n");
empiler(pile,1,2,3,4,5);
console.log(pile);
val=depiler(pile);
console.log(pile);//pourquoi????


/*__________________________ Exercice 4 _____________________________*/
let liste=[];
function enfiler(liste,...queue){
    for (let i=0;i<queue.length;i++){
        liste.push(queue[i]);
    }
return liste;
}
function defiler(liste){
    return liste.shift();
}
console.log("____ Exercice 4:la file ___\n");
console.log(enfiler(liste,1,2,3,4,5));
tete=defiler(liste);
console.log(liste);



/*__________________________ Exercice 5 _____________________________*/
str="Répétons-le : quelle que soit la manière dont la fonction est créée, une fonction est une valeur. ";
function SuprimeVoyelle(str){
    let voyelle=["a","e","i","o","u","y","é","è","à"];
    let strSanVoyelle="";
    for(i=0;i<=str.length-1;i++){
        consonne=true;
        for(j=0;j<=voyelle.length-1;j++){
            
            if   ((str[i]==voyelle[j]) || (str[i]==voyelle[j].toLowerCase)) {
                consonne=false;break
            }
        }
        if(consonne){strSanVoyelle += str[i];}
           
    }
    return strSanVoyelle;            
    }


console.log("____ Exercice 5:suprimé les voyelle ___\n","La chaine avant la supretion\n",str);
console.log("La chaine apres la supretion\n",SuprimeVoyelle(str));
/*__________________________ Exercice 5 _____________________________*/
let tab1=[11,67,16,45,11,23,79,80,39,94];
let tab2=[65,93,11,80,39,10,10,22,48,40];

function PositionVal(tab,pos,val){//tableaux des position ou se trouve la valeur val dans le tableaux tab apartire de la positon pos
    let posVal=[]
    for(let i=pos;i<=tab.length-1;i++){
      if(tab[i]==val){posVal.push(i)}
    }
    // let i=pos;
    // let idexVal=tab.indexOf(val,pos);
    // while(i<tab.length && idexVal !== -1){
    //     posVal.push(idexVal);
    //     i=idexVal+1;
    //     idexVal=tab.indexOf(val,i);
    // }
    return posVal;
}
function copierTabValUniq(tab){//copier un tableux dans un neuvau san les valeur repeter 
    let newTab=[];
    for(let i=0;i<tab.length;i++){
        if(tab[i]!= null){//lapremier fois quon rencontre cette valeur
            newTab.push(tab[i]);
        }
        toutLesPosVal=PositionVal(tab,i+1,tab[i]);
        if(toutLesPosVal.length>0){
            for(d=0;d<=toutLesPosVal.length-1;d++){
                tab[toutLesPosVal[d]]=null;
            }
        }
    }
    return newTab;
}
function fusionTabSanRept(tabl1,tabl2){
    return copierTabValUniq([...tabl1,...tabl2]);
}
console.log("____ Exercice 6:fusionner deux tableaux  ___\n","les tableaux d'originne");
console.log(tab1,tab2);
console.log("le resultat de la fusion",fusionTabSanRept(tab1,tab2));
//console.log(tab1);//pourquoi???
