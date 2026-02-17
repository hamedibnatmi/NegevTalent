import { Button, Input } from "@mantine/core";
const Profile = () => {
    return (
        <div className="profile">
            <div className="title">
                Profile
            </div>
            <form action="">
                <label>User Name</label>
                <Input type="text" />
                <Button type="submit">Save</Button>
            </form>
        </div>
    )
}


export default Profile;