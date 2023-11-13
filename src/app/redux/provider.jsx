"use client"


import { Provider } from "react-redux"
import {store} from './store'

export default function provider() {
  return (
        <Provider store ={store}>
            {children}
        </Provider> 
  )
}

