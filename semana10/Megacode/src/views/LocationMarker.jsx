import { useMapEvents, Marker } from "react-leaflet";

export default function LocationMarker({ position, setPosition }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  });

  return <>{position && <Marker position={position}></Marker>}</>;
}
