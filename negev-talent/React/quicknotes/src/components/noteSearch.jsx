export default function NoteSearch({ search }) {


    return (
        <div className="search">
            <div className="noteSearch">
                <input type="search" placeholder="Search.." onChange={(e) => { search(e.target.value) }} />
            </div>
        </div>
    )
}