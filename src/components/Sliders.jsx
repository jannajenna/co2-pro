import Slider from "./Slider";

function Sliders() {
  const range = [
    {
      name: "Facebook",
      id: 1,
    },
    {
      name: "Instagram",
      id: 2,
    },
    {
      name: "Tiktok",
      id: 3,
    },
  ];
  console.log(range);

  const mapped = range.map((slide) => <Slider name={slide.name} key={slide.id} />);

  return <div className="sliderS">{mapped}</div>;
}

export default Sliders;
