// taking over the inputs

/* function price(unit){
    const zeroToFifty = 3.75;
    const fiftyoneToSevenFive = 4.19;
    const sevenSixToTwoHundred = 5.72;
    const twoZeroOneToThreeHundred = 6.00;
    const threeZeroOneToFourHundred = 6.34;
    const fourZeroOneToSixHundred = 9.94;
    const sixHundredUps = 11.46;
    const vat = 5/100;
    if(unit <= 50){
        let price = unit * zeroToFifty;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
        
    }
    else if(unit > 50 && unit <= 75){
        let price = unit * fiftyoneToSevenFive;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
    }
    else if(unit >= 76 && unit <= 200){
        let price = unit * sevenSixToTwoHundred;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
    }
    else if(unit >= 201 && unit <= 300){
        let price = unit * twoZeroOneToThreeHundred;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
    }
    else if(unit >= 301 && unit <= 400){
        let price = unit * threeZeroOneToFourHundred;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
    }
    else if(unit >= 401 && unit <=600){
        let price = unit * fourZeroOneToSixHundred;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
    usedWatt
    else{
        let price = unit * sixHundredUps;
        let valueAddedPrice = vat + price;
        return valueAddedPrice;
    }
}
 */

document.getElementById('button').addEventListener('click', function(){
    const presentReading = document.getElementById('present-reading');
    const presentReadingText = presentReading.value;
    const presentReadingWatt = parseFloat(presentReadingText);
    const pastReading = document.getElementById('past-reading');
    const pastReadingText = pastReading.value;
    const pastReadingWatt = parseFloat(pastReadingText);
    const usedWatt = presentReadingWatt - pastReadingWatt;
    const unit = document.getElementById('unit');
    unit.innerText = usedWatt;
    // price(unit);

    const zeroToFifty = 3.75;
    const fiftyoneToSevenFive = 4.19;
    const sevenSixToTwoHundred = 5.72;
    const twoZeroOneToThreeHundred = 6.00;
    const threeZeroOneToFourHundred = 6.34;
    const fourZeroOneToSixHundred = 9.94;
    const sixHundredUps = 11.46;
    const vat = 0;
    const bill = document.getElementById('bill');
    const billText = bill.innerText;
    let billNumber = parseFloat(billText);
    bill.innerText = billNumber;
    if(usedWatt <= 50){
        let price = usedWatt * zeroToFifty;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
        
    }
    else if(usedWatt > 50 && usedWatt <= 75){
        let price = usedWatt * fiftyoneToSevenFive;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 76 && usedWatt <= 200){
        let price = usedWatt * sevenSixToTwoHundred;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 201 && usedWatt <= 300){
        let price = usedWatt * twoZeroOneToThreeHundred;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 301 && usedWatt <= 400){
        let price = usedWatt * threeZeroOneToFourHundred;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 401 && usedWatt <=600){
        let price = usedWatt * fourZeroOneToSixHundred;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else{
        let price = usedWatt * sixHundredUps;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
})