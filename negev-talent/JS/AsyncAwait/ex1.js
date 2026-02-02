// Given Promise-based code:
function getUserById(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(user => {
            console.log(`Found user: ${user.name} (${user.email})`);
            return user;
        })
        .catch(error => {
            console.error('Error fetching user:', error.message);
            return null;
        });
}

// getUserById(1).then((res) => {
//     console.log("res: ", res)
// }).catch(Error("Fetch API failed"))



let data
async function getUserById2(userId) {
    try {
        data = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        console.log("data", await data.json())
        return data
    } catch (error) {
        console.log("Catch Error: ", error);
    } finally {
        console.log("Done!")
    }
}

// await can work outside of async function only in modules
let userId = 1
const data2 = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
console.log("data2: ", await data2.json())
