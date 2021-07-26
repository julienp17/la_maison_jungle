import { plantList } from '../config/plantList'
import { useState } from 'react'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'

function ShoppingList({cart, setCart}) {
    const [category, setCategory] = useState("")
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            setCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            setCart([...cart, { name, price, amount: 1 }])
        }
    }

    function renderPlants(plantList) {
        return (
            plantList.map(({ id, cover, name, water, light, price }) => (
                <div key={id}>
                    <PlantItem
                        id={id}
                        cover={cover}
                        name={name}
                        water={water}
                        light={light}
                        price={price}
                    />
                    <button
                        onClick={() => addToCart(name, price)}
                    >
                        Ajouter au panier
                    </button>
                </div>
            ))
        )
    }

    return (
        <div className="lmj-shopping-list">
            <div className="lmj-categories">
                <h2>Categories</h2>
                <Categories
                    categories={categories}
                    category={category}
                    setCategory={setCategory} />
            </div>
            <ul className='lmj-plant-list'>
                {category === "" ? renderPlants(plantList)
                    : renderPlants(plantList.filter(plant => plant.category === category))}
            </ul>
        </div>
    )
}

export default ShoppingList