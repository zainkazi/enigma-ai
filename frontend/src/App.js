import "./App.css";
import React, { useState } from "react";
import Home from "./Dashboard/Home";
import ImageCreationPage from "./ImageCreation/ImageCreationPage";
import ProgressNavBar from "./ProgressNavBar";
import SpeechGenerationPage from "./SpeechGeneration/SpeechGenerationPage";

function App() {
  return (
    <div>
      <ImageCreationPage />
    </div>
  );
}

export default App;
