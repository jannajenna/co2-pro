import Slide from "./slide";

export default function Slider(props) {
  console.log(props);
  return (
    <>
      <h3>{props.name}</h3>
      <Slide />
    </>
  );
}
