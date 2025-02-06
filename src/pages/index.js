import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState("sideeye");

  let string = "bomb begin";
  let number = 0;
  let boolean = true;

  return (
    <div className="flex flex-col bg-yellow-50 min-h-screen ">
      <button className="font-bold text-4xl border-[2px] border-black w" onClick={() => setClick("bombastic")}>
        touch me
      </button>
      <p>{click}</p>
    </div>
  );
}