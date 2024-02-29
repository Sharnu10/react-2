export default function FriendBill({ friends }) {
  return (
    <div className="col-6 mx-2">
      <h2>Friend List</h2>

      <ul className="list-unstyled">
        {friends?.map((friend) => (
          <li className="" key={friend.id}>
            {friend.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
