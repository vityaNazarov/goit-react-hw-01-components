import { StatList } from '../StatList/StatList';
import { StatTitle } from '../StatTitle/StatTitle';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      <StatTitle title={title} />
      <StatList stats={stats} />
    </section>
  );
}
