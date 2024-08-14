import React, { useState, useEffect } from 'react';

const Search = () => {
  const [displayedText, setDisplayedText] = useState("Search for ");
  const words = ['"Skating Class"', '"Football Turf"', '"Running Event"'];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 1500;

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText("Search for " + currentWord.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText("Search for " + currentWord.substring(0, charIndex - 1));
        charIndex--;
        setTimeout(type, erasingSpeed);
      } else if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenWords);
      } else if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => {
      setDisplayedText("Search ");
    };
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
      <input
        type="text"
        className="search-input"
        placeholder={displayedText}
        style={{ paddingRight: '40px', backgroundColor:"rgb(239, 241, 243)"}}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="search-icon"
        style={{ position: 'absolute', right: '5px',  }}
        >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
};

export default Search;
