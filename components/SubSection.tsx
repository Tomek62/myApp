import React, { useState } from 'react';
import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { ThemedText } from './ThemedText';

export function SubSection({ children, title }: { children?: React.ReactNode; title?: string }) {
  const [textWidth, setTextWidth] = useState(0);

  const handleTextLayout = (event: LayoutChangeEvent) => {
    setTextWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {/* Titre qui mesure sa largeur */}
        <ThemedText type="defaultSemiBold" onLayout={handleTextLayout} style={styles.title}>
          {title}
        </ThemedText>
        
        {/* Barre orange qui fait 80% de la largeur du texte */}
        <View style={[styles.underline, { width: textWidth * 0.8 }]} />
      </View> 

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'flex-start', 
    marginBottom: 20, 
  },
  title: {
    textAlign: 'left',
  },
  underline: {
    height: 4, 
    backgroundColor: '#FFCF82', 
    marginTop: 4, 
    borderRadius: 2, 
  },
});
