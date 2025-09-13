import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { Card, Avatar, Text, Button, Divider, Chip, TextInput, FAB } from 'react-native-paper';
import styles from '../Styles/styles';

const ViewTeacher = ({ route, navigation }) => {
    const { profile } = route.params;
    const [studentName, setStudentName] = useState('');
    const [grade1, setGrade1] = useState('');
    const [grade2, setGrade2] = useState('');
    const [grade3, setGrade3] = useState('');

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        console.log("Visualizando el perfil del profesor:", profile.name);
    }, [profile.name]);

    useEffect(() => {
        const isValid =
            studentName.trim() !== '' &&
            grade.trim() !== '' &&
            !isNaN(parseFloat(grade)) && parseFloat(grade) >= 0 && parseFloat(grade) <= 5.0;
        setFormValid(isValid);
    }, [studentName, grade]);

    const handleBack = () => {
        navigation.goBack();
    };

    const getInitials = () => {
        return `${profile.name}${profile.lastName}`.toUpperCase();
    };

    const handleSaveGrade = () => {
        if (!formValid) {
            Alert.alert('Error', 'Los campos con * son obligatorios y la nota debe estar entre 0 y 5.0', [{ text: 'OK' }]);
            return;
        }
        const newGrade = { studentName, grade: parseFloat(grade), teacherName: profile.name };
        console.log('Nota guardada:', newGrade);
        Alert.alert('Éxito', 'Nota guardada para ' + studentName + ': ' + grade, [{ text: 'OK' }]);
        setStudentName('');
        setGrade('');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.profileHeader}>
                    <Avatar.Image
                        size={100}
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
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
                        <Text style={styles.sectionTitle}>Agregar Nota</Text>
                        <Divider style={styles.divider} />
                        <TextInput
                            label={'* Nombre del Estudiante'}
                            value={studentName}
                            onChangeText={setStudentName}
                            style={styles.input}
                            left={<TextInput.Icon name="account" />}
                            mode='outlined'

                        />
                        <TextInput
                            label={'* Nota (0-5.0) 1'}
                            value={grade1}
                            onChangeText={setGrade1}
                            style={styles.input}
                            left={<TextInput.Icon name="numeric" />}
                            mode='outlined'
                            keyboardType="numeric"

                        />
                        <TextInput
                            label={'* Nota (0-5.0) 2'}
                            value={grade2}
                            onChangeText={setGrade2}
                            style={styles.input}
                            left={<TextInput.Icon name="numeric" />}
                            mode='outlined'
                            keyboardType="numeric"

                        />
                        <TextInput
                            label={'* Nota (0-5.0) 3'}
                            value={grade3}
                            onChangeText={setGrade3}
                            style={styles.input}
                            left={<TextInput.Icon name="numeric" />}
                            mode='outlined'
                            keyboardType="numeric"

                        />
                        <Button
                            mode='contained'
                            onPress={handleSaveGrade}
                            style={styles.button}
                            disabled={!formValid}
                            icon="content-save"

                        >
                            Guardar Nota
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