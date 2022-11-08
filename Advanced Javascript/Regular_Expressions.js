// To change throughtout the string because replace does it only for the first one.

// Use regerx.com for more reference as this is a huge topic to explore.

const regex = /very/g // g represents global here.
const text = "He is a very good boy. She is very good girl. She is very hardworking."
console.log(text.replace(regex, 'not a'))