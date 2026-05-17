import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomePage from '../pages/Home';
import { SearchPage } from './Search';

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View style={styles.screen}>
      <Text style={styles.screenTitle}>{title}</Text>
    </View>
  );
}


function OrdersPage() {
  return <PlaceholderScreen title="Pedidos" />;
}

function ProfilePage() {
  return <PlaceholderScreen title="Perfil" />;
}

export default function Nav() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FF5A1F ',
        tabBarInactiveTintColor: '#7a7a7a',
        tabBarStyle: [
          styles.tabBar,
          {
            height: 62 + insets.bottom,
            paddingBottom: Math.max(insets.bottom, 10),
          },
        ],
        tabBarLabelStyle: styles.tabLabel,
        tabBarItemStyle: styles.tabItem,
        tabBarIcon: ({ color, focused, size }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Search: focused ? 'search' : 'search-outline',
            Orders: focused ? 'receipt' : 'receipt-outline',
            Profile: focused ? 'person' : 'person-outline',
          } as const;

          return (
            <Ionicons
              name={icons[route.name as keyof typeof icons]}
              size={focused ? size + 2 : size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} options={{ title: 'Início' }} />
      <Tab.Screen name="Search" component={SearchPage} options={{ title: 'Busca' }} />
      <Tab.Screen name="Orders" component={OrdersPage} options={{ title: 'Pedidos' }} />
      <Tab.Screen name="Profile" component={ProfilePage} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingTop: 8,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eeeeee',
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  tabItem: {
    gap: 2,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5A1F',
  },
  screenTitle: {
    color: '#333333',
    fontSize: 22,
    fontWeight: '700',
  },
});
