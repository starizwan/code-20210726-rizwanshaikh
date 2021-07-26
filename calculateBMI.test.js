const calculateBMI = require('./utils/calculateBMI')

test('Calculates BMI, Risk & Category', () => {
    expect(calculateBMI(180, 77)).toEqual({
        "bmi": 23.77,
        "category": "Normal Weight",    
        "risk": "Low Risk"
    })
    expect(calculateBMI(161, 85)).toEqual({
        "bmi": 32.79,
        "category": "Moderately Obese",
        "risk": "Medium Risk"
    })
    expect(calculateBMI(167, 82)).toEqual({
        "bmi": 29.40,
        "category": "Over Weight",
        "risk": "Enhanced Risk"
    })
})

test('NaN Case', () => {
    expect(calculateBMI(0, 0)).toBe(0)
    expect(calculateBMI(0, 85)).toBe(0)
})

test('Wrong Data Type', () => {
    expect(calculateBMI("a", "b")).toBe(0)
    expect(calculateBMI("a", 85)).toBe(0)
})

test('Negatives', () => {
    expect(calculateBMI(76, -65)).toBe(0)
    expect(calculateBMI(-78, 85)).toBe(0)
    expect(calculateBMI(-78, -85)).toBe(0)
})