import './index.css'

const Tabs = props => {
  const {tabItem, isActive, onClickTab} = props
  const {menuCategory} = tabItem
  const activeClassname = isActive ? 'isActive' : ''

  const onClickTabItem = () => {
    onClickTab(menuCategory)
  }

  return (
    <li className="list-items" key={menuCategory}>
      <button
        type="button"
        className={`item ${activeClassname}`}
        onClick={onClickTabItem}
      >
        <p className="menu">{menuCategory}</p>
      </button>
    </li>
  )
}

export default Tabs
