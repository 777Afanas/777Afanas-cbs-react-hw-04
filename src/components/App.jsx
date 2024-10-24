import { useState } from "react";
import articles from "../articles.json";
import "./App.css";
import Controls from "./Controls";
import Progress from "./Progress";
import ArticleView from "./ArticleView";
import ClickTracker from "./ClickTracker";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  

  const handlePrev = () => {
    setSelectedIdx(selectedIdx - 1);
    // setTextColor(`${getRandomHexColor()}`)
  };

  const handleNext = () => {
    setSelectedIdx(selectedIdx + 1);
  };

 
  
  const visibleArticle = articles[selectedIdx];
  const isFirst = selectedIdx === 0;
  const isLast = selectedIdx === articles.length - 1;
  const current = selectedIdx + 1;
  const total = articles.length;

  return (
    <div>
      <Controls
        first={isFirst}
        last={isLast}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <Progress current={ current } total={ total } />
      <ArticleView article={visibleArticle} />
      <ClickTracker></ClickTracker>
    </div>
  );
}
