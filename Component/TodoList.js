/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IconFea from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {deleteTask} from '../redux/taskSlice';
import {useDispatch} from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);
  const data = [
    {
      id: 1,
      title: 'learn react native',
    },
    {
      id: 2,
      title: 'learn Redux',
    },
  ];
  const itemDelete = id => {
    dispatch(deleteTask({id: id}));
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}> {item.name}</Text>
        <TouchableOpacity onPress={() => itemDelete(item.id)}>
          <IconFea name="trash" size={30} color="#F15A59" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  item: {
    borderBottomColor: '#B7B7B7',
    borderColor: '#B7B7B7',
    borderWidth: 0.9,
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  delete: {
    fontSize: 24,
    color: 'red',
  },
});
