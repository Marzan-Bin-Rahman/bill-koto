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
        let price = usedWatt * zeroToFifty + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
        
    }
    else if(usedWatt > 50 && usedWatt <= 75){
        let price = usedWatt * fiftyoneToSevenFive + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 76 && usedWatt <= 200){
        let firstSevenFive = 75 * fiftyoneToSevenFive;
        let thisUnitWatts = usedWatt - 75; 
        let thisUnitWattsPrice = thisUnitWatts * sevenSixToTwoHundred;
        let price = thisUnitWattsPrice + firstSevenFive + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 201 && usedWatt <= 300){
        let firstSevenFive = 75 * fiftyoneToSevenFive;
        let nextOneFiveZero = 125 * sevenSixToTwoHundred;
        let thisUnitWatts = usedWatt - 200;
        let thisUnitWattsPrice = thisUnitWatts * twoZeroOneToThreeHundred;
        let price = firstSevenFive + nextOneFiveZero + thisUnitWattsPrice + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 301 && usedWatt <= 400){
        let firstSevenFive = 75 * fiftyoneToSevenFive;
        let nextOneFiveZero = 125 * sevenSixToTwoHundred;
        let nextHundred = 100 * twoZeroOneToThreeHundred;
        let thisUnitWatts = usedWatt - 300;
        let thisUnitWattsPrice = thisUnitWatts * threeZeroOneToFourHundred;
        let price = firstSevenFive + nextOneFiveZero + nextHundred + thisUnitWattsPrice + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else if(usedWatt >= 401 && usedWatt <=600){
        let firstSevenFive = 75 * fiftyoneToSevenFive;
        let nextOneFiveZero = 125 * sevenSixToTwoHundred;
        let nextHundred = 100 * twoZeroOneToThreeHundred;
        let nexterHundred = 100 * threeZeroOneToFourHundred;
        let thisUnitWatts = usedWatt - 400;
        let thisUnitWattsPrice = thisUnitWatts * fourZeroOneToSixHundred;
        let price = firstSevenFive + nextOneFiveZero + nextHundred + nexterHundred + thisUnitWattsPrice + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
    else{
        let firstSevenFive = 75 * fiftyoneToSevenFive;
        let nextOneFiveZero = 125 * sevenSixToTwoHundred;
        let nextHundred = 100 * twoZeroOneToThreeHundred;
        let nexterHundred = 100 * threeZeroOneToFourHundred;
        let nexterTwoHundred = 200 * fourZeroOneToSixHundred;
        let thisUnitWatts = usedWatt - 600;
        let thisUnitWattsPrice = thisUnitWatts * sixHundredUps;
        let price = firstSevenFive + nextOneFiveZero + nextHundred + nexterHundred + nexterTwoHundred + thisUnitWattsPrice + demandCharge;
        const vat = price * 5/100;
        let valueAddedPrice = vat + price;
        bill.innerText = parseInt(valueAddedPrice);
    }
})