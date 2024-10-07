// Ensure you have the Mapbox token correctly set
mapboxgl.accessToken = mapToken; // mapToken should be defined earlier in your code

// Initialize the Mapbox map
const map = new mapboxgl.Map({
  container: "map", // The ID of the HTML element to attach the map to
  style: "mapbox://styles/mapbox/streets-v11", // Mapbox style
  center: listing.geometry.coordinates, // Default map center [longitude, latitude]
  zoom: 12, // Initial zoom level
});

// Create a new marker and add it to the map
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) // Use coordinates from your data
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.title}</h3><p>Exact Location will be provided after booking`
    )
  )
  .addTo(map);
