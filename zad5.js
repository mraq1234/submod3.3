const strangeConst = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = strangeConst;
console.log(`First name: ${firstName}, last name: ${lastName}`);