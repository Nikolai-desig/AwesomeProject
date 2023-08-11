import { StatusBar } from "expo-status-bar";
import {ImageBackground, StyleSheet, Text, View } from "react-native";
// import bgImage from '/Photo BGbg_photo.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/bg_photo2x.png')} resizeMode="cover" style={styles.image}>
        <Text style={styles.textStyle}>Inside</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}
