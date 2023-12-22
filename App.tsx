import {
  View,
  Text,
  NativeModules,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-windows';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

const App: React.FC = () => {
  const [firstnumValue, setFirstnumValue] = useState<string>('');
  const [secnumValue, setSecnumValue] = useState<string>('');
  const [sum, setSum] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);

  const getModule = () => {
    const firstnum = parseInt(firstnumValue);
    const secnum = parseInt(secnumValue);

    if (isNaN(firstnum) || isNaN(secnum)) {
      // Handle invalid input
      console.error('Invalid input. Please enter valid numbers.');
      return;
    }

    NativeModules.DemoModule.add(firstnum, secnum, (res: number) => {
      setSum(res);
    });
    NativeModules.DemoModule.sub(firstnum, secnum, (val: number) => {
      setSub(val);
    });
    NativeModules.DemoModule.mul(firstnum, secnum, (val: number) => {
      setMul(val);
    });
    NativeModules.DemoModule.divide(firstnum, secnum, (val: number) => {
      setDiv(val);
    });
  };

  const imgurl = require('./Images/Image.jpeg');
  const bell = require('./Images/bell.png');
  const threedot = require('./Images/threeDot.jpeg');

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <TouchableOpacity style={styles.innercontainer}>
          <Image source={imgurl} style={styles.img} />
          <Text style={[styles.txt, {color: 'green'}]}>KISHORE S</Text>
        </TouchableOpacity>
        <View style={styles.belldot}>
          <TouchableOpacity>
            <Image source={bell} style={styles.imgbell} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={threedot} style={styles.imgdot} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.txtInput}>
        <TextInput
          value={firstnumValue}
          onChangeText={item => setFirstnumValue(item)}
          placeholder="Enter first number"
        />
        <TextInput
          value={secnumValue}
          onChangeText={item => setSecnumValue(item)}
          placeholder="Enter second number"
        />
        <Button title="Calculate" onPress={getModule} />
        <Text>Sum: {sum}</Text>

        <Text>sub: {sub}</Text>

        <Text>mul: {mul}</Text>

        <Text>div: {div}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innercontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: 100,
    width: 100,
    marginLeft: 13,
    borderRadius: 250,
  },
  txt: {
    fontSize: 25,
    marginTop: 10,
  },
  imgbell: {
    height: 30,
    width: 30,
    gap: 30,
  },
  imgdot: {
    height: 30,
    width: 30,
    marginTop: 5,
  },
  txtInput: {
    flex: 1,
    width: 310,
    marginBottom: 500,
    marginLeft: 20,
  },
  belldot: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 700,
  },
});

export default App;

// import {View, Text, Alert} from 'react-native';
// import React from 'react';
// import {
//   MenuProvider,
//   Menu,
//   MenuTrigger,
//   MenuOption,
//   MenuOptions,
// } from 'react-native-popup-menu';
// import Menupage from './Menu/Menupage';

// const App = () => {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Menupage />
//     </View>
//   );
// };

// export default App;
