export default class View {
    constructor() {
        console.log("document", document);
    }


    createTweeterTitle(name) {
        console.log("createTweeterTitle");
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

    postCommentsList(comments) {
        let commentsList = document.createElement("ul");
        commentsList.setAttribute("class", "commentsList");
        comments.forEach(comment => {
            let comments = document.createElement("li");
            comments.setAttribute("class", "comment");
            comments.innerHTML = `<span class="deleteCommentButton">X</span>${comment.text}`;
            commentsList.appendChild(comments);
        });
        return commentsList;
    }

    createAddCommentSection() {
        const addCommentDiv = document.createElement("div");
        const input = document.createElement("input");
        input.setAttribute("class", "addCommentInput");
        const button = document.createElement("button");
        button.setAttribute("class", "addCommentButton");
        button.textContent = "Comment";
        addCommentDiv.appendChild(input);
        addCommentDiv.appendChild(button);
        return addCommentDiv;
    }

    createDeleteButton() {
        const button = document.createElement("button");
        button.setAttribute("class", "deleteButton");
        button.textContent = "Delete Post";
        return button;
    }

    postBoxWithComments(post) {
        const postBox = this.postText(post);
        const commentsList = this.postCommentsList(post.comments);
        const addCommentSection = this.createAddCommentSection();
        const deleteButton = this.createDeleteButton();
        postBox.appendChild(commentsList);
        postBox.appendChild(addCommentSection);
        postBox.appendChild(deleteButton);
        return postBox;
    }

    renderPosts(posts) {
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