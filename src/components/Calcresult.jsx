import Btn from "./Btn";
import Content from "./Content";

function Calcresult() {
  return (
    <section className="calc-result">
      <h2>Your results....</h2>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="350" height="350">
        <rect width="600" height="350" fill="#cccccc"></rect>
      </svg>
      <div>
        <h3>It will take X amount of trees</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, expedita ex deleniti optio dolorem autem!</p>
        <Btn text="Calculate again" />
        <Content />
      </div>
    </section>
  );
}

export default Calcresult;
