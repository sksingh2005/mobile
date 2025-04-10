import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NeoBrutalismCard from '../components/NeoBrutalismCard';
import { LinearGradient } from 'expo-linear-gradient';
export default function LearnScreen() {
  return (
    <LinearGradient
    colors={['#2193b0','orange']}
    start={{x:0,y:0}}
    end={{x:1,y:1}}
    style={styles.container}
    
    
    
    >

  
    <ScrollView style={styles.container}showsVerticalScrollIndicator={false}>
      <NeoBrutalismCard style={styles.card}>
        <Text style={styles.title}>Learning Paths</Text>
        <View style={styles.pathItem}>
          <Text style={styles.pathTitle}>Gig Economy Basics</Text>
          <Text style={styles.pathProgress}>Progress: 60%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '60%' }]} />
          </View>
        </View>
      </NeoBrutalismCard>

      <NeoBrutalismCard style={styles.card}>
        <Text style={styles.title}>Featured Courses</Text>
        <View style={styles.coursesList}>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Financial Management 101</Text>
            <Text style={styles.courseDuration}>🕒 2 hours</Text>
            <Text style={styles.courseDesc}>Learn to manage your earnings effectively</Text>
          </View>
          <View style={styles.courseItem}>
            <Text style={styles.courseTitle}>Safety Best Practices</Text>
            <Text style={styles.courseDuration}>🕒 1.5 hours</Text>
            <Text style={styles.courseDesc}>Essential safety tips for gig workers</Text>
          </View>
        </View>
      </NeoBrutalismCard>

      <NeoBrutalismCard style={styles.card}>
        <Text style={styles.title}>Quick Tips</Text>
        <View style={styles.tipsList}>
          <View style={styles.tipItem}>
            <Text style={styles.tipNumber}>01</Text>
            <Text style={styles.tipContent}>Always keep your documents updated</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipNumber}>02</Text>
            <Text style={styles.tipContent}>Track your expenses for tax purposes</Text>
          </View>
          <View style={styles.tipItem}>
            <Text style={styles.tipNumber}>03</Text>
            <Text style={styles.tipContent}>Take regular breaks during long shifts</Text>
          </View>
        </View>
      </NeoBrutalismCard>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
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
  pathItem: {
    marginBottom: 12,
  },
  pathTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  pathProgress: {
    fontSize: 14,
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
  coursesList: {
    gap: 12,
  },
  courseItem: {
    backgroundColor: '#FFE5E5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseDuration: {
    fontSize: 14,
    marginBottom: 4,
  },
  courseDesc: {
    fontSize: 14,
    color: '#666',
  },
  tipsList: {
    gap: 12,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5FFE5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  tipNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 12,
  },
  tipContent: {
    fontSize: 16,
    flex: 1,
  },
});