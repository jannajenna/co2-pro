import Btn from "./Btn";
import Content from "./Content";
import Intro from "./Intro";

function Toolintro() {
  return (
    <section className="tool-intro">
      <Intro />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="350" height="350">
        <rect width="600" height="350" fill="#cccccc"></rect>
      </svg>
      <Btn text="Calculate" />
      <Content />
    </section>
  );
}

export default Toolintro;
