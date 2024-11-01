// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteItem} = props
  const {title, id} = todoDetails
  const onDeleted = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-container">
      <div className="container">
        <p className="title">{title}</p>
        <div className="btn-container">
          <button className="delete-button" type="button" onClick={onDeleted}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
