'use client'
import { store } from "@/lib/store"
import React from "react"
import {Provider} from "react-redux"

export default function ProviderRedux({children}: {children: React.ReactNode}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
