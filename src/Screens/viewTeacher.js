import React, { useState, useEffect } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Card, Avatar, Text, Button, Divider, Chip, TextInput, FAB } from 'react-native-paper';
import styles from '../Styles/styles';

const ViewTeacher = ({ route, navigation }) => {
  const { profile } = route.params || {};

  // Si no llega el perfil, mostramos un mensaje y evitamos el error
  if (!profile) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No se recibieron datos del profesor.</Text>
        <Button onPress={() => navigation.goBack()}>Volver</Button>
      </View>
    );
  }

  const [studentName, setStudentName] = useState('');
  const [grade1, setGrade1] = useState('');
  const [grade2, setGrade2] = useState('');
  const [grade3, setGrade3] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    console.log("Visualizando el perfil del profesor:", profile.name);
  }, [profile.name]);

  // Validación de campos obligatorios
  useEffect(() => {
    const isValid =
      studentName.trim() !== '' &&
      [grade1, grade2, grade3].every(
        g => g.trim() !== '' && !isNaN(parseFloat(g)) && parseFloat(g) >= 0 && parseFloat(g) <= 5.0
      );
    setFormValid(isValid);
  }, [studentName, grade1, grade2, grade3]);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSaveGrade = () => {
    if (!formValid) {
      Alert.alert('Error', 'Todos los campos son obligatorios y las notas deben estar entre 0 y 5.0', [
        { text: 'OK' },
      ]);
      return;
    }

    const newGrade = {
      studentName,
      grades: {
        nota1: parseFloat(grade1),
        nota2: parseFloat(grade2),
        nota3: parseFloat(grade3),
      },
      teacherName: profile.name,
    };

    console.log('Notas guardadas:', newGrade);
    Alert.alert('Éxito', `Notas guardadas para ${studentName}`, [{ text: 'OK' }]);

    // Limpiar los campos
    setStudentName('');
    setGrade1('');
    setGrade2('');
    setGrade3('');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
  
        <View style={styles.profileHeader}>
          <Avatar.Image
            size={100}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6454/6454364.png' }}
            style={styles.avatar}
          />
          <Text style={styles.profileName}>{`${profile.name} ${profile.lastName}`}</Text>
          <Text style={styles.profession}>Profesor</Text>
        </View>

    
        <Card style={styles.profileCard}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Información del Profesor</Text>
            <Divider style={styles.divider} />
            <Text style={styles.biografia}>Nombre: {profile.name}</Text>
            <Text style={styles.biografia}>Apellido: {profile.lastName}</Text>
            <Text style={styles.biografia}>Email: {profile.email}</Text>
            <Text style={styles.biografia}>Teléfono: {profile.phone}</Text>
            <Text style={styles.biografia}>Asignatura: {profile.subject}</Text>
            <View style={styles.metaInfo}>
              <Chip style={styles.chip}>Perfil Completado</Chip>
            </View>
          </Card.Content>
        </Card>


        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.sectionTitle}>Agregar Notas</Text>
            <Divider style={styles.divider} />

            <TextInput
              label="* Nombre del Estudiante"
              value={studentName}
              onChangeText={setStudentName}
              style={styles.input}
              left={<TextInput.Icon name="account" />}
              mode="outlined"
            />

            <TextInput
              label="* Nota 1 (0-5.0)"
              value={grade1}
              onChangeText={setGrade1}
              style={styles.input}
              left={<TextInput.Icon name="numeric" />}
              mode="outlined"
              keyboardType="numeric"
            />

            <TextInput
              label="* Nota 2 (0-5.0)"
              value={grade2}
              onChangeText={setGrade2}
              style={styles.input}
              left={<TextInput.Icon name="numeric" />}
              mode="outlined"
              keyboardType="numeric"
            />

            <TextInput
              label="* Nota 3 (0-5.0)"
              value={grade3}
              onChangeText={setGrade3}
              style={styles.input}
              left={<TextInput.Icon name="numeric" />}
              mode="outlined"
              keyboardType="numeric"
            />

            <Button
              mode="contained"
              onPress={handleSaveGrade}
              style={styles.button}
              disabled={!formValid}
              icon="content-save"
            >
              Guardar Notas
            </Button>
          </Card.Content>
        </Card>

        <View style={styles.buttonContainer}>
          <FAB
            style={styles.fab}
            icon="arrow-left-bold"
            onPress={handleBack}
            color="white"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ViewTeacher;
