import { FlatList, StyleSheet, Image, Text, View } from 'react-native'
import ProductCard, { Product } from '../components/ProductCard';

const products: Product[] = [
  {
    id: '1',
    name: 'Hambúrguer artesanal',
    restaurant: 'Brasa Burger',
    description: 'Pão brioche, carne 180g, queijo e molho da casa',
    price: 'R$ 29,90',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    deliveryTime: '25-35 min',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Pizza margherita',
    restaurant: 'Forno da Vila',
    description: 'Molho de tomate, muçarela, manjericão e azeite',
    price: 'R$ 42,90',
    imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    deliveryTime: '35-45 min',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Poke salmão',
    restaurant: 'Fresh Bowl',
    description: 'Arroz japonês, salmão, manga, pepino e gergelim',
    price: 'R$ 36,90',
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    deliveryTime: '20-30 min',
    rating: 4.6,
  },
];

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={{ width: 120, height: 60, marginBottom: 20 }} />
      <Text style={styles.title}>Encontre as melhores comidas</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  listContent: {
    gap: 16,
    paddingBottom: 20,
  },
  title: {
    color: '#FF5A1F',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
});
