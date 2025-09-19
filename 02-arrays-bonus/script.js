const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)
let reversedTeachers = null;

// METODO 1
// reversedTeachers = teachers.reverse();
// console.log(reversedTeachers)

// METODO 2 (FOR)

// let counter = teachers.length;
// for (i=0; i<teachers.length; i++){
//     console.log(teachers[i])
//     counter -=1;
//     console.log(counter)
//     teachers.splice(teachers[i],i,teachers.length)
// }
// console.log(teachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// let longNames = [];

// for (i=0; i<teachers.length; i++){
//     let name = teachers[i]
//     if (name.length >= 5){
//         longNames.push(name)
//     }
// }
// console.log(longNames)


// 3. Rimuovi 'Ed' dall'array teachers (fatelo con un metodo e poi provate a farlo anche con il ciclo for)

// METODO 1
// let position = teachers.indexOf("Ed")
// teachers.splice(position, 1);
// console.log(teachers)

// METODO 2 FOR
// for (i=0; i<teachers.length; i++){
//     if (teachers[i]==="Ed"){
//         teachers.splice(i, 1);
//     }
// }
// console.log(teachers)