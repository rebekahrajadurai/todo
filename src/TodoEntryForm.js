import { useState } from "react";
import { v4 } from "uuid";

export default function TodoEntryForm({ adder }) {
  const [content, setContent] = useState("");
  function submit(e) {
    e.preventDefault();
    adder({ id: v4(), content });
    setContent("");
  }
  return (
    <form onSubmit={submit}>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
