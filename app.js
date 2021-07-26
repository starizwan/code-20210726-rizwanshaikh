const fs = require('fs');
const chalk = require('chalk')
const stats = require('./utils/stats');
const calculateBMI = require('./utils/calculateBMI');


const fileName = process.argv[2];
if (!fileName) {
    return console.log(chalk.white.inverse("Please enter the file name as command line argument!"));
}

let out = [];

fs.readFile(fileName, (error, dataBuffer) => {
    if (error) return console.log(chalk.bgRed(error));

    const data = dataBuffer.toString();
    const dataJSON = JSON.parse(data);
    const len = Object.keys(dataJSON).length;

    for (let i = 0; i < len; i++) {

        let bmi = calculateBMI(dataJSON[i].HeightCm, dataJSON[i].WeightKg);
        if (bmi) {
            const mergedObjects = Object.assign({}, dataJSON[i], bmi);
            stats.countStats(mergedObjects.category)
            out.push(mergedObjects);
        }
    }
    
    fs.writeFile('output.json', JSON.stringify(out, null, 2), (err) => {
        if (err) return console.log(err);
    })
    console.log(chalk.green.inverse("Success - Check \"output.json\""));

    stats.saveStats();    
})