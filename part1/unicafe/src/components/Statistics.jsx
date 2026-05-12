import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, average, total }) => {
  if (total) {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={good / total} />
          </tbody>
        </table>
      </>
    );
  }

  return <p>No feedback given</p>;
};

export default Statistics;
