import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16161d',
    alignItems: 'center',
    justifyContent: 'center',
  }, title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30
  }, input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#add8e6',
    paddingHorizontal: 8,
    backgroundColor: '#fff'

  }, label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8
    }, button: {
      backgroundColor: '#add8e6',
      color: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      marginTop: 20
    }, textButton: {
      color: '#fff',
      fontSize: 16
    }, textModal: {
      color: '#fff',
      fontSize: 16
    }
})

export default styles;