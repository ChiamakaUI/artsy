const Counter = ({
  num,
  containerStyles,
  btnStyles,
  increaseFunc,
  decreaseFunc,
}) => {
  return (
    <div
      className={`flex flex-row text-3xl lg:text-4xl justify-between items-center w-[100px] ${containerStyles}`}
    >
      <button onClick={decreaseFunc}>-</button>
      <p className={`text-3xl lg:text-4xl ${btnStyles}`}>{num}</p>
      <button onClick={increaseFunc}>+</button>
    </div>
  );
};

export default Counter;
