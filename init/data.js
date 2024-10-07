const sampleListings = [
  {
    title: "Secluded Treehouse in the Woods",
    description:
      "Immerse yourself in nature with this secluded treehouse. Perfect for a peaceful retreat and star-gazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 950,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231], // Longitude, Latitude for Portland
    },
  },
  {
    title: "Oceanfront Villa in Bali",
    description:
      "Experience luxury at this oceanfront villa with private beach access and stunning sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Bali",
    country: "Indonesia",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095], // Longitude, Latitude for Bali
    },
  },
  {
    title: "Historic Home in Edinburgh",
    description:
      "Stay in a beautifully restored historic home in the heart of Edinburgh, close to iconic sites.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Edinburgh",
    country: "Scotland",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533], // Longitude, Latitude for Edinburgh
    },
  },
  {
    title: "Penthouse Overlooking the Eiffel Tower",
    description:
      "Enjoy panoramic views of the Eiffel Tower from this stunning penthouse apartment in Paris.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Paris",
    country: "France",
    geometry: {
      type: "Point",
      coordinates: [2.2945, 48.8584], // Longitude, Latitude for the Eiffel Tower in Paris
    },
  },
  {
    title: "Beach Bungalow in Thailand",
    description:
      "Relax in this beach bungalow with breathtaking ocean views, ideal for a tropical getaway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Phuket",
    country: "Thailand",
    geometry: {
      type: "Point",
      coordinates: [98.3913, 7.8804], // Longitude, Latitude for Phuket
    },
  },
  {
    title: "Modern Condo in Downtown Toronto",
    description:
      "Stay in a stylish, modern condo in the heart of Toronto, close to great dining and entertainment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Toronto",
    country: "Canada",
    geometry: {
      type: "Point",
      coordinates: [-79.3832, 43.6532], // Longitude, Latitude for Toronto
    },
  },
  {
    title: "Lakeside Cabin in Finland",
    description:
      "Escape to this cozy lakeside cabin in Finland, surrounded by serene natural beauty and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Helsinki",
    country: "Finland",
    geometry: {
      type: "Point",
      coordinates: [24.9414, 60.1699], // Longitude, Latitude for Helsinki
    },
  },
  {
    title: "Desert Oasis in Marrakech",
    description:
      "Discover a desert oasis with traditional Moroccan architecture and stunning views of the Atlas Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Marrakech",
    country: "Morocco",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295], // Longitude, Latitude for Marrakech
    },
  },
  {
    title: "Countryside Villa in Tuscany",
    description:
      "Relax in a beautiful villa in the Tuscan countryside, surrounded by vineyards and olive groves.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Tuscany",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696], // Longitude, Latitude for Tuscany
    },
  },
  {
    title: "Chic Apartment in Berlin",
    description:
      "Stay in this chic and modern apartment located in the trendy neighborhood of Berlin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Berlin",
    country: "Germany",
    geometry: {
      type: "Point",
      coordinates: [13.405, 52.52], // Longitude, Latitude for Berlin
    },
  },
];

module.exports = { data: sampleListings };
