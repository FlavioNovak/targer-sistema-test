import data from './monthly-data.json' assert { type: 'json'}

function findLowestAmount() {
    console.log('Exercise: 3.A');
    return data.reduce((previous, current) => previous.valor < current.valor ? previous : current);
}

function findGreatestAmount() {
    console.log('Exercise: 3.B');
    return data.reduce((previous, current) => previous.valor > current.valor ? previous : current);
}

function findAverageDays() {
    console.log('Exercise: 3.C');
    const sanitizedDays = data.filter(day => day.valor > 0);
    const totalDays = sanitizedDays.length;
    const totalAmount = data.reduce((accumulator, day) => accumulator + day.valor, 0);
    const avarage = (totalAmount / totalDays).toFixed(2);
    console.log(avarage, 'AVERAGE');
    return data.filter(day => day.valor >= avarage);
}

console.table(findLowestAmount())
console.table(findGreatestAmount())
console.table(findAverageDays())
