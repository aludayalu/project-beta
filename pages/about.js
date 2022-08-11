import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { Container } from "@mui/material";
import data from "../data/results.json";
import Card from "../components/card";
import PropTypes from "prop-types";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="ProjectBeta website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Container>
        <div>
        
          <h1 className="text-center text-4xl font-bold">About</h1>
          <div >
            <h1>
              Our School encourages students to push the boundaries of current
              understanding and set benchmarks in the field of education.
            </h1>
            <h1>
              Our objective is to inculcate in our students ethical values,
              nurture original thinking and develop a sense of national identity
              as well as global citizenship.
            </h1>
          </div>
          <div>
            <h1>Focus</h1>
            <h1>
              <ul>
                <li>
                  To provide pedagogy which will promote the learning of Science
                  & Technology, liberal Arts, language learning according to the
                  aptitude and potential of the students.
                </li>
                <li>To familiarize and equip the students with IT skills.</li>
                <li>
                  To engage students in a healthy environment of learning and
                  self-development where the focus is on a strong value system,
                  mental agility and physical fitness.
                </li>
                <li>
                  To make the students responsible for those who are less
                  fortunate.
                </li>
                <li>
                  To create ‘child safe’ environment both internally and
                  externally, where children are respected, protected, empowered
                  and active in their own protection, where staff are skilled,
                  confident, competent and well supported in meeting their
                  protection responsibilities.
                </li>
              </ul>
            </h1>
          </div>
          <div>
            <h1>Vision</h1>
            <h1>
              <ul>
                <li>
                  Broadening their horizons so that their world encompasses the
                  whole of mankind.
                </li>
                <li>
                  Deepening their thoughts so that their learning becomes the
                  means to achieve that perfection of mind in which analytical
                  reasoning goes hand in hand with logical conclusion.
                </li>
                <li>
                  Helping them incorporate the essential values of goodness,
                  honesty, humility and discipline as an integral part of their
                  being.
                </li>
                <li>
                  Guiding them to become contented individuals whose strength
                  lies in their ability to face adversities without fear and
                  overcome challenges with confidence.
                </li>
                <li>
                  Inculcating in them the sense of gender sensitivity so that
                  they learn to treat everyone as equal and rise above the
                  barriers of discrimination of any kind.
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
