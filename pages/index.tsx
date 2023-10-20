import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className='font-bold text-center mt-20 text-6xl'>LeetCode Tracker</h1>
      <p className='font-semibold text-xl text-center mt-4 text-gray-400'>Organize and Track your LeetCode progress here. Simply sign in with your GitHub.</p>
      
    </div>
  )
}
