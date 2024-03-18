// LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const students = [
  { username: 'student1', password: 'password1', courses: ['Math', 'Science', 'History', 'English', 'Art'] },
  { username: 'student2', password: 'password2', courses: ['Science', 'History', 'English', 'Art', 'Music'] },
  { username: 'student3', password: 'password3', courses: ['History', 'English', 'Art', 'Music', 'Physical Education'] },
  { username: 'student4', password: 'password4', courses: ['English', 'Art', 'Music', 'Physical Education', 'Computer Science'] },
  { username: 'student5', password: 'password5', courses: ['Art', 'Music', 'Physical Education', 'Computer Science', 'Math'] },
];

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [studentCourses, setStudentCourses] = useState([]); // State to store courses of logged-in student
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleLogin = () => {
    const student = students.find(s => s.username === username && s.password === password);
    if (student) {
      setStudentCourses(student.courses);
      setIsLoggedIn(true); // Set login status to true if successful
    } else {
      setLoginMessage('Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn && ( // Render login screen only if not logged in
        <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
          <Text style={styles.message}>{loginMessage}</Text>
        </>
      )}
      {isLoggedIn && ( // Render student subject list if logged in
        <>
        <Text>--------------</Text>
        <Text>Welcome, here are your subjects!</Text>
        <FlatList
          style={styles.subjectList}
          data={studentCourses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.courseRow}>
              <Text style={styles.course}>{item}</Text>
            </View>
          )}
        />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  message: {
    marginTop: 10,
    color: 'red',
  },
  subjectList: {
    marginTop: 20,
    width: '80%',
  },
  courseRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  course: {
    fontSize: 16,
  },
});

export default LoginScreen;
