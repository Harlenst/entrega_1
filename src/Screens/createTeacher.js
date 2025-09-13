import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Alert } from 'react-native';
import { Card, Avatar, TextInput, Button } from 'react-native-paper';
import styles from '../Styles/styles';

const CreateProfile = ({ navigation }) => {
    // name, lastName, email, phone, subject
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const isValid =
            name.trim() !== '' &&
            lastName.trim() !== '' &&
            email.trim() !== '' &&
            phone.trim() !== '' &&
            subject.trim() !== '';
        setFormValid(isValid);
    }, [name, lastName, email, phone, subject]);

    const handleSave = () => {
        if (!formValid) {
            Alert.alert('Error', 'Los campos con * son obligatorios', [{ text: 'OK' }]);
            return;
        }
        const teacherProfile = { name, lastName, email, phone, subject };
        navigation.navigate('ViewTeacher', { profile: teacherProfile });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{ uri: 'https://img.freepik.com/vector-gratis/circulo-azul-usuario-blanco_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.title}>Crear Profesor</Text>
                    <Text style={styles.infoText}>Complete los campos para crear el perfil del profesor</Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content>
                        <TextInput
                            label={'* Nombre'}
                            value={name}
                            onChangeText={setName}
                            style={styles.input}
                            left={<TextInput.Icon name="account" />}
                            mode='outlined'
                            
                        />
                        <TextInput
                            label={'* Apellido'}
                            value={lastName}
                            onChangeText={setLastName}
                            style={styles.input}
                            left={<TextInput.Icon name="account-outline" />}
                            mode='outlined'
                            
                        />
                        <TextInput
                            label={'* Email'}
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            left={<TextInput.Icon name="email" />}
                            mode='outlined'
                            
                        />
                        <TextInput
                            label={'* Teléfono'}
                            value={phone}
                            onChangeText={setPhone}
                            style={styles.input}
                            left={<TextInput.Icon name="phone" />}
                            mode='outlined'
                            
                        />
                        <TextInput
                            label={'* Asignatura'}
                            value={subject}
                            onChangeText={setSubject}
                            style={styles.input}
                            left={<TextInput.Icon name="book" />}
                            mode='outlined'
                            
                        />
                        <Button
                            mode='contained'
                            onPress={handleSave}
                            style={styles.button}
                            disabled={!formValid}
                            
                        >
                            Guardar Profesor
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};
export default CreateProfile;