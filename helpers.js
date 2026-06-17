import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import ImageUpload from "../components/ImageUpload";
import { analyzeNews } from "../services/api";

export default function Home() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("text", text);
  if (image) formData.append("image", image);

  setLoading(true);

  try {
    const res = await analyzeNews(formData);

    // ✅ show result on screen
    setResult(res.data);

    // ✅ SAVE TO HISTORY (THIS is what I meant)
    const newEntry = {
      text,
      label: res.data.label,
      confidence: res.data.confidence,
      timestamp: new Date().toISOString(),
    };

    const existing =
      JSON.parse(localStorage.getItem("newsHistory")) || [];

    localStorage.setItem(
      "newsHistory",
      JSON.stringify([newEntry, ...existing])
    );

  } catch (err) {
    alert("Backend not connected properly");
  }

  setLoading(false);
};

  return (
    <div>
      <Navbar />

      <div className="container">
        <h1>Fake News Detection (AI)</h1>

        <textarea
          placeholder="Paste news text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <ImageUpload
          setImage={setImage}
          preview={preview}
          setPreview={setPreview}
        />

        <button onClick={handleSubmit}>
          {loading ? "Analyzing..." : "Analyze News"}
        </button>

        {loading && <Loader />}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );

}