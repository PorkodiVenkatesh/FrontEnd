class user {
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }


    private _password: string;
    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
    
    display(){
        console.log(this._id)
        console.log (this._username)
        console.log (this._password)
    }
}

const u = new user();

u.username = "poko"
u.id = 1
u.password = "pass123"

u.display()
