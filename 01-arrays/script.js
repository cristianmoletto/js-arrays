const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 0. Per ogni insegnante stampa in console la frase:
// [Nome insegnante] è l'insegnante in posizione [i]
// --> Esecuzione
// for (i = 0; i<teachers.length; i++){
//     console.log(teachers[i])
// }

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
// --> Esecuzione
// const fourthTeacher = teachers[3];
// console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
// --> Esecuzione
// teachers.splice(4, 1, "Patrick")
// console.log(teachers, "-", teachers[4])


// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
// c'era una variabile const che non si può modificare, sostituito con let
// --> Esecuzione
// let lastTeacher = null;
// lastTeacher = teachers.pop()
// console.log(lastTeacher)


// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
// c'era una variabile const che non si può modificare, sostituito con let

// let firstTeacher = null;

// VAR 4.1 
// --> Esecuzione
// const reverse = teachers.reverse()
// firstTeacher = reverse.pop();
// console.log(firstTeacher)

// VAR #4.2
// --> Esecuzione
// firstTeacher = teachers.shift()
// console.log(firstTeacher)


// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
// --> Esecuzione
// teachers.push("Vanessa")
// console.log(teachers)


// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
// --> Esecuzione
// teachers.unshift("Sarah")
// console.log(teachers)


// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// let isFabioPresent = null;

// METODO 1
// for (i = 0; i < teachers.length; i++){
//     if (teachers[i] == "Fabio"){
//         isFabioPresent = true;
//     }
// }
// console.log(isFabioPresent)

// METODO 2
// if (teachers.indexOf("Fabio") >= 0){
//     isFabioPresent = true
// } else { isFabioPresent = false }

// console.log(isFabioPresent)

// METODO 3
// isFabioPresent = teachers.includes("Fabio")
// console.log(isFabioPresent);



// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
// let lewisIndex = null;

// METODO 1
// for (i = 0; i<teachers.length; i++){
//     if (teachers[i] === "Lewis"){
//         lewisIndex = i;
//     }
// }
// console.log(lewisIndex)

// METODO 2
// if (teachers.includes("Lewis") === true){
//     lewisIndex = teachers.indexOf("Lewis")
// } else { lewisIndex = false }

// console.log(lewisIndex)



// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
// let teachersString = null;
// teachersString = teachers.join(",")
// console.log(teachersString)


// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
// let isTeachersEmpty = null;
// if (teachers.length > 0){
//     isTeachersEmpty = false
// } else {true}
// console.log(isTeachersEmpty)

