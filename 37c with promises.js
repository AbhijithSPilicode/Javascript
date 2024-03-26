let cookies = ['a', 'b', 'c', 'd', 'e'];

function getcookies(cookies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < cookies.length; i++) {
                console.log(cookies[i]);
            }
            resolve();
        }, 1000);
    });
}

function insertcookie(cookies, newcookie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cookies.push(newcookie);
            resolve(cookies);
        }, 2000);
    });
}

insertcookie(cookies, 'f')
    .then(cookies => getcookies(cookies))
    .catch(error => console.error(error));
