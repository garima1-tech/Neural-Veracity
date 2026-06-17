import React from "react";

export default function ResultCard({ result }) {
  return (
    <div className="result-card">
      <h2>{result.label}</h2>
      <p>Confidence: {result.confidence}%</p>

      {result.details && (
        <div>
          <p>RoBERTa Score: {result.details.roberta_score}</p>
          <p>CLIP Score: {result.details.clip_score}</p>
        </div>
      )}
    </div>
  );
}
