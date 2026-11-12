import "./App.css";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { country: "France", value: 42 },
  { country: "Germany", value: 35 },
  { country: "Spain", value: 28 },
  { country: "Italy", value: 31 },
  { country: "UK", value: 22 },
];

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <p>Adding bar chart from Nivo library</p>
      <div style={{ height: 400, marginTop: "50px" }}>
        <ResponsiveBar data={data} keys={["value"]} indexBy="country" />
      </div>
    </>
  );
}

export default App;
