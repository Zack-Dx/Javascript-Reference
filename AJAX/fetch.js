const url = 'https://jsonplaceholder.typicode.com/users';
function myAxios(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json',
    };
    return fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body), // To pass the body (Body is receieved in Object Format)
    }).then((res) => {
        // return res.text(); //To get response in text format
        return res.json(); // To get response in Json
    });
}
myAxios('POST', url, { name: 'Zack', role: 'Junior Developer' })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
