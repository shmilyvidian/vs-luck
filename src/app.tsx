import React from 'react'
import { Provider } from 'mobx-react'

import store from './store'

import './app.scss'
import { View } from '@tarojs/components'


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <View>
          hello
          {this.props.children}
        </View>
      </Provider>
    )
  }
}

export default App
