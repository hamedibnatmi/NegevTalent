import { Button, Input } from "@mantine/core";
import { useTweetsContextContext } from "../contexts/tweetsContext";
import { useState } from "react";
const Profile = () => {
    const { userNameState, userNameDispatch } = useTweetsContextContext();
    const [userNameInput, setUserNameInput] = useState(userNameState.userName)


    const handleSubmit = (e) => {
        e.preventDefault();
        userNameDispatch({
            type: "Set-UserName-Input",
            payload: userNameInput
        })
    }
    return (
        <div className="profile">
            <div className="title">
                Profile
            </div>
            <form action="" onSubmit={handleSubmit}>
                <label>User Name</label>
                <Input type="text" value={userNameInput} onChange={(e) => setUserNameInput(e.target.value)} />
                <Button type="submit">Save</Button>
            </form>
        </div>
    )
}


export default Profile;