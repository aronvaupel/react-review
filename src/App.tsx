import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Home, Login } from "./pages";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="grow flex">
        <Sidebar />
        <main className="p-4 grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
