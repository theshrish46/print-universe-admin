'use client'
import { Provider } from "react-redux";
import { store } from './store'
import React from "react";

type TChildrenProps = {
    children: React.ReactNode
}

export function Providers({ children }: TChildrenProps) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}