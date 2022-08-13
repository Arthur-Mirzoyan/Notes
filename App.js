import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Components/HomeScreen/HomeScreen';
import { NewTaskScreen } from './Components/NewTaskScreen/NewTaskScreen';
import { SingleTask } from './Components/SingleTask/SingleTask';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor='white' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Welcome',
              headerShown: false
            }}
          />
          <Stack.Screen
            name="NewTask"
            component={NewTaskScreen}
            options={{
              title: 'Add a new task',
              headerTitleAlign: 'center',
              headerTintColor: '#5c695f',
              headerBackTitle: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: '#f1eae4',
              },
              headerTitleStyle: {
                color: '#5c695f'
              },
            }}
          />
          <Stack.Screen
            name="SingleTask"
            component={SingleTask}
            options={{
              title: 'Add a new task',
              headerTitleAlign: 'center',
              headerTintColor: '#5c695f',
              headerBackTitle: '',
              headerShown: true,
              headerStyle: {
                backgroundColor: '#f1eae4',
              },
              headerTitleStyle: {
                color: '#5c695f',
                fontWeight: '500',
                fontSize: 28
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}