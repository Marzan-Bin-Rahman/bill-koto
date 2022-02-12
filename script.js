// taking over the inputs


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
    const presentUnit = document.getElementById('present-unit');
    presentUnit.innerText = presentReading.value;
    const pastUnit = document.getElementById('past-unit');
    pastUnit.innerText = pastReading.value;
    presentReading.value = "";
    pastReading.value = "";

    const zeroToFifty = 3.75;
    const fiftyoneToSevenFive = 4.19;
    const sevenSixToTwoHundred = 5.72;
    const twoZeroOneToThreeHundred = 6.00;
    const threeZeroOneToFourHundred = 6.34;
    const fourZeroOneToSixHundred = 9.94;
    const sixHundredUps = 11.46;
    let demandCharge = 30;
    const bill = document.getElementById('bill');
    const billText = bill.innerText;
    let billNumber = parseFloat(billText);
    bill.innerText = billNumber;
    if(usedWatt <= 50){
        let price = usedWatt * zeroToFifty;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
        
    }
    else if(usedWatt > 50 && usedWatt <= 75){
        let price = usedWatt * fiftyoneToSevenFive;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 76 && usedWatt <= 200){
        let price = usedWatt * sevenSixToTwoHundred;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 201 && usedWatt <= 300){
        let price = usedWatt * twoZeroOneToThreeHundred;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 301 && usedWatt <= 400){
        let price = usedWatt * threeZeroOneToFourHundred;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 401 && usedWatt <=600){
        let price = usedWatt * fourZeroOneToSixHundred;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else{
        let price = usedWatt * sixHundredUps;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price + demandCharge;
        bill.innerText = parseInt(valueAddedPrice);
    }
})