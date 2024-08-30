tab1=[11,67,16,45,11,23,79,80,39,94];
tab2=[65,93,11,80,39,10,10,22,48,40];

// function tanUniq(tabl1,tabl2){
//     let tabUniq=[];
//     let exeption=[];
//     for(i=0;i<=tabl1.length-1;i++){//copier tabl1
//         valeurRepeter=false;
//         for(d=0;d<=exeption.length-1;d++){
//            if(exeption[d]==i){valeurRepeter=true;break;}
//         }
//         if(!valeurRepeter){
//             tabUniq.push(tabl1[i]);
//             for(j=i+1;j<=tabl1.length-1;j++){
//                 if(tabl1[i]==tabl1[j] ){exeption.push(j);} //les index de la valeur copier si elle exxistr dans d'autre emplacemet tabl1
//             }
//         }
//     }
//     return tabUniq;
// }
//console.log(tanUniq(tab1,tab2));