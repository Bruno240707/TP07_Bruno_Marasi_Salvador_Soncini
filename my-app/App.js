import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const ImagenExterna = {uri: "https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
const ImagenExternaPerfil = {uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

// Keep the splash screen visible while we fetch resources
/*SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});*/

export default function App() {

  //const [appIsReady, setAppIsReady] = useState(false);
  const [textInput, setTextInput] = useState("")
  const [styleTexto, setStyleTexto] = useState("text")

 /* useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  */

  const changeText = (e) => {
    setTextInput(e)
  }

  const alertaTexto = () =>{
    if(textInput == ""){
      alert("Debe ingresar algo")
    } else {
      alert(textInput)
    }
  }

  const cambiarColorTexto = () =>{
    setStyleTexto(style => (style == 'text' ? 'text2' : 'text'))
  }

  return (
  <>
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0066cc"
        translucent={true}
      />      
      <ImageBackground source={ImagenExterna} style={styles.backgroundPrin}>

      <View style={styles.contenedorInfo}>
        <View style={styles.containerSec}>
          <ImageBackground source={ImagenExternaPerfil} style={styles.backgroundSec}></ImageBackground>
          <Text style={[styles[styleTexto], styles.font30]}>Desarrollador Frontend</Text>
        </View>

        <View style={styles.containerSec}>

          <Text style={styles[styleTexto]}>Ingrese un comentario</Text>
          <TextInput style={styles.input} placeholder='Escribe tu comentario' onChangeText={changeText}/>

          <TouchableOpacity style={styles.boton} onPress={alertaTexto}>
            <Text style={styles[styleTexto]}>Contactar</Text>
          </TouchableOpacity>

          <Pressable style={({ pressed }) => [styles.boton, { backgroundColor: pressed ? 'gray' : 'green' },]} onPress={cambiarColorTexto}>
            <Text style={styles[styleTexto]}>
              Cambiar color text
            </Text>
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
    backgroundColor: 'black'
  },
  text: {
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: 'black'
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
    marginTop: 20
  },
  containerSec: {
    alignItems: 'center',
  },
  statusBar: {
    backgroundColor: 'orange'
  },
  font30: {
    fontSize: 30
  },
  labelText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: 'black'
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  boton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  text2: {
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: 'yellow',
  },
  contenedorInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  botonPresionado: {
    shadowOpacity: 10,
    shadowColor: "green"
  }
});
