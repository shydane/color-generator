import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  const [opacity, setOpacity] = useState(1);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleOpacityChange = (e) => {
    const opacityValue = Number(e.target.value);
    setOpacity(opacityValue);
  };

  const getRgb = () => {
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  const getOpacityPercentage = () => {
    const opacityPercentage = Math.round(opacity * 100);
    return `${opacityPercentage}%`;
  };

  const getCssCode = () => {
    const cssCode = `
    background-color: ${color};
    opacity: ${opacity};
    `;
    return cssCode.trim();
  };

  return (
    <>
      <div className="max-w-md m-auto p-5 bg-slate-800 text-slate-300 rounded-md overflow-hidden text-center">
        <h1 className="text-4xl font-semibold mb-3 tracking-tight">
          Color Generator
        </h1>
        <input type="color" value={color} onChange={handleColorChange} />
        <br />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={opacity}
          onChange={handleOpacityChange}
        />
        {color && (
          <div
            className="w-40 h-40 m-auto mt-5 rounded-md"
            style={{ backgroundColor: color, opacity: opacity }}
          ></div>
        )}
        {color && (
          <div>
            <p>Hex: {color}</p>
            <p>RGB: {getRgb()}</p>
            <p>opacity: {getOpacityPercentage()}</p>
            <pre>
              <code>{getCssCode()}</code>
            </pre>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
