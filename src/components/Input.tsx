import { createRef, useEffect, useState } from "react";

export default function Input() {
  const [input, setInput] = useState("");
  const lastRef = createRef<HTMLDivElement>();
  const cursorRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `-${cursorRef.current.offsetWidth + 2}px`;
    }
  }, [input]);

  const cursorOnDeleteLast = () => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `-${cursorRef.current.offsetWidth * 6}px`;
    }
  };

  return (
    <>
      <div className="font-semibold mb-4 text-lg select-none">
        Enter your password here:
      </div>
      <div
        className="border-2 cursor-text rounded-md flex flex-grow items-center gap-2 p-2 h-8 focus:border-fuchsia-800 transition-colors group"
        tabIndex={1}
        onKeyDown={(ev) => {
          switch (ev.key) {
            case "Enter":
              console.log(input);
              break;
            case "Backspace":
              if (!input) break;
              cursorOnDeleteLast();
              lastRef.current?.classList.remove("animate-grow");
              lastRef.current?.classList.add("animate-shrink");
              setTimeout(() => {
                setInput((input) => input.slice(0, -1));
              }, 75);
              break;
            default:
              if (ev.key.length === 1) {
                setInput((input) => input + ev.key);
              }
          }
        }}
      >
        {input.split("").map((_, key) => {
          const className =
            "animate-grow border-2 border-white bg-white rounded-full w-1.5 h-4 transition-opacity";
          const props =
            key === input.length
              ? {
                  className,
                  key,
                }
              : {
                  className,
                  key,
                  ref: lastRef,
                };
          return <div {...props} />;
        })}
        <div
          ref={cursorRef}
          className="relative transition-all w-min h-4 border-white border animate-pulse select-none"
        />
      </div>
    </>
  );
}
