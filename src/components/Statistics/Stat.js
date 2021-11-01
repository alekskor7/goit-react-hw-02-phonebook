import React from "react";
import PropTypes from "prop-types";
import Style from "./Stat.module.css";

function changeColor() {
  let r = Math.floor(Math.random(3) * 200 + 50);
  let g = Math.floor(Math.random(3) * 200 + 50);
  let b = Math.floor(Math.random(3) * 200 + 50);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function Stat({ label, percentage }) {
  return (
    <>
      <li className={Style.item} style={{ backgroundColor: changeColor() }}>
        <span className={Style.label}>{label}</span>
        <span className={Style.percentage}>{percentage}%</span>
      </li>
    </>
  );
}
Stat.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
export default Stat;