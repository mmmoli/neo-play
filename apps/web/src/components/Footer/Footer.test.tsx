import React from 'react'
import Footer from './Footer'
import { render } from '@testing-library/react'

const renderComp = () => render(<Footer />)

describe('Footer', () => {
  test('loads and displays greeting', async () => {
    const { getByText } = renderComp()
    expect(getByText(/cat/i)).toBeInTheDocument()
  })
})
