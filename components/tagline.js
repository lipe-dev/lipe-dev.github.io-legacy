import cn from "classnames";
import { useEffect, useState } from "react";

const taglines = [
  ["I'm the dev guy", "Billie"],
  ["I'm all about that codebase", "Meghan"],
  ["Give me bugs, give me fires, give me that which I desire", "Metallica"],
  ["Use the fork, Lipe", "Yoda (Star Wars)"],
  ["Go home and be a coding man", "Guile (Street Fighter)"],
  ["Go ahead, code my day", "Clint (Sudden Impact)"],
  ["You can't handle the === true", "Jack (A few good men)"],
  ["You're gonna need a bigger code", "Roy (Jaws)"],
  ["I'll be back-end", "Arnold (The Terminator)"],
  ["Keep your code close, and your bugs closer", "Al (The Godfather)"],
  ["I feel the need - the need for script", "Tom (Top Gun)"],
  ["I'll make you a code you can't refuse", "Marlon (The Godfather II)"],
  ["The code is a lie", "Doug (Portal)"],
  ["You have died of Synchrony", "Narrator (Oregon Trail)"],
  ["Stay a while, and add a listener", "Decard (Diablo)"],
  ["A man codes, a program obeys", "Andrew (Bioshock)"],
  ["Stalebranch hungers", "Arthas (Warcraft)"],
  ["He works with computers!", "Mom"],
  ["Son, are you coding?", "Dad"],
  ["With great UX comes great usability", "Uncle Ben (Spider-Man)"],
  ["HULK CRASH", "The Hulk (The Hulk)"],
  ["Thank you, but our diff is in another patch", "Toad (Super Mario)"],
  ["Die monster! You don't belong in this code", "Richter (Castlevania)"],
  [
    "I can't code the script out of you without getting closer",
    "Jotaro (Jojo's)",
  ],
  ["Your next line of code will be...", "Joseph (Jojo's)"],
  ["Koichi really writes no tests... no dignity", "Josuke (Jojo's)"],
];

export default function Tagline({ home }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex(Math.floor(Math.random() * taglines.length));
    }, 5000);
  }, []);

  return (
    <blockquote
      className={cn(
        "border-l-4",
        "border-gray-200",
        "px-3",
        "italic",
        home ? "text-md sm:text-xl" : "text-md",
        { "ml-4": !home },
        !home && "flex flex-col justify-center"
      )}
    >
      {taglines[index][0]} <br />
      <small className="not-italic pl-3">{taglines[index][1]}</small>
    </blockquote>
  );
}
