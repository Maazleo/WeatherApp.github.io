import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CityScreen = ({ navigation, route }) => {
  const { city } = route.params;

  const weatherConditions = ['Sunny', 'Cloudy', 'Rainy'];

  const generateRandomWeatherData = () => {
    const temperatures = ['-5°C', '10°C', '20°C', '30°C', '35°C'];
    const humidities = ['40%', '50%', '60%', '70%', '80%'];

    const randomTemperature = temperatures[Math.floor(Math.random() * temperatures.length)];
    const randomHumidity = humidities[Math.floor(Math.random() * humidities.length)];
    const randomWeatherCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

    return {
      temperature: randomTemperature,
      humidity: randomHumidity,
      weatherCondition: randomWeatherCondition,
    };
  };

  const generateRandomWeeklyData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeklyData = [];

    for (let i = 0; i < 7; i++) {
      const randomTemperature = Math.floor(Math.random() * 30) + 20;
      const randomWeatherCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

      weeklyData.push({ day: days[i], temperature: `${randomTemperature}°C`, weatherCondition: randomWeatherCondition });
    }

    return weeklyData;
  };

  const weatherData = generateRandomWeatherData();
  const weeklyData = generateRandomWeeklyData();

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition.toLowerCase()) {
      case 'sunny':
        return 'https://example.com/sunny.png';
      case 'cloudy':
        return 'https://example.com/cloudy.png';
      case 'rainy':
        return 'https://example.com/rainy.png';
      default:
        return 'https://example.com/sunny.png';
    }
  };

  const renderWeatherItem = ({ item }) => {
    return (
      <View style={styles.weatherItem}>
        <Text style={styles.weekDay}>{item.day}</Text>
        <Image source={{ uri: getWeatherIcon(item.weatherCondition) }} style={styles.weatherIcon} resizeMode="contain" />
        <Text style={styles.temperatureText}>{item.temperature}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.cityName}>{city}</Text>
      <View style={styles.weatherContainer}>
        <Text style={styles.temperature}>{weatherData.temperature}</Text>
        <Image source={{ uri: getWeatherIcon(weatherData.weatherCondition) }} style={styles.weatherIcon} resizeMode="contain" />
        <Text style={styles.weatherCondition}>{weatherData.weatherCondition}</Text>
        <Text style={styles.humidity}>Humidity: {weatherData.humidity}</Text>
      </View>
      <Text style={styles.weeklyWeatherTitle}>Weekly Weather</Text>
      <FlatList
        data={weeklyData}
        renderItem={renderWeatherItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.weeklyWeatherContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
    color: '#000',
  },
  weatherContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  weatherCondition: {
    fontSize: 24,
    marginBottom: 10,
    color: '#000',
  },
  humidity: {
    fontSize: 16,
    color: '#000',
  },
  weeklyWeatherTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  weeklyWeatherContainer: {
    paddingHorizontal: 10,
  },
  weatherItem: {
    alignItems: 'center',
    marginRight: 10,
  },
  weekDay: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  temperatureText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CityScreen;
