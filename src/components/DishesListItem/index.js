import {VscDiffModified} from 'react-icons/vsc'
import './index.css'

const DishesListItem = props => {
  const {dishCount, onIncrement, onDecrement, dish} = props

  const {
    addonCat,
    dishAvailability,
    dishType,
    dishCalories,
    dishCurrency,
    dishDescription,
    dishId,
    dishImage,
    dishName,
    dishPrice,
  } = dish
  console.log(dishCount)

  const addonCatLength = addonCat.length > 0 ? 'Customizations available' : ''

  const dishTypeMode = dishType === 2 ? 'dish-type-icon2' : 'dish-type-icon1'
  return (
    <>
      <div className="dishesListItem-bg-container">
        <li className="dishes-list-item">
          <div className="dish-info-with-icon">
            <div className="dish-type-icon-card">
              <VscDiffModified size={40} className={`${dishTypeMode}`} />
            </div>
            <div>
              <h1 className="dish-name">{dishName}</h1>
              <div className="dish-price-card">
                <p className="dish-currency">
                  {dishCurrency} {dishPrice}
                </p>
              </div>
              <p className="dish-description">{dishDescription}</p>
              {dishAvailability ? (
                <>
                  <div className="btn-container">
                    <button
                      type="button"
                      className="arrow-btn"
                      onClick={() => onDecrement(dishId)}
                    >
                      -
                    </button>
                    <p className="number">{dishCount}</p>
                    <button
                      type="button"
                      className="arrow-btn"
                      onClick={() => onIncrement(dishId)}
                    >
                      +
                    </button>
                  </div>
                  <p className="addonCat">{addonCatLength}</p>
                </>
              ) : (
                <p className="not-applicable">Not available</p>
              )}
            </div>
          </div>
          <div>
            <p className="dish-calories">{dishCalories} calories</p>
          </div>
          <div>
            <img src={dishImage} alt="dishImage" className="dish-img" />
          </div>
        </li>
      </div>
    </>
  )
}

export default DishesListItem

/*
 <li key={dish.dish_id}>
        <h3>{dish.dish_name}</h3>
        <p>
          {dish.dish_currency} {dish.dish_price}
        </p>
        <p>{dish.dish_description}</p>
        <p>{dish.dish_calories} calories</p>
        <img src={dish.dish_image} alt={dish.dish_name} />
        {dish.addonCat && <p>Customizations available</p>}
        <p>Quantity: {dishCounts[dish.dish_id] || 0}</p>
        <button
          type="button"
          onClick={() => this.decrementDishCount(dish.dish_id)}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => this.incrementDishCount(dish.dish_id)}
        >
          +
        </button>
      </li>
*/
