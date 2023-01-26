import PropTypes from 'prop-types';
import css from './StatTitle.module.css';

export function StatTitle({ title }) {
  return <>{title && <h2 className={css.title}>{title}</h2>}</>;
}

StatTitle.propTypes = {
  title: PropTypes.string,
};
