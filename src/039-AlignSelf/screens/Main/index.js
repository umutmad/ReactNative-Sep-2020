import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize:20,
    }
})

class MainScreen extends Component {
    constructor()
    {
      super()
    }

    render()
    {
        return (
            <>
                <View style={{width: 40, height: 50, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center', alignSelf: 'center'}}>
                    <Text>CSD</Text>
                </View>
                <View style={{ width: 40, height: 50, backgroundColor: 'skyblue', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-start'}}>
                    <Text>CSD</Text>
                </View>

                <View style={{width: 40, height: 50, backgroundColor: 'steelblue', alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end'}}>
                    <Text>CSD</Text>
                </View>

            </>
        )
    }
}

export default MainScreen
