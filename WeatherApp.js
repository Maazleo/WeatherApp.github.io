// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// import axios from 'axios';

// const WeatherApp = () => {
//   const [location, setLocation] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchWeather = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=YOUR_API_KEY`
//       );
//       setWeather(response.data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter location..."
//         value={location}
//         onChangeText={(text) => setLocation(text)}
//       />
//       <Button title="Search" onPress={fetchWeather} />
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : weather ? (
//         <View>
//           <Text>Location: {weather.name}</Text>
//           <Text>Temperature: {weather.main.temp}°C</Text>
//           <Text>Description: {weather.weather[0].description}</Text>
//         </View>
//       ) : null}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default WeatherApp;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather App</Text>
      <Text style={styles.temperature}>25°C</Text>
      <Text style={styles.description}>Sunny</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  temperature: {
    fontSize: 48,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
  },
});

export default WeatherApp;
