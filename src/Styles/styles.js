import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#6200EE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  card: {
    margin: 15,
    elevation: 4,
    borderRadius: 10,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  infoContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  // Estilos para ViewProfileScreen
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: '#6200EE',
  },
  avatar: {
    backgroundColor: '#03DAC6',
    elevation: 4,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
  profession: {
    fontSize: 16,
    color: '#E0E0E0',
    marginTop: 5,
  },
  profileCard: {
    margin: 15,
    elevation: 3,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  divider: {
    marginBottom: 15,
    backgroundColor: '#E0E0E0',
  },
  listItem: {
    paddingVertical: 5,
  },
  biografia: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
    textAlign: 'justify',
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },
  chip: {
    backgroundColor: '#f0f0f0',
  },
  buttonContainer: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 80,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200EE',
  },
});
 
export default styles;