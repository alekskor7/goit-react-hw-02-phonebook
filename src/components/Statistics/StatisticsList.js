import React from "react";
import Stat from "./StatisticsListItem";
import PropTypes from "prop-types";
import Style from "./StatisticsList.module.css";
function Statistics({ stats, title }) {
  if (stats.length === 0) return null;
  return (
    <section className={Style.statistics}>
      <h2 className={Style.title}>{title ? title.toUpperCase() : title}</h2>
      <ul className={Style.statList}>
        {stats.map((item) => (
          <Stat key={item.id} label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </section>
  );
}
Statistics.defaultProps = {
  stats: [],
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
