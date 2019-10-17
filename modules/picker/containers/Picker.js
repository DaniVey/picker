import React, {Component} from 'react';
import {Picker,  View, StyleSheet, Alert, Button, ActivityIndicator, } from 'react-native';




class Opciones extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Opciones : ''
        }
    }
    componentDidMount() {

        return fetch('http://172.16.23.61/reactNative1/public/get-opciones')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.opciones,
                }, function() {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    GetPickerSelected=()=>{
        if (this.state.Opciones == 'Carpetas') {
            this.props.navigation.navigate('Opc1');
        } else if(this.state.Opciones  == 'Imagenes'){
            this.props.navigation.navigate('Opc2');
        }else if(this.state.Opciones == 'Alumnos') {
            this.props.navigation.navigate('Opc3');
        }else if(this.state.Opciones == 'Calificaciones') {
            this.props.navigation.navigate('Opc4');
        }else if(this.state.Opciones == 'otros') {
            this.props.navigation.navigate('Opc5');
        }else{
            Alert.alert("Intenta otra vez");
            this.props.navigation.navigate('Picker')
        }


    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />

                </View>
            );
        }

        return(
         <View  style={styles.container}>
             <Picker

                 selectedValue={this.state.Opciones}
                 style={{height: 50, width: 300}}
                 onValueChange={(itemValue, itemIndex) =>
                     this.setState({Opciones: itemValue})
                 }>
                 <Picker.Item label='selecciona una opción' value='' />
                 {this.state.dataSource.map((item, key)=>(
                     <Picker.Item label={item.opcion} value={item.opcion} key={key} />)
                 )}

             </Picker>
             <Button title="Siguiente" onPress={this.GetPickerSelected} color="#2196F3" />
         </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //alignSelf: 'baseline'

    },

});

export default Opciones
