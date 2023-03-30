import React, { useState, useEffect } from "react";

export const Dropdown = ({ options, defaultOption, onSelectOption }) => {
  const [selectedOption, setOption] = useState(defaultOption);

  const handleSelectOption = (index) => {
    const option = options[index];
    setOption(option);
  };

  useEffect(() => {
    onSelectOption(selectedOption);
  }, [selectedOption]);

  const renderOptions = options.map(({ label, value }, index) => (
    <li key={`${label}-${value}`} onClick={() => handleSelectOption(index)}>
      <span class="dropdown-item">{label}</span>
    </li>
  ));

  return (
      <div class="dropdown">
        <button
          class="btn btn-sm mb-3 bg-white text-dark dropdown-toggle dropdown-footer d-flex w-100 "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedOption.label}
        </button>
        <ul class="dropdown-menu dropdown-menu-options w-100">{renderOptions}</ul>
      </div>
  );
};
