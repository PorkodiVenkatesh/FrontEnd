class user {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    display() {
        console.log(this._id);
        console.log(this._username);
        console.log(this._password);
    }
}
const u = new user();
u.username = "poko";
u.id = 1;
u.password = "pass123";
u.display();
