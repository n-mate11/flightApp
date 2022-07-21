import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WideButton } from '../components/WideButton';

export const LoginScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              placeholderTextColor={'#9A9A9A'}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType={'emailAddress'}
            />
          )}
        />
        {errors.email && <Text>An email is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
            required: true,
          }}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholderTextColor={'#9A9A9A'}
              placeholder="Password"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
        />
        {errors.password && <Text>A password is required.</Text>}
        <View style={styles.forgotWrapper}>
          <TouchableOpacity
            onPress={() => {
              console.log('Idk my password...');
            }}>
            <Text style={styles.forgotText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <WideButton
          text={'Sign in'}
          onPress={() => navigation.navigate('TabNavigation')}
        />
        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.line} />
        </View>
        <WideButton
          containerStyles={{ backgroundColor: '#C6C6C6', marginVertical: 0 }}
          textStyles={{ color: '#000' }}
          text={'Sign in with Google'}
        />
        <WideButton
          containerStyles={{ backgroundColor: '#C6C6C6', marginVertical: 0 }}
          textStyles={{ color: '#000' }}
          text={'Sign in with Facebook'}
        />
        <View style={styles.registerWrapper}>
          <Text>Don't have an account yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 34,
    marginVertical: 16,
  },
  input: {
    height: 30,
    width: '100%',
    marginVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  forgotWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#0077b6',
    fontSize: 14,
    marginTop: 15,
  },
  signinBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#0077b6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  divider: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: '#C6C6C6',
  },
  dividerText: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#959595',
    fontWeight: '500',
  },
  registerWrapper: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 40,
  },
  registerText: {
    marginTop: 5,
    color: '#0077b6',
  },
});
