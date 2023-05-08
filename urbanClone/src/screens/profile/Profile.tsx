import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import {COLORS} from '../../resources';

const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phone, setPhone] = useState('+1 123-456-7890');
  const [profilePicture, setProfilePicture] = useState(
    'https://via.placeholder.com/150',
  );

  const handleEditProfile = () => {
    setIsModalVisible(true);
  };

  const handleSaveProfile = () => {
    setIsModalVisible(false);
  };
  const handleEditProfilePicture = () => {
    // Handle the logic to edit the profile picture here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleEditProfilePicture}>
          <Image source={{uri: profilePicture}} style={styles.profilePicture} />
          <Text style={styles.editProfilePictureText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Name:</Text>
          <Text style={styles.infoText}>{name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>{email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>{phone}</Text>
        </View>
      </View>
      <Modal animationType="slide" visible={isModalVisible}>
        <ScrollView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Profile</Text>
          <TextInput
            style={styles.modalInput}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor="#C4C4C4"
          />
          <TextInput
            style={styles.modalInput}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#C4C4C4"
          />
          <TextInput
            style={styles.modalInput}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone"
            placeholderTextColor="#C4C4C4"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveProfile}>
              <Text style={styles.saveButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveProfile}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray1,
  },
  header: {
    paddingTop: '15%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  editButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  infoText: {
    flex: 2,
    fontSize: 16,
    color: '#333333',
  },
  modalContainer: {
    flex: 1,
    paddingTop: '20%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
  },
  modalInput: {
    height: 48,
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: '1%',
    backgroundColor: COLORS.white,
    paddingBottom: 20,
  },
  profilePicture: {
    width: 150,
    marginTop: '10%',
    height: 150,
    backgroundColor: COLORS.lightGray,
    borderRadius: 75,
    marginBottom: 8,
  },
  editProfilePictureText: {
    fontSize: 16,
    color: COLORS.primary,
    alignSelf: 'flex-end',
  },
});

export default ProfileScreen;
