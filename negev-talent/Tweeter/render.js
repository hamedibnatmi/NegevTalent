export default class View {
    constructor() {
        console.log("document", document);
        this.root = document.body;
    }


    createTweeterTitle(name) {
        const header = document.createElement("header");
        const title = document.createElement("h1");
        title.setAttribute("class", "title");
        title.textContent = name;
        header.appendChild(title);
        document.head.after(header);
    }

    createAddPostSection() {
        const addPostDiv = document.createElement("div");
        addPostDiv.setAttribute("class", "addPostDiv");
        const input = document.createElement("input");
        input.setAttribute("class", "addPostInput");
        input.setAttribute("placeholder", "What is on your mind?");
        const button = document.createElement("button");
        button.setAttribute("class", "addPostButton");
        button.textContent = "Twit";
        addPostDiv.appendChild(input);
        addPostDiv.appendChild(button);

        document.body.appendChild(addPostDiv);
        button.addEventListener("click", () => {
            this.root.dispatchEvent(new CustomEvent("addPost", { detail: input.value }));
            console.log("add post", input.value);
            input.value = "";
        });
        return addPostDiv;
    }

    postText(post) {
        const postBox = document.createElement("div");
        postBox.setAttribute("class", "postBox");
        const p = document.createElement("p");
        p.setAttribute("class", "post");
        p.textContent = post.text;
        postBox.appendChild(p);
        return postBox;
    }

    postCommentsList(post) {
        let commentsList = document.createElement("ul");
        commentsList.setAttribute("class", "commentsList");
        post.comments.forEach(comment => {
            let liComments = document.createElement("li");
            liComments.setAttribute("class", "comment");
            liComments.innerHTML = `<span id=${comment.id} class="deleteCommentButton">X</span>${comment.text}`;
            commentsList.appendChild(liComments);
            let deleteBtn = liComments.querySelector(".deleteCommentButton");
            if (deleteBtn) {
                deleteBtn.addEventListener("click", () => {
                    this.root.dispatchEvent(new CustomEvent("delete-comment-event", {
                        detail: {
                            postId: post.id,
                            commentId: deleteBtn.id
                        }
                    }))
                })
            }
        });
        return commentsList;
    }

    createAddCommentSection(postId) {
        const addCommentDiv = document.createElement("div");
        const input = document.createElement("input");
        input.setAttribute("class", "addCommentInput");
        const button = document.createElement("button");
        button.setAttribute("class", "addCommentButton");
        button.textContent = "Comment";
        addCommentDiv.appendChild(input);
        addCommentDiv.appendChild(button);
        button.addEventListener("click", () => {
            this.root.dispatchEvent(new CustomEvent("add-comment-event", {
                detail: {
                    text: input.value,
                    postId: postId
                }
            }))
        })
        return addCommentDiv;
    }

    createDeleteButton(postId) {
        const button = document.createElement("button");
        button.setAttribute("class", "deleteButton");
        button.textContent = "Delete Post";
        button.addEventListener("click", () => {
            this.root.dispatchEvent(new CustomEvent("delete-post-button", {
                detail: {
                    postId
                }
            }))
        })
        return button;
    }

    postBoxWithComments(post) {
        const postBox = this.postText(post);
        const commentsList = this.postCommentsList(post);
        const addCommentSection = this.createAddCommentSection(post.id);
        const deleteButton = this.createDeleteButton(post.id);
        postBox.appendChild(commentsList);
        postBox.appendChild(addCommentSection);
        postBox.appendChild(deleteButton);
        return postBox;
    }

    renderPosts(posts) {
        if (document.querySelector(".postsContainer")) {
            document.querySelector(".postsContainer").remove();
        }
        const postsContainer = document.createElement("div");
        postsContainer.setAttribute("class", "postsContainer");
        posts.forEach(post => {
            const postBox = this.postBoxWithComments(post);
            postsContainer.appendChild(postBox);
        });
        document.body.appendChild(postsContainer);
        return postsContainer;
    }


}