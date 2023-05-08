import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {COLORS, FONTS, ICONS} from '../../resources';
import {useAppDispatch} from '../../stateManagemer/Store';
import {login} from '../../stateManagemer/slice/UserSlice';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dipatch = useAppDispatch();

  const handleLogin = () => {
    // Handle login logic here
    const data = {
      email: 'harry@yopmail.com',
      name: 'Harry Potter',
    };
    dipatch(login(data));
    // navigation?.navigate(');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
  };

  return (
    <ScrollView bounces={false} style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* Insert your logo here */}
          <Image
            resizeMode="contain"
            style={{height: 300, width: 300, alignSelf: 'center'}}
            source={ICONS.LOGO_ICON}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dashedLineSeparator} />
        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <Image source={ICONS.GOOGLE_ICON} style={styles.googleIcon} />
          <Text style={styles.googleText}>Login with Google</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: '20%',
    marginBottom: -40,
  },
  logoText: {
    ...FONTS.h1,
    // fontSize: 28,
    // fontWeight: 'bold',
    color: '#2E2E2E',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    // backgroundColor: '#FFD600',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    // color: '#2E2E2E',
    color: COLORS.white,
    // fontWeight: 'bold',
    // fontSize: 16,
    ...FONTS.h4,
  },
  forgotPassword: {
    // color: '#FFD600',
    ...FONTS.body4,
    marginVertical: '5%',
    textAlign: 'right',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20%',
  },
  signupText: {
    ...FONTS.body4,
    marginRight: 8,
  },
  signupLink: {
    color: COLORS.primary,
    ...FONTS.h4,
    // fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '70%',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    // marginBottom: '20%',

    marginTop: 50,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  googleText: {
    ...FONTS.body3,
    color: COLORS.primary,
    flex: 1,
    textAlign: 'center',
  },
  dashedLineSeparator: {
    borderWidth: 0.7,
    width: '90%',
    borderColor: COLORS.lightGray,
    // marginVertical: 16,
    marginTop: '5%',
  },
});

export default LoginScreen;
