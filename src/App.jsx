import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Header stays outside Routes so it renders on every page */}
        <Header />

        <main className="main-content">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Placeholder for Country Detail Page (Part 3) */}
            <Route
              path="/country/:name"
              element={<div>Country Detail Placeholder</div>}
            />

            {/* Placeholder for Favourites Page (Part 5) */}
            <Route
              path="/favourites"
              element={<div>Favourites Placeholder</div>}
            />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
