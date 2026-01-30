export default class View {
    constructor() {
        this.root = document.getElementsByTagName("body")[0];
        this.createPostForm();
    }


    createPostForm() {
        let div = document.createElement("div");
        let nameInput = document.createElement("input");
        let BirhdayInput = document.createElement("input");
        let submitButton = document.createElement("button");
        submitButton.setAttribute("id", "submitButton");
        let posts = document.createElement("p");
        posts.setAttribute("class", "posts");

        nameInput.setAttribute("id", "name");
        BirhdayInput.setAttribute("id", "birthday");
        submitButton.innerHTML = "Post";


        this.root.appendChild(div);
        div.appendChild(nameInput);
        div.appendChild(BirhdayInput);
        div.appendChild(submitButton);
        div.after(posts);
        div.style.display = "flex";
        div.style.flexDirection = "row";
        div.style.gap = "5px";

        nameInput.placeholder = "Name";
        BirhdayInput.placeholder = "Birhday wish";
        submitButton.innerHTML = "Post";
    }




    addPost(handler) {
        let submitButton = document.getElementById("submitButton");
        submitButton.addEventListener("click", () => {
            const name = document.getElementById("name").value;
            const text = document.getElementById("birthday").value;
            console.log(name, text);
            if (name && text) {
                handler(name, text);
                document.getElementById("name").value = "";
                document.getElementById("birthday").value = "";
            }
        });
    }

    deletePost(handler) {
        let posts = document.querySelectorAll(".posts");
        console.log("posts", posts);
        for (let post of posts) {
            post.addEventListener("click", (e) => {
                console.log("e.target1", post.id);
                if (post && post.id) {
                    console.log("e.target.dataset.id", post.id);
                    handler(post.id);
                }
            });
        }
    }

    render(wishesArray) {

        console.log("wishesArray", document);
        let posts = document.querySelector(".posts");
        posts.innerHTML = "";
        for (let wish of wishesArray) {
            let name = document.createElement("span");
            let text = document.createElement("span");
            name.textContent = `${wish.name}: `;
            text.textContent = `${wish.text}`;
            name.style.fontWeight = "bold";
            posts.append(name, text);
            posts.setAttribute("id", `${wish.id}`);
            posts.append(document.createElement("br"));
        }
    }

}
