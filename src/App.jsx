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
      <div className="max-w-md m-auto p-5 bg-slate-800 text-slate-950 rounded-md overflow-hidden text-center">
        <h1 className="text-4xl font-semibold mb-3 tracking-tight">
          Color Generator
        </h1>
        <input type="color" value={color} onChange={handleColorChange} />
        <br />
        <input
          className="mt-3"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={opacity}
          onChange={handleOpacityChange}
        />
        {color && (
          <div className="w-44 h-44 bg-slate-700 m-auto mt-5 rounded-md flex items-center justify-center">
            <div
              className="w-40 h-40 rounded-md"
              style={{ backgroundColor: color, opacity: opacity }}
            ></div>
          </div>
        )}
        {color && (
          <div className="mt-5 p-3 bg-slate-700 rounded-lg text-slate-950">
            <h2 className="text-xl font-semibold">Color Details:</h2>
            <p className="my-2 py-1 px-3 bg-slate-800 rounded-lg">
              Hex: {color}
            </p>
            <p className="my-2 py-1 px-3 bg-slate-800 rounded-lg">
              RGB: {getRgb()}
            </p>
            <p className="my-2 py-1 px-3 bg-slate-800 rounded-lg">
              opacity: {getOpacityPercentage()}
            </p>
            <pre className="my-2 py-1 px-3 bg-slate-800 rounded-lg">
              <code>{getCssCode()}</code>
            </pre>
          </div>
        )}
        <h6 className="text-sm text-start mt-5 text-slate-500">@sydane_98</h6>
      </div>
    </>
  );
}

export default App;
