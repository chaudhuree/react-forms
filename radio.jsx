import { useState } from 'react';

function RadioButtons() {
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="option1"
          name="radioValue"
          onChange={handleRadioChange}
        />
        Option 1
      </label>
      <label>
        <input
          type="radio"
          value="option2"
          name="radioValue"
          onChange={handleRadioChange}
        />
        Option 2
      </label>
    </div>
  );
}
