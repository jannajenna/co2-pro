import Howto from "./Howto";
import Intro from "./Intro";
import Textintro from "./Textintro";

function Toolintro() {
  return (
    <section className="tool-intro">
      <Textintro />
      <Intro />
      <Howto />
    </section>
  );
}

export default Toolintro;
