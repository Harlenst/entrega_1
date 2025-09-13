import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView, Alert } from 'react-native';
import { Card, Avatar, Text, Button, Divider, Chip,FAB } from 'react-native-paper';
import styles from '../Styles/styles';

const ViewStudent = ({ route, navigation }) => {
    const { profile } = route.params;
    const grades = [4.0, 3.5, 5.0, 5.0, 5.0]; // Son ejemplos de notas para que no quede tan vacio la vita de estudiante
    const subject = "Sociales"; // es la asignatura que se usa de ejemplo 

    useEffect(() => {
        console.log("Visualizando el perfil del estudiante:", profile.name);
    }, [profile.name]);

    const handleBack = () => {
        navigation.goBack();
    };

    const getInitials = () => {
        return `${profile.name}${profile.lastName}`.toUpperCase();
    };

    const averageGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length; //Calcular promedio de notas

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
                    <Text style={styles.profession}>Estudiante</Text>
                </View>
                <Card style={styles.profileCard}>
                    <Card.Content>
                        <Text style={styles.sectionTitle}>Información Personal</Text>
                        <Divider style={styles.divider} />
                        <Text style={styles.biografia}>Nombre: {profile.name}</Text>
                        <Text style={styles.biografia}>Apellido: {profile.lastName}</Text>
                        <Text style={styles.biografia}>Email: {profile.email}</Text>
                        <Text style={styles.biografia}>Teléfono: {profile.phone}</Text>
                        <Text style={styles.biografia}>ID Estudiante: {profile.studentId || 'No proporcionado'}</Text>
                        <Text style={styles.sectionTitle}>Notas de {subject}</Text>
                        <Divider style={styles.divider} />
                        {grades.map((grade, index) => (
                            <Text key={index} style={styles.biografia}>Nota {index + 1}: {grade}</Text>
                        ))}
                        <Text style={styles.biografia}>Promedio: {averageGrade.toFixed(1)}</Text>
                        <View style={styles.metaInfo}>
                            <Chip style={styles.chip}>Perfil Completado</Chip>
                        </View>
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
export default ViewStudent;