import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { Header } from '~/components/Header';

import type { AplicationState } from '~/@types/entities/AplicationState';
// import type { AplicationState } from '~/@types/entities/AplicationState';
import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  QUEST_SCREEN,
  RESULT_SCREEN,
} from '~/constants/routes';
// import AddCategory from '~/screens/addCategory';
// // import AddCategory from '~/screens/addCategory';
// import AddProduct from '~/screens/addProduct';
import Home from '~/screens/Home';
import Login from '~/screens/Login';
import Profile from '~/screens/Profile';
import Quest from '~/screens/Quest';
import Result from '~/screens/Result';
import { createTheme } from '~/utils/theme';
// import Shop from '~/screens/shop';

// import { Header } from '../components/header';

const Stack = createNativeStackNavigator();
const StackLogin = createNativeStackNavigator();

function RootStack() {
  // const { islogged } = useSelector((state: AplicationState) => state.user);
  const { theme } = useSelector((state: AplicationState) => state.theme);

  return (
    // creteTheme?
    <ThemeProvider theme={createTheme(theme)}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={HOME_SCREEN}
          screenOptions={{ gestureEnabled: false, animation: 'fade' }}
        >
          <StackLogin.Screen
            name={LOGIN_SCREEN}
            component={Login}
            options={{
              header: props => <Header {...props} headerMenu={false} />,
            }}
          />

          <Stack.Screen
            name={HOME_SCREEN}
            component={Home}
            options={{
              header: props => <Header {...props} headerMenu />,
            }}
          />

          <Stack.Screen
            name={PROFILE_SCREEN}
            component={Profile}
            options={{
              header: props => <Header {...props} headerMenu />,
            }}
          />

          <Stack.Screen
            name={QUEST_SCREEN}
            component={Quest}
            options={{
              header: props => <Header {...props} headerMenu />,
            }}
          />

          <Stack.Screen
            name={RESULT_SCREEN}
            component={Result}
            options={{
              header: props => <Header {...props} headerMenu={false} />,
            }}
          />
          {/* <Stack.Screen
            name={ADDPRODUCT_SCREEN}
            component={AddProduct}
            options={{
              header: props => <Header enableNavigation {...props} />,
            }}
          />
          <Stack.Screen
            name={ADDCATEGORY_SCREEN}
            component={AddCategory}
            options={{
              header: props => <Header enableNavigation {...props} />,
            }}
          />
          <Stack.Screen
            name={SHOP_SCREEN}
            component={Shop}
            options={{
              header: props => <Header enableNavigation {...props} />,
            }}
          /> */}
        </Stack.Navigator>
        {/* {islogged ? (
          <Stack.Navigator
            initialRouteName={HOME_SCREEN}
            screenOptions={{ gestureEnabled: false, animation: 'fade' }}
          >
            <Stack.Screen
              name={HOME_SCREEN}
              component={Home}
              options={{
                header: props => <Header {...props} />,
              }}
            />
            <Stack.Screen
              name={ADDPRODUCT_SCREEN}
              component={AddProduct}
              options={{
                header: props => <Header enableNavigation {...props} />,
              }}
            />
            <Stack.Screen
              name={ADDCATEGORY_SCREEN}
              component={AddCategory}
              options={{
                header: props => <Header enableNavigation {...props} />,
              }}
            />
            <Stack.Screen
              name={SHOP_SCREEN}
              component={Shop}
              options={{
                header: props => <Header enableNavigation {...props} />,
              }}
            />
          </Stack.Navigator>
        ) : (
          <StackLogin.Navigator
            initialRouteName={LOGIN_SCREEN}
            screenOptions={{ gestureEnabled: false, animation: 'fade' }}
          >
            <StackLogin.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{ headerShown: false }}
            />
          </StackLogin.Navigator>
        )} */}
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default RootStack;
