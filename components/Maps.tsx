import { useState } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Maps = ({searchResults}: any) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result: any) => ({
    longitude: result.long,
    latitude: result.lat
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/daele/clbaovm5l000r15qiny9oj0ys"
      mapboxAccessToken={'pk.eyJ1IjoiZGFlbGUiLCJhIjoiY2t3Z2poZGpzMHBkdjJucXRyMXU4Ym5lZSJ9.2kzcd9ze72pbF3ASgJWp8g'}
      {...viewport}
      onMouseMove={(nextViewport: any) => setViewport(nextViewport)}
      // onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result: any) => (
         <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              role="img"
            >📌</p>
          </Marker>

          {/* popup */}

          {
            selectedLocation.long === result.long ? (
              <Popup
                closeOnClick={true}
                onClose={() => setSelectedLocation({})}
                longitude={result.long}
                latitude={result.lat}
              >
                {result.title}
              </Popup>
            ): (false)
          }
         </div>
      ))}

    </ReactMapGL>
  );
};

export default Maps;
