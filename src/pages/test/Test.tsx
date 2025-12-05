import { useState } from "react"

const Test = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Bạn nhập: {text}</p>
    </div>
  );
};
export default Test