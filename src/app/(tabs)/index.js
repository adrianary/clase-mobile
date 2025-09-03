Import { ViewTransition, Text, StyleSheet} from 'react native';

export default function indexTab() {
    return (
        <View style={styles.container}>
          <Text>Tab [Index]</Text>
          </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});