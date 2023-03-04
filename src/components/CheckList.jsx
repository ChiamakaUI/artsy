import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { useState } from "react";
const CheckList = ({ text, addFunc, delFunc }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-row items-center font-merriweather">
      {checked ? (
        <MdOutlineCheckBox
          className="text-3xl cursor-pointer mr-1"
          onClick={() => {
            setChecked(!checked);
            delFunc(text)
          }}
        />
      ) : (
        <MdOutlineCheckBoxOutlineBlank
          className="text-3xl cursor-pointer mr-1"
          onClick={() => {
            setChecked(!checked);
            addFunc(text)
          }}
        />
      )}
      <p>{text}</p>
    </div>
  );
};

export default CheckList;
