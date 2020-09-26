class User {
    constructor(obj) {
        this.id = obj.id;
        this.userName = obj.userName;
        this.dob = obj.dob;
        this.age = obj.age;
        this.type = obj.type;
        this.locality = obj.locality;
        this.guest = obj.guest;
        this.address = obj.address;
    }
}

export default User;