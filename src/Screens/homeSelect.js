import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import styles from '../Styles/styles';

const HomeSelect = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9bLjVtn-5CovRNQyyPJxcvw3avLtlzfVKw&s' }}
                            style={styles.profileImage}
                        />
                        <Text style={styles.title}>Selección de Creación</Text>
                        <Text style={styles.infoText}>Elija una opción para comenzar</Text>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('CreateTeacher')}
                            style={styles.button}
                            theme={{ colors: { primary: '#6200EE' } }}
                        >
                            Crear Profesor
                        </Button>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('CreateStudent')}
                            style={styles.button}
                            theme={{ colors: { primary: '#6200EE' } }}
                        >
                            Crear Estudiante
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </View>
    );
};

export default HomeSelect;