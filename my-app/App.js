import { useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';

const ImagenExterna = {uri: "https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
const ImagenExternaPerfil = {uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [styleTexto, setStyleTexto] = useState("text");

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  const changeText = (e) => setTextInput(e);
  const alertaTexto = () => {
    if (textInput === "") {
      alert("Debe ingresar algo");
    } else {
      alert(textInput);
    }
  };
  const cambiarColorTexto = () => {
    setStyleTexto(style => (style == 'text' ? 'text2' : 'text'));
  };

  return (
    <>
      <View style={styles.statusBarBackground} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={ImagenExterna} style={styles.backgroundPrin}>
          <View style={styles.contenedorInfo}>
            <View style={styles.containerSec}>
              <ImageBackground source={ImagenExternaPerfil} style={styles.backgroundSec} />
              <Text style={[styles[styleTexto], styles.font30]}>Desarrollador Frontend</Text>
            </View>
            <View style={styles.containerSec}>
              <Text style={styles[styleTexto]}>Ingrese un comentario</Text>
              <TextInput
                style={styles.input}
                placeholder="Escribe tu comentario"
                onChangeText={changeText}
              />
              <TouchableOpacity style={styles.boton} onPress={alertaTexto}>
                <Text style={styles[styleTexto]}>Contactar</Text>
              </TouchableOpacity>
              <Pressable
                style={({ pressed }) => [
                  styles.boton,
                  { backgroundColor: pressed ? 'gray' : 'green' },
                ]}
                onPress={cambiarColorTexto}
              >
                <Text style={styles[styleTexto]}>Ver Portfolio</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundPrin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: 'black',
  },
  text2: {
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: 'yellow',
  },
  backgroundSec: {
    justifyContent: 'center',
    borderRadius: 75,
    marginBottom: 15,
    width: 150,
    height: 150,
    overflow: 'hidden',
    marginBottom: 0,
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 20,
  },
  containerSec: {
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: 'orange',
  },
  font30: {
    fontSize: 30,
  },
  labelText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'black',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  boton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  contenedorInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  botonPresionado: {
    shadowOpacity: 10,
    shadowColor: "green",
  },
  statusBarBackground: {
    height: 50,
    backgroundColor: 'orange',
  },
});
