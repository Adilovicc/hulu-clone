import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import requests from '../utils/requests'
import Results from '../components/Results'

export default function Home({results}) {
  return (
    <div className='relative'>
        <Head>
          <title>Hulu clone</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-[#06202A] pb-10">
        <Header/>
        <NavBar/>
        </div>
        <Results request={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
   const genre = context.query.genre;

   const request = 
   await fetch(`https://api.themoviedb.org/3${requests[genre]?.url 
   || requests.fetchTrending.url}`).then((res)=>res.json());

   return {
      props: {
       results: request.results,
      },
   }
}
