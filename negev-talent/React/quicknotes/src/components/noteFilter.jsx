
export default function NoteFilter({ search, categories }) {

    let categoriesCheckBox = categories.map(item => {
        return (
            <label key={item.category} htmlFor={item.category}>
                <input type="checkbox" name={item.category} onChange={(e) => search({ category: e.target.name, checked: e.target.checked })} />
                {item.category}
            </label>
        )
    })

    return (
        <div className="checkBoxFilter">
            {categoriesCheckBox}
        </div>
    )
}

