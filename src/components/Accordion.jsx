import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Accordion = ({ title, children }) => {
  const [showText, setShowText] = useState(false);
  return (
    <div className="font-merriweather">
      <div className="flex flex-row items-center justify-between p-4">
        <p className="text-lg">{title}</p>
        {showText ? (
          <MdKeyboardArrowUp
            className="text-3xl cursor-pointer"
            onClick={() => setShowText(!showText)}
          />
        ) : (
          <MdKeyboardArrowDown
            className="text-3xl cursor-pointer"
            onClick={() => setShowText(!showText)}
          />
        )}
      </div>
      {showText && <div className="p-3.5">{children}</div>}
      <hr className="w-full" />
    </div>
  );
};

export default Accordion;
