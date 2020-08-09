import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StInputContainer = styled.div`
  padding: 0.25rem;

  input {
    padding: 0.5rem;
    border: 1px solid #999;
    font-size: 0.75rem;
    width: ${({ fluid }) => (fluid ? "-webkit-fill-available" : "auto")};

    :focus {
      border-color: #85b7d9;
      outline: none;
    }
  }
`;

const Input = ({ value, fluid, onChange, ...props }) => {
  const [inputValue, setInputValue] = useState(props.value);

  const onInputChange = (evt) => {
    const value = evt.target.value;
    setInputValue(value);
    onChange && onChange(value);
  };
  return (
    <StInputContainer fluid>
      <input {...props} value={inputValue} onChange={onInputChange} />
    </StInputContainer>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  fluid: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Input;
