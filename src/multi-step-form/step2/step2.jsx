function Step2({ inputs, onChange = () => {}, stepKey }) {
  const { phone, city } = inputs || {};

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }
  return (
    <fieldset>
      <legend>Contact Information</legend>

      <div className="control-row">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={handleChange("phone")}
        />
      </div>

      <div className="control-row">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={handleChange("city")}
        />
      </div>
    </fieldset>
  );
}

export default Step2;
