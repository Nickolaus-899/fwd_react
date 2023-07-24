import React, { JSX } from "react";

const ConfirmationForm: ({
  closeFormHandler,
  deleteDishHandler,
}: {
  closeFormHandler: Function;
  deleteDishHandler: Function;
}) => JSX.Element = ({ closeFormHandler, deleteDishHandler }) => {
  return (
    <div>
      <div className="WhiteColorForInputText">
        Do you really want to delete this dish?
      </div>
      <div className="ButtonsWrapper">
        <button
          className="ExtraButton"
          onClick={() => {
            deleteDishHandler();
          }}
        >
          Delete
        </button>
        <button
          className="ExtraButton"
          onClick={() => {
            closeFormHandler();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmationForm;
