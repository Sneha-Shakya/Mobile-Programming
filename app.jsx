import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Dashboard from "./pages/Dashboard";
import ProductTable from "./components/ProductTable"

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
