export default function Tab({ tab, tabIndex, onSelectTab }) {
  return (
    <div
      onClick={() => onSelectTab(tab.id)}
      className={`tab ${tabIndex === tab.id ? "highlightTab" : ""}`}
    >
      {tab.title}
    </div>
  );
}
