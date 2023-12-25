import "./App.css";
import HistorySection from "./components/HistorySection";
import PresentationCard from "./components/PresentationCard";

function App() {
  return (
    <div className="d-flex App">
      <PresentationCard />
      <div className="m-3">
        <h1 className="h1-century-gothic">CURRICULUM VITAE - BRUNO VINCENZI</h1>
        <HistorySection />
      </div>
    </div>
  );
}

export default App;
