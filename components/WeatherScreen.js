import React from 'react';
import Weather from './Weather'
import { Button, StyleSheet,View, Text} from 'react-native';
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>  Weather Temperature</Text>),
            headerRight: (
              <View style={styles.text1}> 
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}/>
              </View>
            )
        }
    }
    render() {
        const zipCode = this.props.navigation.getParam('zipCode')
        return (<Weather zipCode={zipCode} />);
    }
}
const styles = StyleSheet.create({
    text1: {paddingRight:5 ,color: '#FF66FF'}
});
