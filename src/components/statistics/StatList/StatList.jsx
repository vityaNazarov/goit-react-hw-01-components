import PropTypes from 'prop-types';
import css from './StatList.module.css';

export function StatList({ stats }) {
  return (
    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={css.item} key={id}>
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
}

StatList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
