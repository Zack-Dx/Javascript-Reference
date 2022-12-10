function myAxios(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url); // To open the request xhr.open(method,url)
        xhr.responseType = 'json'; // To get the response as JSON
        xhr.setRequestHeader('Content-Type', 'application/json');
        // To get the fetched data and checking the status code.
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };
        xhr.onerror = () => {
            reject('error');
        };
        xhr.send(JSON.stringify(body)); // To send the opened request to the server.
    });
}

const url = 'https://jsonplaceholder.typicode.com/users';
// myAxios('GET', url);
// myAxios('POST', url, {
//     name: 'Zack',
//     job: 'Software Developer',
// });

myAxios('POST', url, {
    name: 'Zack',
    role: 'Junior Developer',
})
    .then((val) => {
        console.log('This is reponse from then block', val);
    })
    .catch((err) => {
        console.log(err);
    });
