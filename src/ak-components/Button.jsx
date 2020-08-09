import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const colored = {

}

const StButtonContainer = styled.div`
  padding: 0.25rem;
`;

const Button = ({ text, ...props }) => {
  return (
    <StButtonContainer>
      <button>{text}</button>
    </StButtonContainer>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
