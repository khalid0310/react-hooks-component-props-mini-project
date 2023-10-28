import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const yourArticleData = [
  {
    title: "Introduction to React",
    date: "October 1, 2023",
    preview: "Learn the basics of React and how to get started.",
  },
  {
    title: "State Management in React",
    date: "October 2, 2023",
    preview: "Explore state management techniques in React applications.",
  },
  {
    title: "React Components Best Practices",
    date: "October 3, 2023",
    preview: "Tips and best practices for building reusable React components.",
  },

];


function App() {
  return (
    <div className="App">
      <Header blogName="My React Blog" />
      <About
  aboutText="Welcome to my React blog! Dive into the world of React and explore the latest techniques, best practices, and amazing projects created with React"
  aboutImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
/>
      
      <ArticleList articles={yourArticleData} />
    </div>
  );
}

export default App;
