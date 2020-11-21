import cancelIcon from "../assets/cancelGrey.svg";
import confirmIcon from "../assets/confirmGrey.svg";

function RefactorButtons({ confirm, cancel, isInputDisabled }) {
  if (isInputDisabled) {
    return null;
  }

  return (
    <div className="refactor-buttons">
      <button onClick={confirm}>
        <img src={confirmIcon} alt="confirm" className="refactor-icon" />
      </button>
      <button onClick={cancel}>
        <img src={cancelIcon} alt="cancel" className="refactor-icon" />
      </button>
    </div>
  );
}

export default RefactorButtons;
