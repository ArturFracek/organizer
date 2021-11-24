const { apply } = require("core-js/fn/reflect")

class ValidationError extends Error {
    constructor(msg) {
        if (IS_PRODUCTION) errorsService.notify(msg)
        return super(msg)
    }
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}
await sleep(400)
console.log('dsds')


function sumNumbers (a, b) {
    return new Promise((resolve, reject) => {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            reject(new ValidationError('All params have to be numbers'))
        }
        const sum = a + b
        resolve(sum)
    })
}

sumNumbers(3,NaN)
    .then(sum => console.log(sum))
    .catch(e => console.log(e))

const sum = await sumNumbers(3, 4)

app.use((_, err) => {
    if (err instanceof ValidationError) res.status(422).end(err.message)
})


// callback

request.get('/user/me', (user) => {
    console.log(users)
})

request.get('/user/me', (user) => {
    request.get('/posts/'+user.id, (posts) => {
        console.log(user, posts)
    })
})

// promise

request.get('/user').then((user) => {
    console.log(user)
})

// async/await

const user = await request.get('/user')
console.log(user)

-----------


console.log(a)



function x (b) {
    console.log(b)
}

console.log(c)
