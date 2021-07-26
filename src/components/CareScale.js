function handleClicked(careType, scaleValue) {
    var amount = ""
    if (scaleValue === 1) {
        amount = "peu"
    } else if (scaleValue === 2) {
        amount = "moderament"
    } else {
        amount = "beaucoup"
    }
    var typeText = (careType === "light" ? "de lumiere" : "d'arrosage")
    alert("Cette plante requiert " + amount + " " + typeText + ".")
}

function CareScale({careType, scaleValue}) {
    const range = [1, 2, 3]
    const scaleType = (careType === 'light' ? '☀️' : '💧')

    return (
        <div onClick={() => handleClicked(careType, scaleValue)}>
            {range.map(elem =>
                scaleValue >= elem && <span key={elem.toString()}>{ scaleType }</span>)}
        </div>
    )
}

export default CareScale