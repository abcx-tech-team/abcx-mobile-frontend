import Toast from 'react-native-toast-message';

/**
 * Set in asyncStorage
 * @param {String} key
 * @param {Object} value
 */

import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setToken(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
    });
  }
}

/**
 * Get from asyncStorage
 * @param {String} key
 */

export async function getToken(key) {
  try {
    let userData = await AsyncStorage.getItem(key);
    let data = JSON.parse(userData);
    return data;
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
    });
  }
}

/**
 * Get from asyncStorage
 * @param {String} key
 */

export async function removeStorage(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
    });
  }
}

/**
 * Get from asyncStorage
 * @param {String} key
 */

export async function clearStorage(key) {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    Toast.show({
      type: 'error',
      text1: 'Something went wrong',
    });
  }
}
