import Btn from "./Btn";
function Intro() {
  return (
    <section className="intro">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="350" height="350">
        <rect width="600" height="350" fill="#cccccc"></rect>
      </svg>
      <Btn text="Calculate" />
    </section>
  );
}

export default Intro;
