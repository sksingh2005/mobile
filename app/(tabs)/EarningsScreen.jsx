import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import NeoBrutalismCard from '../components/NeoBrutalismCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Animatable from 'react-native-animatable';



export default function EarningsScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }

    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], 
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.background}>
      <View style={{ padding: 30, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 23, fontWeight: "800" }}>Hello  Praveen 👋,</Text>
          <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "400" }}>Lets Talk About Your Earnings</Text>
        </View>
        <TouchableOpacity onPress={pickImage}>
        <Image
          source={{uri: image|| 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750,h_394/https://authbridge.com/wp-content/uploads/2024/12/Blog-Image-for-Gig-Workers-Onboarding-1024x538.png'}} 
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            marginLeft: 10,
          }}
          resizeMode='cover'
        />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <NeoBrutalismCard style={styles.earningsCard}>
          <Animatable.View animation="pulse" duration={700} iterationCount={'infinite'} >
          <Text style={styles.title}>Total Earnings</Text>
          <Text style={styles.amount}>$2,450.00</Text>
          <Text style={styles.subtitle}>This Month</Text>
          </Animatable.View>
        </NeoBrutalismCard>

        <NeoBrutalismCard style={styles.plannerCard}>
          <Text style={styles.title}>Financial Goals</Text>
          <View style={styles.goalItem}>
            <Text style={styles.goalText}>Emergency Fund</Text>
            <Text style={styles.goalAmount}>$5,000 / $10,000</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '50%' }]} />
          </View>
        </NeoBrutalismCard>

        <NeoBrutalismCard style={styles.statsCard}>
          <Text style={styles.title}>Quick Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>32</Text>
              <Text style={styles.statLabel}>Gigs</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4.9</Text>
              <Text style={styles.statLabel}>Rating</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>28h</Text>
              <Text style={styles.statLabel}>Hours</Text>
            </View>
          </View>
        </NeoBrutalismCard>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(58, 131, 244, 0.4)',
    opacity:2,
    flex:1

  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,

  },
  earningsCard: {
    marginBottom: 16,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  amount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2ECC71',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  plannerCard: {
    marginBottom: 16,
    padding: 20,
  },
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  goalText: {
    fontSize: 16,
    fontWeight: '500',
  },
  goalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
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
  statsCard: {
    padding: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
