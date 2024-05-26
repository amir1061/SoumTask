import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { productData } from './data';

const ProductTreeView = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleToggle = (category, brand, model, variant) => {
    const selection = { category, brand, model, variant };
    const isSelected = selectedProducts.some(
      (item) =>
        item.category === category &&
        item.brand === brand &&
        item.model === model &&
        item.variant === variant
    );

    if (isSelected) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter(
          (item) =>
            !(
              item.category === category &&
              item.brand === brand &&
              item.model === model &&
              item.variant === variant
            )
        )
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, selection]);
    }
  };

  return (
    <ScrollView>
      {productData.map((category) => (
        <View key={category.category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.category}</Text>
          {category.brands.map((brand) => (
            <View key={brand.name} style={styles.brandContainer}>
              <Text style={styles.brandTitle}>{brand.name}</Text>
              {brand.models.map((model) => (
                <View key={model.name} style={styles.modelContainer}>
                  <Text style={styles.modelTitle}>{model.name}</Text>
                  {model.variants.map((variant) => (
                    <CheckBox
                      key={variant}
                      title={variant}
                      checked={selectedProducts.some(
                        (item) =>
                          item.category === category.category &&
                          item.brand === brand.name &&
                          item.model === model.name &&
                          item.variant === variant
                      )}
                      onPress={() =>
                        handleToggle(
                          category.category,
                          brand.name,
                          model.name,
                          variant
                        )
                      }
                      containerStyle={styles.variantContainer}
                    />
                  ))}
                </View>
              ))}
            </View>
          ))}
        </View>
      ))}
      <View style={styles.selectedVariantsContainer}>
        <Text>Selected Variants:</Text>
        {selectedProducts.map((product, index) => (
          <Text key={index}>
            {`${product.category} > ${product.brand} > ${product.model} > ${product.variant}`}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  brandContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },
  modelContainer: {
    marginLeft: 40,
    marginBottom: 5,
  },
  variantContainer: {
    marginLeft: 60,
  },
  selectedVariantsContainer: {
    marginTop: 20,
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  brandTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  modelTitle: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default ProductTreeView;
