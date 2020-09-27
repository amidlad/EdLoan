import User from './User';


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
    }),
    new User({
        id: new Date().getTime(),
        dob: '04/10/1987',
        userName: 'Ryan Reynolds',
        age: 42,
        type: 1,
        locality: 'Seol',
        guest: 2,
        address: 'Grand Avenue, Seol'
    }),
    new User({
        id: new Date().getTime(),
        dob: '03/01/1989',
        userName: 'Bruce Banner',
        age: 23,
        type: 2,
        locality: 'New York',
        guest: 1,
        address: 'Times Square, New York'
    }),
    new User({
        id: new Date().getTime(),
        dob: '29/06/1987',
        userName: 'Dr Strange',
        age: 23,
        type: 2,
        locality: 'Shanghai',
        guest: 1,
        address: 'Buddha check, Shanghai'
    })

]

export default USERS;