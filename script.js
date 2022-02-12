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
})