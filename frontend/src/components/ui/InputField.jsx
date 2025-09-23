import React from "react";
import clsx from "clsx";
import CustomDatePicker from "./CustomDatePicker";

const InputField = ({
  label,
  className,
  name,
  type,
  inputImg,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className={clsx("input-field-container", className)}>
      <p className="input-label">{label}</p>
      <div
        className={clsx(
          "input-wrapper",
          type === "textarea" && "textarea-wrapper"
        )}
      >
        <img src={inputImg} alt={`${label} icon`} className="input-field-img" />
        {type === "date" ? (
          <CustomDatePicker name={name} date={value} onDateChange={onChange} />
        ) : type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            placeholder={placeholder}
            className="textarea-field-input"
            rows={3}
            onChange={onChange}
          />
        ) : (
          <textarea
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            className="textarea-field-input"
            onChange={onChange}
          />
        )}
      </div>
    </div>
  );
};

export default InputField;
