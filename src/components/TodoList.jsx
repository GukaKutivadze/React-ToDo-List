export const TodoList = ({ title, selectedItems, items, onToggleItem }) => {
    return (
        <div className="todo-list">
            <h2>{title}</h2>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li
                            className={selectedItems.includes(index) ? "selected" : ""}
                            onClick={() => onToggleItem(index)}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}