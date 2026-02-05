export default class usersModel {

    constructor() {
        this.user = null;
        this.users = [];
        this.randomuserApi = "https://randomuser.me/api/";
    }


    async getUser() {
        try {
            let response = await fetch(`${this.randomuserApi}?image,name,city,nat`);
            let data = await response.json();
            this.user = data.results[0];
            return this.user;
        } catch (error) {
            return Error("User not found, try again later");
        }
    }

    async getUsers() {
        try {
            let response = await fetch(`${this.randomuserApi}?results=7&inc=name`);
            let data = await response.json();
            this.users = data.results;
            return this.users;
        } catch (error) {
            return Error("Users not found, try again later");
        }
    }
}


