import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const CameraComponent = () => {
  const [data, setData] = React.useState("Not Found");

  return (
    <div>
      <input type="text" value={data} />
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          else setData("Not Found");
        }}
      />
    </div>
  );
};

export default CameraComponent;
