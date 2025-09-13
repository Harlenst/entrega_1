import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Alert } from 'react-native';
import { Card, Avatar, TextInput, Button } from 'react-native-paper';
import styles from '../Styles/styles';

const CreateProfile = ({ navigation }) => {
    // name, lastName, email, phone, studentId
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [studentId, setStudentId] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        const isValid =
            name.trim() !== '' &&
            lastName.trim() !== '' &&
            email.trim() !== '' &&
            phone.trim() !== '';
        setFormValid(isValid);
    }, [name, lastName, email, phone]);

    const handleSave = () => {
        if (!formValid) {
            Alert.alert('Error', 'Los campos con * son obligatorios', [{ text: 'OK' }]);
            return;
        }
        const studentProfile = { name, lastName, email, phone, studentId };
        navigation.navigate('ViewStudent', { profile: studentProfile });
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IX4l0gifWfsMKntrIPOfz4Kag8aNbaPxPw&s' }}
                        style={styles.profileImage}
                    />
                    <Text style={styles.title}>Crear Estudiante</Text>
                    <Text style={styles.infoText}>Complete los campos para crear el perfil del estudiante</Text>
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
                            label={'ID Estudiante (Opcional)'}
                            value={studentId}
                            onChangeText={setStudentId}
                            style={styles.input}
                            left={<TextInput.Icon name="card-account-details" />}
                            mode='outlined'
                            
                        />
                        <Button
                            mode='contained'
                            onPress={handleSave}
                            style={styles.button}
                            disabled={!formValid}
                            
                        >
                            Guardar Estudiante
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};
export default CreateProfile;