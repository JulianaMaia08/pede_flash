import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Nav from './src/components/Nav'

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
