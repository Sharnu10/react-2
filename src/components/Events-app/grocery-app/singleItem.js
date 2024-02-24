export default function SingleItem({ item, deleteItem, onItemSelected }) {
  return (
    <div className="item">
      <div>
        <input type="checkbox" onClick={() => onItemSelected(item.id)} />
      </div>
      <div>{item.name}</div>
      <div> {item.quantity}</div>
      <div> rs. {item.price} </div>
      <div> rs. {item.price * item.quantity} </div>
      <div className="close-item" onClick={() => deleteItem(item.id)}>
        {" "}
        X
      </div>
    </div>
  );
}
