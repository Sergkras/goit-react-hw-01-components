import React from 'react';
import PropTypes from 'prop-types';

import "./statistics.css";

const StatisticsList = ({ item, label, percentage }) => (
  <li className={"statistics-item"}>
    <span className={"statistics-label"}>{label}</span>
    <span className={"statistics-percentage"}> {percentage}%</span>
  </li>
);

StatisticsList.propTypes = {
  item: PropTypes.string,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
