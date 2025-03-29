import './index.css'

const Tabs = props => {
  const {tabItem, isActive, onClickTab} = props
  const {menuCategory} = tabItem
  const activeClassname = isActive ? 'isActive' : ''

  const onClickTabItem = () => {
    onClickTab(menuCategory)
  }

  return (
    <li className="list-items">
      <button
        type="button"
        className={`item ${activeClassname}`}
        onClick={onClickTabItem}
        key={menuCategory}
      >
        {menuCategory}
      </button>
    </li>
  )
}

export default Tabs
