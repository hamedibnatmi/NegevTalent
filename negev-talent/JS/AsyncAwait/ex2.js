async function getUserWithPosts(userId) {
    try {
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const userJson = await user.json()
        console.log("user: ", userJson)
        console.log("###########")
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        const postsJson = await posts.json()
        console.log("posts: ", postsJson)
        return { userJson, postsJson }
    } catch (error) {
        console.log("error: ", error)
    }
}
let user2
getUserWithPosts(1).then(({ userJson, postsJson }) => {
    console.log("userJson3: ", userJson)
    user2 = userJson
    console.log("###########")
    console.log("postsJson3: ", postsJson)
})
console.log("user222222: ", user2)

