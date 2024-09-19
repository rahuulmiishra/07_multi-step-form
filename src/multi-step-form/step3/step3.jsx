function Step3({ inputs, onChange = () => {}, stepKey }) {
  const { salary, bank } = inputs || {};

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }

  return (
    <fieldset>
      <legend>Financial Information</legend>

      <div className="control-row">
        <label htmlFor="salary">Salary</label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={handleChange("salary")}
        />
      </div>

      <div className="control-row">
        <label htmlFor="bank">Bank</label>
        <input
          type="text"
          id="bank"
          value={bank}
          onChange={handleChange("bank")}
        />
      </div>
    </fieldset>
  );
}

export default Step3;
