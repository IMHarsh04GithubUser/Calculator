import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  let [ClickToPerform, SetPerformClick] = useState("");

  let buttons = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "=", "C", "DEL"
  ];

  let PerformOnclick = (event) => {
    if (event === "C") {
      SetPerformClick("");
    } else if (event === "=") {
      try {
        let result = eval(ClickToPerform);
        SetPerformClick(result.toString());
      } catch (error) {
        SetPerformClick("Error");
      }
    } else if (event === "DEL") {
      SetPerformClick(ClickToPerform.slice(0, -1));
    } else {
      SetPerformClick(ClickToPerform + event);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="calculator bg-gray-900 p-8 rounded-lg shadow-2xl shadow-white">
        <input
          type="text"
          className="w-full h-16 mb-4 text-right text-white bg-gray-700 rounded-lg p-4 text-2xl"
          value={ClickToPerform}
          readOnly
        />
        <div className="grid grid-cols-4 gap-4 p-2 rounded-lg">
          {buttons.map((btns) => (
            <button
              key={btns}
              className={`btn-calculator w-full p-4 text-xl font-semibold rounded-lg transition-colors ${
                btns === "="
                  ? "bg-green-600 hover:bg-green-500 text-white"
                  : btns === "C" || btns === "DEL"
                  ? "bg-red-600 hover:bg-red-500 text-white"
                  : "bg-gray-600 hover:bg-gray-500 text-white"
              }`}
              onClick={() => PerformOnclick(btns)}
            >
              {btns}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
