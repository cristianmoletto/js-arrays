const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)
const reversedTeachers = [];

// METODO 1
// reversedTeachers = teachers.reverse();
// console.log(reversedTeachers)

// METODO 2 (FOR)
// let counter = teachers.length;
// for (i=0; i<teachers.length; i++){
//     counter -=1;
//     let name = teachers.pop()
//     reversedTeachers = teachers.splice(i, 0, name);
// }
// console.log(reversedTeachers)

// METODO 3 (FOR OTTIMIZZATO)
// for (let i = teachers.length - 1; i >= 0; i--){
//     reversedTeachers.push(teachers[i])
// }
// console.log(reversedTeachers)


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// let longNames = [];

// METODO 1
// for (i=0; i<teachers.length; i++){
//     let name = teachers[i]
//     if (name.length >= 5){
//         longNames.push(name)
//     }
// }
// console.log(longNames)

// METODO 2
// let longNames = teachers.filter((teacher) => teacher.length >= 5)
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