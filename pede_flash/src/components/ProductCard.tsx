import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export type Product = {
  id: string;
  name: string;
  restaurant: string;
  description: string;
  price: string;
  imageUrl: string;
  deliveryTime: string;
  rating: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Pressable style={styles.card}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.restaurant}>{product.restaurant}</Text>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.meta}>{product.rating.toFixed(1)} • {product.deliveryTime}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  image: {
    width: '100%',
    height: 140,
  },
  content: {
    gap: 5,
    padding: 12,
  },
  restaurant: {
    color: '#777777',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    color: '#222222',
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    color: '#666666',
    fontSize: 14,
  },
  price: {
    color: '#FF5A1F',
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meta: {
    color: '#777777',
    fontSize: 13,
    fontWeight: '600',
  },
});
