import {Component} from 'react'

import Header from '../Header'
import Tabs from '../Tabs'
import DishesListItem from '../DishesListItem'

import './index.css'

class Dishes extends Component {
  state = {
    menuCategories: [],
    activeCategory: '',
    dishes: [],
    cartCount: 0,
    dishCounts: {},
  }

  componentDidMount = () => {
    this.getDishesInfo()
  }

  getDishesInfo = async () => {
    const url =
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details'

    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()

      const updatedCategoryDishes = data[0].table_menu_list.map(item => item)

      this.setState({
        menuCategories: data[0].table_menu_list,
        activeCategory: data[0].table_menu_list[0].menu_category,
        dishes: updatedCategoryDishes,
      })
    }
  }

  handleCategoryChange = category => {
    this.setState({activeCategory: category})
  }

  incrementDishCount = dishId => {
    this.setState(prevState => {
      const newCount = (prevState.dishCounts[dishId] || 0) + 1
      return {
        dishCounts: {...prevState.dishCounts, [dishId]: newCount},
        cartCount: prevState.cartCount + 1,
      }
    })
  }

  decrementDishCount = dishId => {
    this.setState(prevState => {
      const currentCount = prevState.dishCounts[dishId] || 0
      if (currentCount > 0) {
        const newCount = currentCount - 1
        return {
          dishCounts: {...prevState.dishCounts, [dishId]: newCount},
          cartCount: prevState.cartCount - 1,
        }
      }
      return prevState
    })
  }

  renderTabList = () => {
    const {menuCategories, activeCategory} = this.state
    const updatedMenuCategories = menuCategories.map(category => ({
      menuCategory: category.menu_category,
      categoryDishes: category.category_dishes,
    }))

    return (
      <ul className="tab-unordered-list">
        {updatedMenuCategories.map(category => (
          <Tabs
            key={category.menuCategory}
            tabItem={category}
            onClickTab={this.handleCategoryChange}
            isActive={category.menuCategory === activeCategory}
          />
        ))}
      </ul>
    )
  }

  renderDishListView = () => {
    const {activeCategory, dishes, dishCounts} = this.state

    const activeDishes = dishes.filter(
      dish => dish.menu_category === activeCategory,
    )

    const updatedActiveDish = activeDishes.map(item =>
      item.category_dishes.map(each => ({
        addonCat: each.addonCat,
        dishAvailability: each.dish_Availability,
        dishType: each.dish_Type,
        dishCalories: each.dish_calories,
        dishCurrency: each.dish_currency,
        dishDescription: each.dish_description,
        dishId: each.dish_id,
        dishImage: each.dish_image,
        dishName: each.dish_name,
        dishPrice: each.dish_price,
        nexturl: each.nexturl,
      })),
    )

    return (
      <div>
        <>
          <ul className="dishes-unordered-list">
            {updatedActiveDish.map(each =>
              each.map(dish => (
                <DishesListItem
                  key={dish.dishId}
                  dish={dish}
                  dishCount={dishCounts[dish.dishId] || 0}
                  onIncrement={this.incrementDishCount}
                  onDecrement={this.decrementDishCount}
                />
              )),
            )}
          </ul>
        </>
      </div>
    )
  }

  render() {
    const {cartCount} = this.state

    return (
      <div>
        <Header count={cartCount} />
        {this.renderTabList()}
        {this.renderDishListView()}
      </div>
    )
  }
}

export default Dishes
