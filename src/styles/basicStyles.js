import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    backgroundColor: "white",
    padding: 15,
    margin: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  title:{
      fontSize: 20,
      fontWeight: "bold"
  }
});
export default styles;
