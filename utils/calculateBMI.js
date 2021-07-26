const fs = require('fs');

const roundOff = (n) => {
    var m = Number((Math.abs(n) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(n);
}

const calculateBMI = (height, weight) => {
    if (height <= 0 || weight <= 0) return 0;
    else if (!(Number.isInteger(height) && Number.isInteger(weight))) return 0;

    height /= 100;
    const bmi = roundOff(weight/(height*height));
    let category, risk;

    switch (true) {
        case bmi <= 18.4:
            category =  "Under Weight";
            risk =  "Malnutrition Risk";
            break;
        case bmi <= 24.9:
            category = "Normal Weight";
            risk =  "Low Risk";
            break;
        case bmi <= 29.9:
            category = "Over Weight";
            risk = "Enhanced Risk";
            break;
        case bmi <= 34.9:
            category = "Moderately Obese";
            risk = "Medium Risk";
            break;
        case bmi <= 39.9:
            category = "Severely Obese";
            risk =  "High Risk";
            break;
        case bmi > 34.9:
            category = "Very Severely Obese";
            risk = "Very High Risk";
    }

    return {
        bmi, 
        category, 
        risk
    }
}

module.exports = calculateBMI;