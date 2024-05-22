import "./App.css";
import Home from "./component/home/Home";
import TrackDetails from "./component/shipmentTracking/track-details/TrackDetails";
import ShipmentTracking from "./component/shipmentTracking/shipment-tracking/ShipmentTracking";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./utils/localization/i18n";
import { useTranslation } from "react-i18next";
import Layout from "./component/layout-component/layout/Layout";

function App() {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/shipment-tracking" element={<ShipmentTracking />} />
            <Route
              path="/shipment-tracking-details/:id"
              element={<TrackDetails />}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
