export default function ToggleButton({ isOpen, handleBtnToggle }) {
  return (
    <div className="btn-toggle" onClick={handleBtnToggle}>
      {isOpen ? "-" : "+"}
    </div>
  );
}
