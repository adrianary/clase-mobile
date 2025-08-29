import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function App() {
  const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Text>HOLA</Text>
      <StatusBar style="auto" />
       <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
              <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        
    </View>

    
  );
}
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6a1ccff',
    alignItems: '',
    justifyContent: 'center',
  },
});
  