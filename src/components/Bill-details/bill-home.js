import AddFriend from "./add-friends";
import ShareBill from "./share-bill";
import FriendBill from "./friend-list";
import { useState } from "react";
import "../../App.css";

export default function BillHome() {
  const [friends, setFriends] = useState([]);

  function addFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  return (
    <div className="row">
      <AddFriend addFriend={addFriend} />
      <ShareBill />
      <FriendBill friends={friends} />
    </div>
  );
}
