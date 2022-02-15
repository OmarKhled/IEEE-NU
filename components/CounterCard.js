const CounterCard = ({ number, info }) => {
  return (
    <div className="counter">
      <h2>
        <data value={`${number}`} />
        {number}
      </h2>
      <h5>{info}</h5>
    </div>
  );
};

export default CounterCard;
