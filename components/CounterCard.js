const CounterCard = ({ number, info, className }) => {
  return (
    <div className={`counter ${className ? className : ""}`}>
      <div className="inner-container">
        <h2>
          <data value={`${number}`} />
          {number}
        </h2>
        <h6>{info}</h6>
      </div>
    </div>
  );
};

export default CounterCard;
