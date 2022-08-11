/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { Container } from "@mui/material";
import data from "../data/results.json";
import Card from "../components/card";
import PropTypes from "prop-types";
import Simage from '../public/Simage.jpg'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="ProjectBeta website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <div className="flex flex-col md:flex-row mt-8 py-20 justify-between">
          <div className="flex flex-col justify-center items-center">
            <div className="sm:text-5xl text-3xl font-semibold px-16 pb-8">
              <h1 className="mb-2">Learn Today</h1>
              <h1>Teach Tomorrow</h1>
            </div>
            <p className="text-lg sm:text-2xl px-16 pt-4 pb-12">
              Delhi Public School R.K. Puram.
            </p>
            <div className="flex px-16 w-3/4">
              <div className="text-xl mt-4 sm:mt-0 font-medium rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-50 text-white px-6 py-4 mr-4">
                <a href="/about">About</a>
              </div>
              <div className="text-xl mt-4 sm:mt-0 font-medium rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-50 text-white px-6 py-4">
                <a href="/results">Results</a>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/Simage.jpg"
              alt="illustration"
              style={{ height: 400, width: "auto", borderRadius: 8 }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 pb-16">
          <div className="w-full mx-4 w-4/5 text-center">
            <h1 className="font-semibold text-4xl py-4">Our Mission</h1>
            <p className="text-xl py-2">
              Our mission is to nurture our students to realize their own
              potential and identify and achieve their goals in an environment
              of rich tutelage, joyful and harmonious learning while keeping
              alive the spirit of togetherness and ‘Service Before Self’. Our
              aim is to bring forth responsible citizens of the world who make a
              difference and who will make the school and nation proud of their
              achievements and stellar personal qualities
            </p>
          </div>
          <div className="border-b-2 w-4/5 pt-8"></div>
          <div className="w-full mx-4 w-4/5 text-center pt-8">
            <h1 className="font-semibold text-4xl py-4">Vision</h1>
            <p className="text-xl pt-2">
              Our vision is to prepare our children for life by:-{" "}
            </p>
            <p className="text-xl">
              ➤ broadening their horizons so that their world encompasses the
              whole of mankind.{" "}
            </p>
            <p className="text-xl pb-2">
              ➤ deepening their thoughts so that their learning becomes the
              means to achieve that
            </p>
          </div>
          <div className="border-b-2 w-4/5 pt-8"></div>
          <div className="text-center w-full mx-4 w-4/5 pt-8">
            <h1 className="font-semibold text-4xl py-4">Focus</h1>
            <p className="text-xl pt-2">
              ➤ To provide pedagogy which will promote the learning of Science &
              Technology, liberal Arts, language learning according to the
              aptitude and potential of the students.</p>
            <p className="text-xl pb-2">➤ To familiarize and equip
              the students with IT
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
