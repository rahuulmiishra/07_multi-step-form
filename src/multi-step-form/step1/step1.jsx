function Step1({ inputs, onChange = () => {}, stepKey }) {
  const { firstName, email } = inputs;

  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }

  return (
    <fieldset>
      <legend>Personal Information</legend>

      <div className="control-row">
        <label htmlFor="firstName">FirstName</label>
        <input
          onChange={handleChange("firstName")}
          type="text"
          id="firstName"
          value={firstName}
        />
      </div>

      <div className="control-row">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange("email")}
          type="text"
          id="email"
          value={email}
        />
      </div>
    </fieldset>
  );
}

export default Step1;
