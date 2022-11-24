function Slide() {
  function getNumber() {
    let val = 0;
    val = document.querySelector("input").value;
    return val;
  }
  return (
    <div className="slide">
      <input type="range" min="0" max="4" step=".5" name="timeSpent" />
      <ul className="range-labels">
        <li>0</li>
        <li>30 min</li>
        <li>1 h</li>
        <li>1.5 h</li>
        <li>2 h</li>
        <li>2.5 h</li>
        <li>3 h</li>
        <li>3.5 h</li>
        <li>4 h</li>
      </ul>
    </div>
  );
}

export default Slide;
