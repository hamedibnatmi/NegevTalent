async function getUserWithPosts() {
    try {
        let user = await fetch(`https://jsonplaceholder.typicode.com/users`)
        let posts = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)

        let promiseAll = Promise.all([user, posts, comments])
        let [userJson, postsJson, commentsJson] = await promiseAll
        return { userJson, postsJson, commentsJson }
    } catch (error) {
        console.log("error: ", error)
    } finally {
        console.log("Done!")
    }
}

let data = (async () => {
    let data = await getUserWithPosts()
    console.log("data: ", data)
})()

let data2 = await getUserWithPosts()// work only in modules
console.log("data2: ", data2)
