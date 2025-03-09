export default function SingleItem({ item, removeItem, editItem }) {
  //   console.log(`The item is: ${item.name}`);
  return (
    <div className="single-item ">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecoration: item.completed && "line-through" }}>
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => removeItem(item.id)}
        className="delete-btn "
      >
        Delete
      </button>
    </div>
  );
}
