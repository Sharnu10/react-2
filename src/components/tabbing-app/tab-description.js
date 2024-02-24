export default function TabDescription({ tab }) {
  return (
    <div className="description">
      <div>{tab.id} </div>
      <div> {tab.description}</div>
    </div>
  );
}
