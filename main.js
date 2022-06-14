/* richiesta dati per calcolo biglietto */
// variabile per chiedere i chilometri che vuole percorrere
const userKm = (prompt ('How many kilometers do you want to go?'));
console.log(userKm)

// variabile per chiedere l'età dell'utente, così da capire se possibile applicare lo sconto
const userAge = parseInt(prompt ('According to age there are special discounts, how old are you?'));
console.log(userAge);

/* eseguiamo i calcoli per il costo biglietto */
let priceKm = 0.21;
let NotDiscountedPrice = userKm * priceKm;
console.log('The cost of your ticket is ' + NotDiscountedPrice.toFixed(2));
// controllo che i dati inseriti siano corretti 
if ( (isNaN(userKm, userAge) == true) || (userKm, userAge < 0) ) {
    console.log('Error, number not accepted, reload the page')
    // inserisco gli sconti in base all'età
    } else {
        if (userAge < 18) {
        let DiscountedPrice = NotDiscountedPrice * 20 / 100 
        console.log('The price of your ticket is ' + NotDiscountedPrice.toFixed(2), 
        'but because you are a minor you received a discount, the price of the discounted ticket is ' + DiscountedPrice.toFixed(2));
    } else if (userAge > 65) {
        let DiscountedPrice = NotDiscountedPrice * 40 / 100 
        console.log('The price of your ticket is ' + NotDiscountedPrice.toFixed(2), 
        'but since you are over 65 years old you received a discount, the price of the discounted ticket is ' + DiscountedPrice.toFixed(2));
    }
    }