import ReactSpeedometer from "react-d3-speedometer";

export default function Speedometer() {
  return (
    <div>
      <ReactSpeedometer
        value={0}
        labelFontSize={"31px"}
        valueTextFontSize={"37px"}
        paddingHorizontal={29}
        paddingVertical={29}
        currentValueText={"Value: ${value}"}
      />
      <div className="car">
        <h2>Aussgeschaltet</h2>
        <button>Anschlalten</button>
        <button>Gas geben</button>
        <button>Bremsen</button>
      </div>
      {/* <ReactSpeedometer value={0} /> */}
    </div>
  );
}
