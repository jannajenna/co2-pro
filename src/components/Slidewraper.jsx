import Btn from "./Btn";
import Howto from "./Howto";
import Sliders from "./Sliders";
import Textintro from "./Textintro";

function Slidewraper() {
  return (
    <section className="sliderswraper">
      <Textintro />
      <Sliders />
      <Btn text="Submit" />
      <Howto />
    </section>
  );
}

export default Slidewraper;
