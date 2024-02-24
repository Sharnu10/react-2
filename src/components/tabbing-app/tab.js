export default function Tab({ tab, onSelectTab }) {
  return (
    <div className="tab" onClick={() => onSelectTab(tab.id)}>
      {tab.title}
    </div>
  );
}
