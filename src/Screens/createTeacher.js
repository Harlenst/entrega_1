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
        const professorProfile = { name, lastName, email, phone, subject };
        navigation.navigate('ViewProfessor', { profile: professorProfile });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
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
                            theme={{ colors: { primary: '#6200EE' } }}
                        />
                        <TextInput
                            label={'* Apellido'}
                            value={lastName}
                            onChangeText={setLastName}
                            style={styles.input}
                            left={<TextInput.Icon name="account-outline" />}
                            mode='outlined'
                            theme={{ colors: { primary: '#6200EE' } }}
                        />
                        <TextInput
                            label={'* Email'}
                            value={email}
                            onChangeText={setEmail}
                            style={styles.input}
                            left={<TextInput.Icon name="email" />}
                            mode='outlined'
                            theme={{ colors: { primary: '#6200EE' } }}
                        />
                        <TextInput
                            label={'* Teléfono'}
                            value={phone}
                            onChangeText={setPhone}
                            style={styles.input}
                            left={<TextInput.Icon name="phone" />}
                            mode='outlined'
                            theme={{ colors: { primary: '#6200EE' } }}
                        />
                        <TextInput
                            label={'* Asignatura'}
                            value={subject}
                            onChangeText={setSubject}
                            style={styles.input}
                            left={<TextInput.Icon name="book" />}
                            mode='outlined'
                            theme={{ colors: { primary: '#6200EE' } }}
                        />
                        <Button
                            mode='contained'
                            onPress={handleSave}
                            style={styles.button}
                            disabled={!formValid}
                            theme={{ colors: { primary: '#6200EE' } }}
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