import SingleItem from "./singleItem";

function ItemList({ items, deleteItem, onItemSelected }) {
  let totalPrice = items.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  if (!items.length)
    return <h3 style={{ textAlign: "center" }}>Please add items</h3>;

  return (
    <div>
      <h3>Items List</h3>
      {items?.map((item) => (
        <SingleItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          onItemSelected={onItemSelected}
        />
      ))}

      <div className="total">
        Total: rs. <span> {totalPrice} </span>
      </div>
    </div>
  );
}

export default ItemList;
