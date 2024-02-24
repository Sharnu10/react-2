export default function SingleItem({ item, deleteItem }) {
  return (
    <div className="item">
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
