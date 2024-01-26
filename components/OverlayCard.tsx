import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function OverlayCard() {
  return (
    <View>
      <Text style={styles.headingText}>Overlay Cards</Text>
      <View style={styles.overlayCardContainer}>
        <View style={styles.overlayCard}>
          <Image
            source={{uri: 'https://picsum.photos/250/250'}}
            style={styles.overlayCardImg}
          />
          <View style={styles.overlayCardArea}>
            <Text style={styles.overlayCardText}>CardTitle</Text>
          </View>
        </View>
        <View style={styles.overlayCard}>
          <Image
            source={{uri: 'https://picsum.photos/250/250'}}
            style={styles.overlayCardImg}
          />
          <View style={styles.overlayCardArea}>
            <Text style={styles.overlayCardText}>CardTitle</Text>
          </View>
        </View>
        <View style={styles.overlayCard}>
          <Image
            source={{uri: 'https://picsum.photos/250/250'}}
            style={styles.overlayCardImg}
          />
          <View style={styles.overlayCardArea}>
            <Text style={styles.overlayCardText}>CardTitle</Text>
          </View>
        </View>
        <View style={styles.overlayCard}>
          <Image
            source={{uri: 'https://picsum.photos/250/250'}}
            style={styles.overlayCardImg}
          />
          <View style={styles.overlayCardArea}>
            <Text style={styles.overlayCardText}>CardTitle</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  overlayCardContainer: {
    margin: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  overlayCard: {
    width: '46%',
    margin: 4,
  },
  overlayCardImg: {
    height: 150,
    width: '100%',
  },
  overlayCardArea: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.5,
    width: 150,
  },
  overlayCardText: {
    fontSize: 16,
    fontWeight: '600',
    padding: 4,
    color: '#fff',
  },
});
