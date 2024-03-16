import ToggleButton from "./toggle-button";

export default function ListBox({ showData, handleBtnToggle, children }) {
  return (
    <div className="box">
      <ToggleButton isOpen={showData} handleBtnToggle={handleBtnToggle} />
      {showData && children}
    </div>
  );
}
