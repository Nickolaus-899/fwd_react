import React, { JSX } from "react";
import { timeForReloading } from "@/app/classes";

const DeleteAccForm: ({
  closeFormHandler,
  deleteAccHandler,
}: {
  closeFormHandler: Function;
  deleteAccHandler: Function;
}) => JSX.Element = ({ closeFormHandler, deleteAccHandler }) => {
  return (
    <div>
      <div className="WhiteColorForInputText">
        Do you really want to delete your account?
      </div>
      <div className="ButtonsWrapper">
        <a>
          <button
            className="ExtraButton"
            onClick={() => {
              deleteAccHandler();

              setTimeout(function () {
                window.location.href = "/auth";
              }, timeForReloading);
            }}
          >
            Delete
          </button>
        </a>
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

export default DeleteAccForm;
