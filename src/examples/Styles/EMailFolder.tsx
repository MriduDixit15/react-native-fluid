import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fluid from 'react-native-fluid-transitions';
import * as Colors from '../colors';

const EmailFolder: React.FunctionComponent<{}> = () => {
  const [counter, setCounter] = useState(0);
  const countState = {name: 'counter', value: counter > 0, active: counter};
  const activeState = {name: 'active', value: counter > 0};
  const states = [countState, activeState];

  const config = Fluid.createConfig({
    animation: Fluid.Animations.Springs.Gentle,
    when: [
      {state: 'active', style: styles.activeNotification},
      {state: 'inactive', style: styles.inactiveNotification},
    ],
    onEnter: {
      state: 'counter',
      interpolation: {
        inputRange: [0, 0.5, 1],
        outputRange: [1, 2, 1],
        styleKey: 'transform.scale',
      },
    },
  });

  const inc = () => setCounter(counter + 1);
  return (
    <Fluid.View label="emailfolder" onPress={inc} style={styles.container}>
      <Icon name="email-outline" size={140} color={Colors.ColorC} />
      <Fluid.View
        style={styles.notificationIcon}
        label="emailIcon"
        states={states}
        config={config}>
        <Text style={styles.notificationText}>{counter}</Text>
      </Fluid.View>
    </Fluid.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  notificationIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#CCCCCC',
  },
  activeNotification: {
    backgroundColor: Colors.ColorA,
  },
  inactiveNotification: {},
  notificationText: {
    fontSize: 11,
    color: '#FFF',
  },
});

export default EmailFolder;