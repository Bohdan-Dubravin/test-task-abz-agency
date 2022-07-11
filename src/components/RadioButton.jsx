const RadioButton = ({ name, value, selected, text, onChange }) => {
  return (
    <label className="radioButton__radio-container">
      <input
        value={value}
        name={name}
        className="radioButton__input"
        type="radio"
        onClick={() => onChange(value)}
      />

      <div
        className={`radioButton__circle ${
          value === selected && 'radioButton__circle--active'
        }`}
      ></div>
      {/* <div
        className={`radioButton__outer-circle ${
          value !== selected && 'radioButton__outer-circle--unselected'
        }`}
      >
        <div
          className={`radioButton__inner-circle ${
            value !== selected && 'radioButton__inner-circle--unselected-circle'
          }`}
        />
      </div> */}
      <div className="radioButton__helper-text">{text}</div>
    </label>
  );
};

export default RadioButton;
