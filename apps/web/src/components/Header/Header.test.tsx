import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'

const renderComp = () => render(<Header />)

describe('Header', () => {
  test('loads and displays greeting', async () => {
    const { getByText } = renderComp()
    expect(getByText(/dog/i)).toBeInTheDocument()
  })
})
