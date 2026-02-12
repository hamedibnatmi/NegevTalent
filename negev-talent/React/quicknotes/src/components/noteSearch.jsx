export default function NoteSearch({ search }) {

    return (
        <div className="noteSearch">
            <input type="search" placeholder="Search.." onChange={(e) => { search({ text: e.target.value }) }} />
        </div>
    )
}