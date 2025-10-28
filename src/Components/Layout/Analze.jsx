import React, { useState } from "react";
import { Textarea } from "/src/Components/ui/textarea";
import { Button } from "/src/Components/ui/button";
import Container from "../Conatiner";

const Analze = () => {
const [text, setText] = useState("");

const handleText = (e) => setText(e.target.value);
const handleUpClick = () => setText(text.toUpperCase());
const handleLowClick = () => setText(text.toLowerCase());
const handleCapitalizeClick = () => {
const newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
setText(newText);
};
const handleClearClick = () => setText("");

const wordCount = text.trim() === "" ? 0 : text.split(/\s+/).length;
const readingTime = (wordCount * 0.008).toFixed(2);

return (
<div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 min-h-screen">
<Container>
<div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 transition-all">
<h1 className="text-4xl font-extrabold text-center text-blue-600 underline underline-offset-8 mb-6">
Text Analyzer
</h1>
<p className="text-gray-700 text-center mb-10 text-lg">
Enter your text below and perform quick text transformations.
</p>

      <Textarea
        className="min-h-[200px] bg-gray-50 border-2 border-blue-100 focus:border-blue-400 focus:ring-2 focus:ring-blue-300 rounded-xl p-4 text-gray-800 font-medium resize-none transition-all"
        value={text}
        onChange={handleText}
        placeholder="Type or paste your text here..."
      />

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
          onClick={handleUpClick}
        >
          Uppercase
        </Button>
        <Button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
          onClick={handleLowClick}
        >
          Lowercase
        </Button>
        <Button
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </Button>
        <Button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
          onClick={handleClearClick}
        >
          Clear
        </Button>
      </div>

      <div className="mt-10 text-gray-800">
        <h2 className="text-2xl font-bold mb-3 text-blue-700">
          Text Summary
        </h2>
        <p className="text-lg">
          <span className="font-semibold text-blue-600">{wordCount}</span>{" "}
          words and{" "}
          <span className="font-semibold text-blue-600">{text.length}</span>{" "}
          characters
        </p>
        <p className="text-gray-600">
          Reading time:{" "}
          <span className="font-medium">{readingTime} minutes</span>
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-2 text-blue-700">
          Preview
        </h3>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 min-h-[100px]">
          <p className="text-gray-700 whitespace-pre-wrap">
            {text.length > 0 ? text : "Nothing to preview."}
          </p>
        </div>
      </div>
    </div>
  </Container>
</div>


);
};
export default Analze;