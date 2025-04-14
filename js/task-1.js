function makeTransaction(quantity, pricePerDroid, customerCredits) {
    const totalPrice = quantity * pricePerDroid;
    if (totalPrice > customerCredits) {
        console.log("Insufficient funds!");
        return;
    } else {
        console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
        return ;
    }
}