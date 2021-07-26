function Categories({ categories, category, setCategory }) {
    return (
        <div>
            <select
                onChange={event => setCategory(event.target.value)}
                value={category}
            >
                <option value="" key="">Aucune</option>
                {categories.map((category) => (
                    <option value={category} key={category}>{category}</option>
                ))}
            </select>
            <button onClick={() => setCategory("")}>Réiniatiliser</button>
        </div>
    )
}

export default Categories