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

  const addonCatLength = addonCat.length > 0 ? 'Customizations available' : ''

  const dishTypeMode = dishType === 2 ? 'dish-type-icon2' : 'dish-type-icon1'
  return (
    <li className="dishes-list-item">
      <div className="dish-info-with-icon">
        <div className="dish-type-icon-card">
          <VscDiffModified size={40} className={`${dishTypeMode}`} />
        </div>
        <div>
          <h1 className="dish-name" key={dishName}>
            {dishName}
          </h1>

          <p className="dish-currency" key={`${dishCurrency} ${dishPrice}`}>
            {dishCurrency} {dishPrice}
          </p>

          <p className="dish-description" key={dishDescription}>
            {dishDescription}
          </p>
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

      <p className="dish-calories" key={dishCalories}>
        {dishCalories} calories
      </p>

      <div>
        <img src={dishImage} alt="dishImage" className="dish-img" />
      </div>
    </li>
  )
}

export default DishesListItem
