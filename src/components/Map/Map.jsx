import React, { useEffect } from 'react';
import { load } from '@google/maps';

function Map({ apiKey }) {
  useEffect(() => {
    load({
      key: apiKey,
      callback: function () {
        // Initialize the map
        const map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
      }
    });
  }, [apiKey]);

  return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default Map;