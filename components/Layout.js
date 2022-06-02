import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUserId, getUsername } from '../lib/userAuth'

const Layout = ({ children }) => {
  const [ username, setUsername ] = useState('')
  const [ userId, setUserId ] = useState(null)
  useEffect(() => setUsername(getUsername()), [])
  useEffect(() => setUserId(getUserId()), [])

  return (
    <>
      <header className="flex flex-row w-full px-10 py-2 shadow">
        <span className="h-8 items-center space-x-6">
          <Link href={'/'}>
            <span className="text-2xl" style={{ cursor: 'pointer' }}>Golfr 🏌️</span>
          </Link>
          <span className="text-xl">Home</span>
        </span>
        <span className="h-8 items-center text-xl ml-auto">
          <Link href={`/golfer/${userId}`}>
            {username}
          </Link>
          <span className="text-sm">
            {' ('}
            <Link href={'/logout'}>
              <a className="underline text-blue-700">logout</a>
            </Link>
            {')'}
          </span>
        </span>
      </header>
      <div className="px-10 py-2">
        {children}
      </div>
    </>
  )
}

export default Layout
