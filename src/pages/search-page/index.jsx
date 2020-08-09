import React from "react";
import styled from "styled-components";
import { FiltersContainer } from "../../components";

const StPageHeader = styled.div`
  border: 1px solid #ddd;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
`;
const StPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 1.5rem;
`;
const StFilterSection = styled.div`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
`;
const StResultSection = styled.div`
  flex: 3;
  padding: 1rem 1.5rem;
  border: 1px solid #ddd;
`;

const SearchPage = () => {
  return (
    <>
      <StPageHeader>Flight Search Engine</StPageHeader>
      <StPageContainer>
        <StFilterSection>
          <FiltersContainer onFilter={(filters) => console.log(filters)} />
        </StFilterSection>
        <StResultSection>
          <h1>London</h1>
          <p>
            London is the capital city of England. It is the most populous city
            in the United Kingdom, with a metropolitan area of over 13 million
            inhabitants.
          </p>
          <p>
            Standing on the River Thames, London has been a major settlement for
            two millennia, its history going back to its founding by the Romans,
            who named it Londinium.
          </p>
        </StResultSection>
      </StPageContainer>
    </>
  );
};

export default SearchPage;
