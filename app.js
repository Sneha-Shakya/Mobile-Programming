import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';


export default function App() {
  const [search, setSearch] = useState('');

   return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
      <Text style={{ fontFamily: 'sans-serif-medium', fontSize: 33, fontWeight: 'bold' }}>
        GlowUp Beauty</Text>

        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🛒</Text>
          <Text style={styles.icon}>🔔</Text>
          <Text style={styles.icon}>👤</Text>
        </View>
      </View>

      {/* Search Bar Below Title */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
      />
      
      {/* Overview Cards */}
      <View style={styles.overviewRow}>
        <Card style={[styles.card, {backgroundColor: '#FDE2F3'}]}>
          <Text style={styles.cardText}>Total Products: 320</Text>
        </Card>
        <Card style={[styles.card, {backgroundColor: '#E2F7FD'}]}>
          <Text style={styles.cardText}>Total Orders: 125</Text>
        </Card>
        <Card style={[styles.card, {backgroundColor: '#FFF3E2'}]}>
          <Text style={styles.cardText}>Today's Sales: $1,520</Text>
        </Card>
        <Card style={[styles.card, {backgroundColor: '#EDE2FD'}]}>
          <Text style={styles.cardText}>Active Offers: 5</Text>
        </Card>
      </View>

      {/* Top Products */}
      <Text style={styles.sectionTitle}>Top Selling Products</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <Card style={[styles.productCard, {backgroundColor: '#FFDDE2'}]}>
          <Image source={
            {uri: 'https://www.guerlain.com/dw/image/v2/BDCZ_PRD/on/demandware.static/-/Sites-GSA_US_Catalog/default/dwe5221c66/02-PLP-Icons/MAKEUP/2026/SPRING-26_THUMBNAIL_TAP_RG.jpg?sw=120&sh=120'}
            } style={styles.productImage}/>
          <Text>Luxury Lipstick</Text>
          <Text>Rs.2200</Text>
        </Card>
        <Card style={[styles.productCard, {backgroundColor: '#DDEEFF'}]}>
          <Image source={{uri: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/b/bbe1986DOTKE00000424_1a.jpg'}
        } style={styles.productImage}/>
          <Text>Hydrating Serum</Text>
          <Text>Rs.900</Text>
        </Card>
        <Card style={[styles.productCard, {backgroundColor: '#FFEEDB'}]}>
          <Image source={{uri: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/3/a398c6030079236_MME-newadd_1.jpg'}
        } style={styles.productImage}/>
          <Text>Volumizing Mascara</Text>
          <Text>Rs.1250</Text>
        </Card>
      </ScrollView>

      {/* New Arrivals */}
      <Text style={styles.sectionTitle}>New Arrivals</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <Card style={[styles.productCard, {backgroundColor: '#FDE2F3'}]}>
          <Image source={{uri: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/c/1cb6d01PLUMX00001107_1.jpg'}} style={styles.productImage}/>
          <Text>Rose Glow Cream</Text>
          <Text>Rs.799</Text>
        </Card>
        <Card style={[styles.productCard, {backgroundColor: '#E2F7FD'}]}>
          <Image source={{uri: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/8/58f72865060542721547_1.jpg'}} style={styles.productImage}/>
          <Text>Nude Eyeshadow Palette</Text>
          <Text>Rs.650</Text>
        </Card>
      </ScrollView>

      {/* Categories */}

      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categoriesRow}>
        <Card style={[styles.categoryCard, {backgroundColor: '#FFDDE2'}]}><Text>Skincare</Text></Card>
        <Card style={[styles.categoryCard, {backgroundColor: '#DDEEFF'}]}><Text>Makeup</Text></Card>
        <Card style={[styles.categoryCard, {backgroundColor: '#FFEEDB'}]}><Text>Haircare</Text></Card>
        <Card style={[styles.categoryCard, {backgroundColor: '#EDE2FD'}]}><Text>Fragrance</Text></Card>
      </View>

      {/* Recent Orders */}
      <Text style={styles.sectionTitle}>Recent Orders</Text>
      <Card style={[styles.listCard, {backgroundColor: '#FFF0F5'}]}>
        <Text>#1023 Face Cream - Delivered</Text>
        <Text>#1022 Lipstick - Shipped</Text>
        <Text>#1020 Hair Serum - Pending</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5FA',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginVertical: 10,
    elevation: 3,
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    fontSize: 22,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
  },
  cardText: {
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  horizontalScroll: {
    marginBottom: 15,
  },
  productCard: {
    width: 120,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    borderRadius: 12,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius: 8,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: '23%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
  },
  listCard: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },
});
