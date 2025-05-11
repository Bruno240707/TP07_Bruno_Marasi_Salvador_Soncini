import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput, Pressable } from 'react-native';

const ImagenExterna = {uri: "https://images.unsplash.com/photo-1746645012316-39ef59320d9b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
const ImagenExternaPerfil = {uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}

export default function App() {

  const [textInput, setTextInput] = useState("")
  const [colorTexto, setColorTexto] = useState("white")

  const changeText = (e) => {
    setTextInput(e)
  }

  const alertaTexto = () =>{
    alert(textInput)
  }

  const cambiarColorTexto = () =>{
    setColorTexto(color => (color == 'white' ? 'yellow' : 'white'))
  }

  return (
  <>
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="transparent"/>
      <ImageBackground source={ImagenExterna} style={styles.backgroundPrin}>
        <View style={styles.containerSec}>
          <ImageBackground source={ImagenExternaPerfil} style={styles.backgroundSec}></ImageBackground>
          <Text style={[styles.text, {color: colorTexto}]}>Desarrollador Frontend</Text>
        </View>

        <View style={styles.containerSec}>
          <Text style={[styles.labelText, {color: colorTexto}]}>Ingrese un comentario</Text>
          <TextInput style={styles.input} placeholder='Escribe tu comentario' onChangeText={changeText}/>
          <TouchableOpacity style={styles.boton} onPress={alertaTexto}>
            <Text style={{color: colorTexto}}>Contactar</Text>
          </TouchableOpacity>

          <Pressable style={styles.boton} onPress={cambiarColorTexto}>
            <Text style={{color: colorTexto}}>
              Cambiar color texto
            </Text>
          </Pressable>

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
    justifyContent: 'center'
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
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
    borderWidth: 3
  },
  containerSec: {
    alignItems: 'center'
  },
  statusBar: {
    backgroundColor: 'orange'
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
    marginTop: 20
  }
});
