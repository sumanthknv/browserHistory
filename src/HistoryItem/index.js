import './index.css'

const HistoryItem = props => {
  const {initialHistoryListDetails, deleteList} = props
  const {
    id,
    timeAccessed,
    logoUrl,
    title,
    domainUrl,
  } = initialHistoryListDetails

  const deleteItem = () => {
    deleteList(id)
  }

  return (
    <li className="list-item">
      <p className="time-accesed">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo-url" />
      <p className="title">{title}</p>
      <p className="domain-Url">{domainUrl}</p>
      <button
        className="button"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-btn"
        />
      </button>
    </li>
  )
}

export default HistoryItem
