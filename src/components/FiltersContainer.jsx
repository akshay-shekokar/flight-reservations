import React from "react";
import PropTypes from "prop-types";
import { Tab, Input, Button } from "../ak-components";

const Filters = () => {
  return (
    <>
      <Input placeholder="Enter Source City" name="source" fluid />
      <Input placeholder="Enter Destination City" name="destination" fluid />
      <Button text="Filter" />
    </>
  );
};

const FiltersContainer = ({ onFilter }) => {
  return (
    <>
      <Tab
        tabList={[
          {
            title: "One way",
            component: <Filters onFilter={onFilter} isReturn={false} />,
          },
          {
            title: "Return",
            component: <Filters onFilter={onFilter} isReturn />,
          },
        ]}
      />
    </>
  );
};

FiltersContainer.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FiltersContainer;
