import { useEffect, useState } from "react";
import { TextArea } from "./components";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [value, setValue] = useState("");
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    let debounceTimer;

    if (value) {
      debounceTimer = setTimeout(() => {
        const words = value.split(" ");
        for (let word of words) {
          if (customDictionary[word.toLowerCase()]) {
            const correctValue = customDictionary[word.toLowerCase()];
            setSuggestion(correctValue);
            break; // Exiting the loop
          }
        }
      }, 2000);
    } else {
      setSuggestion("");
    }

    return () => clearTimeout(debounceTimer);
  }, [value]);

  return (
    <>
      <h1>Spell Check And Auto-Correction</h1>
      <TextArea value={value} setValue={setValue} />
      {suggestion && (
        <p>
          Did you mean: <strong>{suggestion}</strong>?
        </p>
      )}
    </>
  );
}

export default App;
