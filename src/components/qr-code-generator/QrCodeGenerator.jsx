import React, { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [input, setInput] = useState("");

  return (
    <>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={!input}
          onClick={() => {
            setQrCodeValue(input);
            setInput("");
          }}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode
          id="qr-code-value"
          value={qrCodeValue}
          size={400}
          bgColor="#fff"
        />
      </div>
    </>
  );
};

export default QrCodeGenerator;
