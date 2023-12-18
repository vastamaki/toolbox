import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import Header from "src/components/header";
import { utilFuncs } from "src/utils";

function App() {
  const [input, setInput] = useState<string | string[]>("");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState<string>("");

  useHotkeys(["ctrl+enter", "meta+enter"], () => {
    const utils = utilFuncs;

    eval(code);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Header />
      <div
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: "1rem",
        }}
      >
        <textarea
          placeholder="Type something here..."
          autoComplete="off"
          spellCheck="false"
          style={{
            width: "100%",
            height: "30%",
            resize: "none",
            border: "none",
            outline: "none",
            padding: "0.5rem",
            lineHeight: "1.5rem",
            backgroundColor: "#191919",
            borderRadius: "0.5rem",
            color: "#fff",
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            gap: "1rem",
            height: "70%",
          }}
        >
          <textarea
            placeholder="Type something here..."
            autoComplete="off"
            spellCheck="false"
            style={{
              width: "100%",
              height: "100%",
              resize: "none",
              border: "none",
              outline: "none",
              padding: "0.5rem",
              lineHeight: "1.5rem",
              backgroundColor: "#191919",
              borderRadius: "0.5rem",
              color: "#fff",
            }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <textarea
            readOnly
            placeholder="Output will appear here..."
            style={{
              width: "100%",
              height: "100%",
              resize: "none",
              border: "none",
              outline: "none",
              padding: "0.5rem",
              lineHeight: "1.5rem",
              backgroundColor: "#191919",
              borderRadius: "0.5rem",
              color: "#fff",
            }}
            value={output}
            onChange={(e) => setOutput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
