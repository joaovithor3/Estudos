import React from 'react';
import { View,Image, Text, Button } from 'react-native';

import estilo from './estilos';
import logo from '../../assets/star.png'
import estilos from './estilos';

export default function App(props) {
  return (
    
    <View style={estilo.container}>
     <Text style ={estilo.titulo}>Star wars  ordem cronológica</Text>
     <Image source={logo} style={estilo.image}/>

     <Text style={estilo.texto}>Você sabe qual é a ordem cronológica da franquia Star Wars?</Text>

<Text style ={estilo.texto}>Os Principais filmes da franquia estão divididos em triologias. Clique no botão para saber mais.</Text>
    
<Button title ='Ver a 1º Triologia'
    onPress={() => props.navigation.navigate('Triologia 1')} color = '#EB1101'/>

<Button  title ='Ver a 2º Triologia'
    onPress={() => props.navigation.navigate('Triologia 2')} color = '#EB1101'/>

<Button  title ='Ver a 3º Triologia'
    onPress={() => props.navigation.navigate('Triologia 3')} color = '#EB1101'/>

    
    
    
    
    </View>

    
  );
}
