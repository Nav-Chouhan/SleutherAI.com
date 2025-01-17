import React, { useEffect, useState } from "react";

function Typewriter({ text }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prevText) => prevText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayedText}</span>;
}

export default Typewriter;
