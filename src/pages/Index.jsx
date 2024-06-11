import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Box } from "@chakra-ui/react";
import L from "leaflet";
import BuildingInfoCard from "../components/BuildingInfoCard";

const buildings = [
  { id: 1, name: "Building 1", temperature: 22, humidity: 45, co2: 400 },
  { id: 2, name: "Building 2", temperature: 21, humidity: 50, co2: 420 },
  { id: 3, name: "Building 3", temperature: 23, humidity: 40, co2: 410 },
  { id: 4, name: "Building 4", temperature: 20, humidity: 55, co2: 430 },
  { id: 5, name: "Building 5", temperature: 24, humidity: 35, co2: 390 },
  { id: 6, name: "Building 6", temperature: 22, humidity: 45, co2: 400 },
  { id: 7, name: "Building 7", temperature: 21, humidity: 50, co2: 420 },
  { id: 8, name: "Building 8", temperature: 23, humidity: 40, co2: 410 },
  { id: 9, name: "Building 9", temperature: 20, humidity: 55, co2: 430 },
  { id: 10, name: "Building 10", temperature: 24, humidity: 35, co2: 390 },
];

const generateRandomPosition = () => {
  const lat = 59.91 + Math.random() * 0.05;
  const lng = 10.75 + Math.random() * 0.05;
  return [lat, lng];
};

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const handleMarkerClick = (building) => {
    setSelectedBuilding(building);
  };

  const pinIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  return (
    <Box height="100vh" width="100vw">
      <MapContainer center={[59.91, 10.75]} zoom={12} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map((building) => {
          const position = generateRandomPosition();
          return (
            <Marker
              key={building.id}
              position={position}
              icon={pinIcon}
              eventHandlers={{
                click: () => handleMarkerClick(building),
              }}
            >
              <Popup>{building.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <BuildingInfoCard building={selectedBuilding} />
    </Box>
  );
};

export default Index;