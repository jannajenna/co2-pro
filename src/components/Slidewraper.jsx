import Btn from "./Btn";
import Sliders from "./Sliders";

function Slidewraper() {
  return (
    <section className="sliderswraper">
      <Sliders />
      <Btn text="Submit" />
    </section>
  );
}

export default Slidewraper;
