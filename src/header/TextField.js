import { useState } from "react";
import RefactorButtons from "./RefactorButtons";
import cl from "classnames";

function TextField({ size, value, onChange }) {
  const [disabled, setDisabled] = useState(true);
  const handleEnableRefactorMode = (e) => {
    e.stopPropagation();
    setDisabled(false);
  };
  const handleDisableRefactorMode = (e) => {
    e.stopPropagation();
    setDisabled(true);
  };

  return (
    <div
      onClick={handleEnableRefactorMode}
      className={cl("text-field-disabled", {
        ["text-field"]: !disabled,
      })}
    >
      <input
        value={value}
        className={`text-field-input-${size}`}
        disabled={disabled}
        onChange={onChange}
      />
      <RefactorButtons
        isInputDisabled={disabled}
        confirm={handleDisableRefactorMode}
        cancel={handleDisableRefactorMode}
      />
    </div>
  );
}

export default TextField;
