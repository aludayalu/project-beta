/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/grid.module.css'
import Navbar from '../components/navbar'
import { Container } from '@mui/material'
import data from "../data/results.json"
import Card from "../components/card"
import PropTypes from "prop-types"

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>;
Grid.propTypes = {
  children: PropTypes.node.isRequired
};
const Results = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Results</title>
        <meta name="description" content='ProjectBeta website'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Navbar/>
      <Container>
        <div>
          <h1 className='flex text-5xl font-bold py-12 justify-center items-center'>Results 2022</h1>
          {data.map((batch,index) => (
            <div key={index}>
              <h2 className='text-3xl font-bold pb-8 text-center'>{`${batch.Batch}`}</h2>
              <Grid>
                {batch.Toppers.map((result, index) => (
                  <Card key={index} className='text-center'>
                    <Image src={result.image} width='200' height='200'/>
                    <div className='text-2xl'>{result.name}</div>
                    <div className='text-xl'>{result.percentage}</div>
                    <div className='text-xl'>{result.stream}</div>
                  </Card>
                ))}
              </Grid>
            </div>
          ))}
          <div className="flex flex-col justify-center items-center pt-4 pb-16"></div>
          <div className="flex flex-col justify-center items-center pt-4 pb-16"></div>
        </div>
      </Container>
    </div>
  )
}

export default Results