import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail
} from "react-icons/ai"
import ccp from './images/CCP.png';
import saa from './images/SAA.png';
import cloud_server from './images/cloud-server.png'
import stack from './images/stack.png'
import robot from './images/robot.png'
import profile from './images/ProfilePic.png'
import resume from './Resume - Ziyad Tahlilkar.pdf'
import { useState } from "react";
import './App.css'

function App() {
  const [focus, setFocus] = useState(null)

  return (
    <div>
      <main className="px-10 radial-bg md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between text-black">
            <h1 className="font-burtons text-xl">ziyadtahlilkar</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="transition-colors duration-500
                  bg-orange-500
                  hover:bg-amber-400
                  hover:text-black
                  border-2
                  border-red-500
                  hover:border-red-500
                  hover:scale-125
                  text-white px-4 py-2 border-none rounded-md ml-8"
                  href={resume} target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 font-medium text-orange-500 md:text-6xl">
              Ziyad Tahlilkar
            </h2>
            <h3 className="text-2xl py-2 text-black md:text-3xl">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-black max-w-xl mx-auto md:text-xl">
              Developer and cloud enthusiast based in Toronto. I build beautiful full-stack applications and deploy them into the cloud.
            </p>
            <div className="mx-auto bg-gradient-to-b from-orange-500 rounded-full w-60 h-60 relative overflow-hidden my-10 md:h-96 md:w-96">
              <img src={profile}></img>
            </div>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/ZiyadT" target="_blank"><AiFillGithub className="transition-all duration-500 ease-out hover:sepia"/></a>
              <a href="https://www.linkedin.com/in/ziyadt/" target="_blank"><AiFillLinkedin className="transition-all duration-500 ease-out hover:sepia"/></a>
              <a href="mailto: ziyadtahlilkar@hotmail.com"><AiOutlineMail className="transition-all duration-500 ease-out hover:sepia"/></a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">My Skills</h3>
            <p className="text-md py-2 leading-8">
            Since the beginning of my journey as a software engineer, I have worked with a plethora of different technologies
            and collaborated with talented people to create digital products
            for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8">
              I offer a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-400 flex-1">
              <img src={stack} className="mx-auto w-1/5 h-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-orange-200">
                Full-Stack Development
              </h3>
              <p className="py-2">
                I design and create full-stack applications with a beautiful and seamless front-end along with a secure and robust back-end.
              </p>
              <h4 className="py-4 text-orange-200">Technologies I Use</h4>
              <p className="py-1">React.js</p>
              <p className="py-1">Django</p>
              <p className="py-1">Node.js</p>
              <p className="py-1">MongoDB</p>
              <p className="py-1">PostgreSQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-400 flex-1">
              <img src={cloud_server} className="mx-auto w-1/5 h-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-orange-200">
                Cloud Services
              </h3>
              <p className="py-2">
                As an AWS Certified Cloud Practitioner, I can architect and implement cloud based solutions for almost any application.
              </p>
              <h4 className="py-4 text-orange-200">My Achievements</h4>
              <div className="flex justify-between">
                <div>
                  <a href="https://www.credly.com/badges/15856d77-7a8f-453b-8b4d-7ae889c659f1/public_url" target="_blank">
                    <img src={ccp} alt="AWS CCP" className="mx-auto w-2/3 h-auto"/>
                  </a>
                  <p className="mx-auto text-sm italic">Obtained April 30th, 2023</p>
                </div>
                <div>
                  <img src={saa} alt="AWS SAA" className="mx-auto w-2/3 h-auto opacity-40"/>
                  <p className="mx-auto text-sm italic">In progress</p>
                </div>
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-gray-400 flex-1">
              <img src={robot} className="mx-auto w-1/5 h-auto"/>
              <h3 className="text-lg font-medium pt-8 pb-2 text-orange-200">Engineering</h3>
              <p className="py-2">
                I make use of the power of mechanics, electrical systems, and software to create computer-controlled 'smart' machines.
              </p>
              <h4 className="py-4 text-orange-200">Tools I Use</h4>
              <p className="py-1">C/C++</p>
              <p className="py-1">MATLAB</p>
              <p className="py-1">Arduino</p>
              <p className="py-1">Programmable Logic Controllers</p>
              <p className="py-1">Robot Operating System (ROS)</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1">Projects</h3>
          </div>
          <div>
            <div className="flex justify-between" onMouseLeave={() => setFocus(null)}>
              <a href="http://54.173.185.222/" target="_blank" onClick={() => setFocus(null)} onMouseEnter={() => setFocus("tendie")} className="text-3xl font-bold my-3 p-5 w-full text-center border-transparent rounded-xl tendie w-fit text-white sm:w-1/3 sm:text-center">
                Tendie.
              </a>
              <div className={"my-auto mx-10 border-r border-t border-b border-8 tendie-info rounded-xl p-2 w-7/12 " + (focus == "tendie" ? "" : "hidden")}>
                Web app that displays historical and current stock data for any U.S security as well as recent news articles on the selected company. Pulls stock data from TwelveData and news data from NewsAPI. Deployed on EC2.
              </div>
            </div>
            <div className="flex justify-between" onMouseLeave={() => setFocus(null)}>
              <a href="https://github.com/ZiyadT/WeatherWatch" target="_blank" onClick={() => setFocus(null)} onMouseEnter={() => setFocus("weather")} className="text-3xl font-bold my-3 p-5 w-full text-center border-transparent rounded-xl weather w-fit text-white sm:w-1/3 sm:text-center">
                WeatherWatch
              </a>
              <div className={"my-auto mx-10 border-r border-t border-b border-8 weather-info rounded-xl p-2 w-7/12 " + (focus == "weather" ? "" : "hidden")}>
                Interactive weather app that displays weather data on any city/region or coordinate pair provided and displays them as cards on a dashboard. Pulls data from OpenWeather API.
              </div>
            </div>
            <div className="flex justify-between" onMouseLeave={() => setFocus(null)}>
              <a href="https://github.com/ZiyadT/CRUD-Workplace-Management" target="_blank" onClick={() => setFocus(null)} onMouseEnter={() => setFocus("workplace")} className="text-2xl whitespace-nowrap font-bold my-3 p-5 w-full text-center border-transparent rounded-xl workplace font-cabin w-fit text-white sm:w-1/3 sm:text-center sm:text-3xl">
                Workplace Management
              </a>
              <div className={"my-auto mx-10 border-r border-t border-b border-8 workplace-info rounded-xl p-2 w-7/12 " + (focus == "workplace" ? "" : "hidden")}>
                Simple CRUD application for managing departments and employees within a workplace.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
