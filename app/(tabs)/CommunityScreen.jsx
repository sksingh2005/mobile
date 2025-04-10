import React from 'react';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import NeoBrutalismCard from '../components/NeoBrutalismCard';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CommunityScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ padding: 30, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <TouchableOpacity>
          <Text>Blogs</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <NeoBrutalismCard style={styles.card}>
          <Text style={styles.title}>Community Forum</Text>
          <View style={styles.forumPost}>
            <Text style={styles.postTitle}>Tips for New Drivers 🚗</Text>
            <Text style={styles.postAuthor}>by Sarah M.</Text>
            <Text style={styles.postStats}>💬 23 replies • ❤️ 45 likes</Text>
          </View>
          <View style={styles.forumPost}>
            <Text style={styles.postTitle}>Best Areas for Weekend Work 📍</Text>
            <Text style={styles.postAuthor}>by Mike R.</Text>
            <Text style={styles.postStats}>💬 15 replies • ❤️ 32 likes</Text>
          </View>
        </NeoBrutalismCard>

        <NeoBrutalismCard style={styles.card}>
          <Text style={styles.title}>Local Meetups</Text>
          <View style={styles.meetupItem}>
            <Text style={styles.meetupTitle}>Coffee & Connect ☕️</Text>
            <Text style={styles.meetupDetails}>Tomorrow, 9:00 AM</Text>
            <Text style={styles.meetupLocation}>Central Park Cafe</Text>
            <View style={styles.attendees}>
              <Text style={styles.attendeesText}>12 Going</Text>
            </View>
          </View>
        </NeoBrutalismCard>

        <NeoBrutalismCard style={styles.card}>
          <Text style={styles.title}>Success Stories</Text>
          <View style={styles.storyItem}>
            <Text style={styles.storyTitle}>"Made $1000 in my first week!"</Text>
            <Text style={styles.storyContent}>
              "I followed the tips from the community and managed to maximize my earnings. Thank you everyone!"
            </Text>
            <Text style={styles.storyAuthor}>- John D.</Text>
          </View>
        </NeoBrutalismCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  background: {
    backgroundColor: 'rgba(58, 131, 244, 0.4)',
    opacity:0.9,
    flex:1,
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
  forumPost: {
    backgroundColor: '#FFE5E5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 12,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  postAuthor: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  postStats: {
    fontSize: 14,
    color: '#666',
  },
  meetupItem: {
    backgroundColor: '#E5FFE5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  meetupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  meetupDetails: {
    fontSize: 16,
    marginBottom: 4,
  },
  meetupLocation: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  attendees: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    alignSelf: 'flex-start',
  },
  attendeesText: {
    fontSize: 14,
    fontWeight: '500',
  },
  storyItem: {
    backgroundColor: '#E5E5FF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#000',
  },
  storyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  storyContent: {
    fontSize: 16,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  storyAuthor: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'right',
  },
  container:{
    padding:16
  }
});