import Header from '@/components/home/header'
import LinkButton from '@/components/shared/linkbutton'
import { Metadata } from 'next'

 

export const metadata: Metadata = {
  title: '404 Not Found',
}
 
export default function NotFound() {
  return (
  <>
  
      <Header />
      <div className='pt-40 text-center'>
        <h2 className='text-7xl font-bold font-secondary text-gold-500'>404 Not Found</h2>
        <p className="text-2xl font-bold my-10">Sorry, the page you are looking for does not exist.</p>
        <LinkButton className="container" classNameLink='container'  href="/">Return Home</LinkButton>
      </div>
   </>
  )
}
