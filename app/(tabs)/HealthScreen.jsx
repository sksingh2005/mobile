import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import NeoBrutalismCard from '../components/NeoBrutalismCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking } from 'react-native';



export default function HealthScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <Image
        source={{ uri: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg2OC1zYXNpLTA2LmpwZw.jpg" }}
        resizeMode="cover"
        style={styles.backgroundImage}

      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <NeoBrutalismCard style={styles.card}>
          <Text style={styles.title}>Wellness Check</Text>
          <View style={styles.wellnessItem}>
            <Text style={styles.itemTitle}>Hours Worked Today</Text>
            <Text style={styles.itemValue}>6.5 / 8</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: '81.25%' }]} />
            </View>
          </View>
        </NeoBrutalismCard>

        <NeoBrutalismCard style={styles.card}>
          <Text style={styles.title}>Rest Breaks</Text>
          <View style={styles.breaksList}>
            <View style={styles.breakItem}>
              <Text style={styles.breakTime}>10:30 AM</Text>
              <Text style={styles.breakDuration}>15 min</Text>
              <Text style={styles.breakStatus}>✅ Completed</Text>
            </View>
            <View style={styles.breakItem}>
              <Text style={styles.breakTime}>1:00 PM</Text>
              <Text style={styles.breakDuration}>30 min</Text>
              <Text style={styles.breakStatus}>⏰ Due</Text>
            </View>
          </View>
        </NeoBrutalismCard>
       

        <NeoBrutalismCard style={styles.card}>
          <Text style={styles.title}>Helpful Resources</Text>

          <Text style={styles.linkTitle}>📄 Article:Recent news at giggy world</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.mindful.org/mindfulness-at-work/')}
          >
            Read article
          </Text>

          <Text style={[styles.linkTitle, { marginTop: 16 }]}>🎥 YouTube:How to increase rating</Text>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=8BcPHWGQO44')}
          >
            Watch on YouTube
          </Text>
        </NeoBrutalismCard>


        <View style={styles.health}>
          <Image
            source={{ uri: 'https://www.shutterstock.com/image-vector/male-doctor-smiling-happy-face-600nw-2481032615.jpg' }}
            resizeMode="cover"
            style={{ width: 70 }}
          />
          <Text style={styles.title}>Resources</Text>
          <View style={styles.resourcesList}>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceTitle}>Mental Health Support</Text>
              <Text style={styles.resourceDesc}>24/7 counseling services</Text>
            </View>
            <View style={styles.resourceItem}>
              <Text style={styles.resourceTitle}>Physical Wellness</Text>
              <Text style={styles.resourceDesc}>Ergonomic tips & exercises</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(58, 131, 244, 0.4)',
    padding: 16,
  },
  card: {
    marginBottom: 16,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  wellnessItem: {
    marginBottom: 12,
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  itemValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    height: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#2ECC71',
  },
  breaksList: {
    gap: 12,
  },
  breakItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  breakTime: {
    fontSize: 16,
    fontWeight: '500',
  },
  breakDuration: {
    fontSize: 16,
  },
  breakStatus: {
    fontSize: 16,
  },
  resourcesList: {
    gap: 16,
  },
  resourceItem: {
    backgroundColor: '#FFE5E5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  resourceDesc: {
    fontSize: 14,
    color: '#666',
  },
  health: {
    backgroundColor: 'green',
    height: 300,
    borderRadius: 12,
    padding: 20,

  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Covers the whole screen
    opacity: 0.2, // Low opacity for background
    zIndex: -1
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  link: {
    fontSize: 14,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  
});