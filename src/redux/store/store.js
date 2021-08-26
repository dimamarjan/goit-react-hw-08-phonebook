import { configureStore } from '@reduxjs/toolkit'
import contacts from 'redux/slices/contacts'
import filter from 'redux/slices/filter'

const rootReducer = {
    contacts,
    filter
}

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
})

export default store;