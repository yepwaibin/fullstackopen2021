import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad, average, positive }) => {
  if (good || neutral || bad) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + neutral + bad} />
            <StatisticLine text="average" value={average() || "0"} />
            <StatisticLine text="positive" value={positive() || "0"} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    );
  }
};

export default Statistics;
