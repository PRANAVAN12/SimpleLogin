import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {};

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/orange.png')}
      />
      <View style={styles.inputView}>
        <TextInput
          value={username}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          value={password}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.instagramButton}>
        <Text style={styles.buttonText}>Login With Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#fda371',
    paddingVertical: 8,
    paddingHorizontal: 64,
    marginBottom: 16,
  },
  instagramButton: {
    borderRadius: 8,
    backgroundColor: '#67b5fa',
    paddingVertical: 8,
    paddingHorizontal: 64,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputView: {
    backgroundColor: '#f1f3f4',
    borderRadius: 12,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    marginBottom: 40,
    borderRadius: 12,
    width: 200,
    height: 200,
  },
});

export default LoginScreen;
