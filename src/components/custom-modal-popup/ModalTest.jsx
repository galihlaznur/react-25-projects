import React, { useState } from "react";
import Modal from "./Modal";

function Header() {
  return <div>This is a custom header</div>;
}

function Body() {
  return <div>This is a custom body</div>;
}

function Footer() {
  return <div>This is a custom footer</div>;
}

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModalPopup(!showModalPopup)}>
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          id={"custom-id"}
          header={<Header />}
          body={<Body />}
          footer={<Footer />}
          onClose={() => setShowModalPopup(false)}
        />
      )}
    </div>
  );
};

export default ModalTest;
