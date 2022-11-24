function Slide() {
  return (
    <div className="slide">
      <input type="range" min="0" max="8" steps="16" list="ticks" />
      <datalist id="ticks">
        <option value="0"></option>
        <option value="1"></option>
        <option value="2"></option>
        <option value="3"></option>
        <option value="4"></option>
        <option value="5"></option>
        <option value="6"></option>
        <option value="7"></option>
      </datalist>
    </div>
  );
}

export default Slide;
