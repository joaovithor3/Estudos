import React from 'react';
import { Text, View, Image} from 'react-native';
import Darth from '../../assets/DARTH.jpg'
import estilos from '../Tela inicial/estilos';

export default function Page3() {
  return (

   <View style={estilos.container}>
     <Text style={estilos.titulo}>A historia de Darth Vader</Text>
    <Image source={Darth} style={estilos.image}/>
    <Text style={estilos.texto}>Triologia Prequela. Episodios I, II e III</Text>
    <Text style={estilos.texto}>Apesar de ter sido criada depois da triologia original, essa é a primeira triologia  na ordem cronologia da série Star Wars. Nela é contada a história do grande vilão Darth Vader.</Text>
    <Text style={estilos.texto}>Através dessa triologia você vai saber de onde ele veio e quem ele é.</Text>
  </View>
  );
}