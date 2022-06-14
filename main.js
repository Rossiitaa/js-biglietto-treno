/* richiesta dati per calcolo biglietto */
// variabile per chiedere i chilometri che vuole percorrere
const userKm = (prompt ('How many kilometers do you want to go?'));
console.log(userKm)

// variabile per chiedere l'età dell'utente, così da capire se possibile applicare lo sconto
const userAge = parseInt(prompt ('According to age there are special discounts, how old are you?'));
console.log(userAge);

/* eseguiamo i calcoli per il costo biglietto */
let priceKm = 0.21;
let discountedPrice = userKm * priceKm
console.log(discountedPrice)
// controllo che i dati inseriti siano corretti 
if ( (isNaN(userKm, userAge) == true) || (userKm, userAge < 0) ) {
    console.log('Error, number not accepted, reload the page')
} else {
    if (userAge < 18) {
        let 
    }
}