import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [dog, setDog] = useState('');

  const getDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDog(data.message));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getDog} style={styles.button}>
        <Text style={styles.buttonText}>Gerar Cachorro GARAIO</Text>
      </TouchableOpacity>

      {dog && <Image source={{ uri: dog }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#EA7F27', 
    padding: 10, 
    borderRadius: 8
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16
  },
  image: {
    width: 300, 
    height: 300, 
    marginTop: 20, 
    borderRadius: 12
  }
});
