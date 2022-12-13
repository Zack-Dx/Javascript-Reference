// LOCALSTORAGE can only store strings.
// localStorage.setItem('channel', 'mernstack');
// localStorage.setItem('os', 'android'); // To set item
// const result = localStorage.getItem('channel'); // To get item
// console.log(result);
// localStorage.removeItem('os'); // To remove one
// localStorage.clear(); // To clear all

// To Store Objects in Local Storage

// const userSettings = {
//     theme: 'dark',
//     font: 'light',
//     score: 100,
// };

// Stringify First
// const settingString = JSON.stringify(userSettings);
// console.log(settingString);
// localStorage.setItem('userSettings', settingString);

// To Get the Stored Object (WE need to Parse the JSON)
// const getSetting = JSON.parse(localStorage.getItem('userSettings'));
// console.log(getSetting);

// Uses : Cart, User Settings ,Filteration, Form Data, Score

// THEME CHANGE PROJECT
const themeSelector = document.querySelector('#themeSelector');
themeSelector.addEventListener('change', (e) => {
    localStorage.setItem('theme', e.target.value);
    changeTheme(e.target.value);
});
function changeTheme(theme) {
    theme === 'dark'
        ? (document.body.style.backgroundColor = 'black')
        : theme === 'light'
        ? (document.body.style.backgroundColor = 'pink')
        : (document.body.style.backgroundColor = 'white');
}

// Storage Event
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        changeTheme(e.newValue);
        themeSelector.value = e.newValue;
    }
});
