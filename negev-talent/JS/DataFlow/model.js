class Model {
    constructor() {
        this.wishesArray = [];
    }
    addPost(name, text) {
        this.wishesArray.push({ id: crypto.randomUUID(), name, text });
        console.log("this.wishesArray", this.wishesArray);
    }
    deletePost(id) {
        this.wishesArray = this.wishesArray.filter(wish => wish.id !== id);
    }
    getWishes() {
        return [...this.wishesArray];
    }
}

export default Model;
