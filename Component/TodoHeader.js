/* eslint-disable prettier/prettier */
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/taskSlice';

const TodoHeader = () => {
  const [todo, setTodo] = useState('');
  const dispact = useDispatch();
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert('You need to add a task');
      setTodo('');
      return;
    }
    dispact(
      addTask({
        task: todo,
      }),
    );
    setTodo('');
  };

  return (
    <View>
      <Text style={styles.title}> Todo List</Text>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={styles.input}
          placeholder="Add Task"
          onChangeText={text => setTodo(text)}
          value={todo}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 45,
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    borderBottomColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: '90%',
    borderRadius: 10,
  },
  button: {
    height: 80,
    shadowColor: '#B7B7B7',
    shadowOpacity: 1,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    width: 80,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#7C96AB',
    padding: 10,
    verticalAlign: 'bottom',
    top: 650,
    left: 300,
    borderRadius: 30,
  },
});
export default TodoHeader;
