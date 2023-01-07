import classes from './EventSummary.module.css';

type Props = {
  title: string;
};

export const EventSummary = (props: Props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};