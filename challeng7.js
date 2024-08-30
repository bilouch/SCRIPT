let chaine="There is no war in Ba Sing Se";
// 

function nbMot(ch){
    let cpt =0;
    for(let i=0; i<=ch.length-1; i++){
        if(ch[i]!== " " && (ch[i+1]==" " || i+1 == ch.length) ){
            cpt++;
        }
    }
    return(cpt); 
}
// 
console.log("nombre de Mot dans la chaine est :" + nbMot(chaine));

/*________________________________________________________________________________________________*/

let countries= ['China','Japan','South Korea','Vietnam','Malaysia'];
let capital= ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];

for(let i=0; i<= countries.length-1;i++){
        console.log("Your country : "+countries[i]+ "has the capital named :"+ capital[i]);
    }
/*________________________________________________________________________________________________*/

// var  randomizer=1;
let randomizer = prompt("tapez un chifre entre 0 et 3");
switch( randomizer){
    case "0": 
    console.log("A certain victory");
    break;
    case "1": 
    console.log("not so certain victory");
    break;
    case "2": 
    console.log("an uneasy victory");
    break;
    default: 
    console.log("Your fate is unclear, ô chosen undead");
    break;
}
/*________________________________________________________________________________________________*/

function checkSeason(){
    let valeurFaus= false;
    while(!valeurFaus){
        const newLocal = prompt(`taper le numero du mois \n1 pour Janvier\n2 pour Fèvrier\n3 pour Mars\n4 pour Avril\n5 pour Mais\n6 pour Juin\n7 pour Juillet\n8 pour Aout\n9 pour Septembre\n10 pour Octobre\n11 pour Novembre\n12 pour Décembre `);
        valeurFaus=true;
        switch( newLocal){
            case "12" :
            case "1" :
            case "2" :         
              console.log("On est en hiver");
              break;
            case "3" :
            case "4" : 
            case "5" :
              console.log("On est en Printemps");
              break;
            case "6" :
            case "7" : 
            case "8" : 
              console.log("On est en Eté");
              break;
            case "9" :
            case "10" : 
            case "11" :
              console.log("On est en Automne");
              break;
            default :
              valeurFaus=false;
              alert("la valeur que vous avaz rentrer est Fausse ..  ");
}
    }
}