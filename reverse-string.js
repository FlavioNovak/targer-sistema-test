console.log('Exercise: 5');

function reverseString(subject) {
    let newWord = [];
    for (let character = 1; character <= subject.length; character++) {
        newWord.push(subject[subject.length - character]);
    }
    return newWord.toString().replaceAll(',','');
}
console.log(reverseString('Flávio do Peneu'));