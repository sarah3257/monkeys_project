import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import AppRoutes2 from './appRoutes2'
import counterSlice from './features/counterSlice'

export default function Less25() {
    const myStore=configureStore({
        reducer:{
            counterSlice
        }
    })
  return (
    <Provider store={myStore}>
       <AppRoutes2/>
    </Provider>
  )
}
