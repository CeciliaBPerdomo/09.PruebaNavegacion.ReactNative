import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Detalle" onPress={() => navigation.navigate("DetailsScreen", { id: 1 })}></Button>
    </View>
  );
}

const DetailsScreen = ({ navigation, route }) => {
  const params = route.params //const {id} = route.params
  //console.log(params)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Producto: {params.id}</Text>
      <Button title="volver" onPress={() => navigation.goBack()}></Button>
    </View>
  );
}

const Header = ({ title }) => {
  return (
    <View style={{
      width: "100%",
      height: 100,
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Text style={{
        fontWeight: "bold",
        fontSize: 24,
      }}>
        {title}
      </Text>
    </View>
  )
}

const App = () => {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => {
            return {
              header: () => {
                return <Header
                  // title="Bienvenidos"
                  title={route.name === "Home" ? "Bienvenido" : route.name
                    // route.params.id
                    // route.name === "DetailsScreen" ? route.name : "Otra pantalla"
                  }
                />
              }
            }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
