import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import styles from '../Styles/styles';

const homeSelect = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Image
                            source={{ uri: 'https://www.tdea.edu.co/images/tdea/logos/logo-tdea-nuevo.png' }}
                            style={styles.profileImage}
                        />
                        <Text style={styles.title}>Selección de Creación</Text>
                        <Text style={styles.infoText}>Elija una opción para comenzar</Text>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('CreateTeacher')}
                            style={styles.button}
                            
                        >
                            Crear Profesor
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('CreateStudent')}
                            style={styles.button}
                            
                        >
                            Crear Estudiante
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

export default homeSelect;