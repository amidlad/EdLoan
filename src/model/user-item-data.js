const { default: User } = require("./User");


const USERS = [
    new User({
        id: new Date().getTime(),
        dob: '10/12/1989',
        userName: 'Jack Ryan',
        age: 34,
        type: 2,
        locality: 'Singapore',
        guest: 1,
        address: 'Fifth street, Singapore'
    }),
    new User({
        id: new Date().getTime(),
        dob: '09/02/1994',
        userName: 'Winnie Pooh',
        age: 34,
        type: 2,
        locality: 'Laos',
        guest: 1,
        address: 'Central Avenue, Laos'
    })

]

export default USERS;