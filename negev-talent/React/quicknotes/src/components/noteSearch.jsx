export default function NoteSearch({ search, categories }) {

    const categoriesCheckBoxHandler = (e) => {
        search({ category: e.target.name, checked: e.target.checked })
    }

    let categoriesCheckBox = categories.map(item => {
        return (
            <label key={item.category} htmlFor={item.category}>
                <input type="checkbox" name={item.category} onChange={categoriesCheckBoxHandler} />
                {item.category}
            </label>
        )
    })
    return (
        <div className="search">
            <div className="noteSearch">
                <input type="search" placeholder="Search.." onChange={(e) => { search({ text: e.target.value }) }} />
            </div>
            <div className="checkBoxFilter">
                {categoriesCheckBox}
            </div>
        </div>
    )
}