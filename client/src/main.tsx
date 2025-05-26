
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import './App.css';
import Header from "./components/header/header";
import Dashboard from "./pages/Dashboard/dashboard";
import Library from "./pages/Library/library";
import ReadingList from "./pages/ReadingList/readingList";
import Stories from "./pages/Stories/stories";


const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:tags" element={<Stories />} />
          <Route path="/library" element={<Library />} />
          <Route path="/lists" element={<ReadingList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}

