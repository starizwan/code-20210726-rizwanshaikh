const fs = require('fs')

let underWeight = normalWeight = overWeight = 
    moderatelyObese = serverelyObese = verySeverelyObese = 0;

const countStats = (category) => {
    switch(category) {
        case "Under Weight":
            underWeight++;
            break;
        case "Normal Weight":
            normalWeight++;
            break;
        case "Over Weight":
            overWeight++;
            break;
        case "Moderately Obese":
            moderatelyObese++;
            break;
        case "Severely Obese":
            serverelyObese++;
            break;
        case "Very Severely Obese":
            verySeverelyObese++;
            break;
        default:
            break;
    }
}

const saveStats = () => {
    output = `Statistics:\n1. Under Weight = ${underWeight}\n2. Normal Weight = ${normalWeight}\
            \n3. Over Weight = ${overWeight} \n4. Moderately Obese = ${moderatelyObese}\
            \n5. Serverely Obese = ${serverelyObese} \n6. Very Severely Obese = ${verySeverelyObese}.`

    fs.writeFile('docs.txt', output, (err) => {
        if (err) return console.log(chalk.bgRed(err));
    })
}

module.exports = {
    countStats,
    saveStats
};