import Btn from "./Btn";
import Fetch from "./Fetch";
import Tips from "./Tips";

function Calcresult() {
  return (
    <section className="calc-result">
      <div>
        <Fetch />
        <Btn text="Calculate again" />
        <Tips />
      </div>
    </section>
  );
}

export default Calcresult;
