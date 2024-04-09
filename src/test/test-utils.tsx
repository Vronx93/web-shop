import React, {ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { IsLoggedInContextProvider } from '../contexts/IsLoggedInContext'
import { BagItemsContextProvider } from '../contexts/BagItemsContext'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <IsLoggedInContextProvider>
        <BagItemsContextProvider>
            {children}
        </BagItemsContextProvider>
    </IsLoggedInContextProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}