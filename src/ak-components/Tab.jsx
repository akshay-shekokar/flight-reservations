import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { get } from "lodash";

const StTab = styled.div``;

const StTabTitleList = styled.div`
  display: flex;
`;
const StTabTitle = styled.div`
  padding: 0.5rem 1rem;
  background: ${({ active }) => (active ? "#ccc" : "#ddd")};
  border: 1px solid #ccc;
  cursor: pointer;
`;
const StTabContainer = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
`;

const doNothing = () => {};

const Tab = ({ activeTabIndex = 0, tabList, onChange = doNothing }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);
  useEffect(() => {
    setActiveTab(activeTabIndex);
  }, [activeTabIndex]);
  return (
    <StTab>
      {get(tabList, "length", 0) ? (
        <>
          <StTabTitleList>
            {tabList.map(({ title, data }, index) => (
              <StTabTitle
                key={index}
                active={index === activeTab}
                onClick={() => {
                  setActiveTab(index);
                  onChange({ title, data, index });
                }}
              >
                {title}
              </StTabTitle>
            ))}
          </StTabTitleList>
          <StTabContainer>
            {get(tabList, `${activeTab}.component`, "Empty Tab")}
          </StTabContainer>
        </>
      ) : (
        "Tabs are not present"
      )}
    </StTab>
  );
};

Tab.propTypes = {
  activeTabIndex: PropTypes.number,
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      component: PropTypes.node,
      data: PropTypes.object,
    })
  ).isRequired,
  onChange: PropTypes.func,
};

export default Tab;
