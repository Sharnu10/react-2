export default function Footer({ items }) {
  let selectedItems = items.reduce((acc, item) => {
    return (acc += item.selected ? 1 : 0);
  }, 0);

  let selectedPrice = items.reduce((acc, item) => {
    if (item.selected) return (acc += item.price * item.quantity);
    return acc;
  }, 0);

  if (!items.length) return <div>No Items selected. Please add items.</div>;

  return (
    <div className="footer">
      <div>Total Items Added is {items.length}</div>
      <div>
        Items Selected is {selectedItems || 0} and Price is {selectedPrice || 0}
      </div>
    </div>
  );
}
