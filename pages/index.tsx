import Image from 'next/image'
import Layout from '@/components/layout'
import { Card, Text, Metric } from "@tremor/react";




export default function Home() {
  return (
    <Layout>

<div>
  <div className='h-screen'>  <h1 className='font-bold text-center mt-14 text-6xl text-gray-700'>A LeetCode based daily planner</h1>
      <p className='text-xl text-center mt-4 text-gray-600 w-2/5 mx-auto'><span className='text-leetcode font-semibold'>LeetTracker </span>is a simple free to use LeetCode productivity app to schedule your problems and track your overall progress. </p>
      <div className=''>
        <div className=''>  <Image src={'/calendar.png'} width={900} height={1000} className='mx-auto rounded mt-5 p-2   rounded bg-gray-200'/></div>
        <div className='text-center text-xl  font-semibold text-gray-600'> <p className=' mt-10'> Sign in with Github to get started</p></div>
        <button type="button" className="flex font-bold items-center mt-5 mx-auto bg-gray-800 p-3 rounded-lg hover:bg-gray-700 text-white hover">
  <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
  </svg>
  Sign in
</button></div>

<div className='next section'>
  <div className='feature1'></div>
  <div></div>
  <div></div>

  <Card className="max-w-xs mx-auto">
    <Text>Sales</Text>
    <Metric>$ 34,743</Metric>
  </Card>
</div>
</div>

      


    </div>
    </Layout>

  )
}
