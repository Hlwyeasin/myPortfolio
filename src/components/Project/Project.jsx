// Project.jsx

import React from 'react';
import Container from '../Containner/Containner';
import myprotfoScreen from "../../assets/myprotfollioScreenshort.png"

const Project = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800">
    <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src={myprotfoScreen}
              alt="Project One"
              className="w-full h-48 object-cover"
              // onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/314e68/ffffff?text=Image+Error"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                E-commerce Platform
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                A fully functional e-commerce website built with React and a custom backend. Features include user authentication, product listings, shopping cart, and order management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">React</span>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Tailwind CSS</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Node.js</span>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">MongoDB</span>
              </div>
              <div className='flex justify-end space-x-4'>
                <a
                 href='https://agenc-full.vercel.app/'  target="_blank"
                
                  className="  inline-flex items-center px-4 py-2 bg-black-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  aria-label="View Project One Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Live
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800"
                  aria-label="View Project One Code"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.175a1.5 1.5 0 00-2.79 0L7.5 7.155A1.5 1.5 0 008.895 9h2.21A1.5 1.5 0 0013.5 7.155l-2.105-4.98zM6.5 10A1.5 1.5 0 005 11.5v4A1.5 1.5 0 006.5 17h7A1.5 1.5 0 0015 15.5v-4A1.5 1.5 0 0013.5 10h-7zm2 1h3a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://placehold.co/600x400/528340/ffffff?text=Project+Two"
              alt="Project Two"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/528340/ffffff?text=Image+Error"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Task Management App
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                A collaborative task management application with real-time updates. Users can create, assign, and track tasks, utilizing WebSockets for instant synchronization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Vue.js</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">Express.js</span>
                <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-teal-900 dark:text-teal-300">PostgreSQL</span>
                <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">WebSockets</span>
              </div>
              <div className="flex justify-end space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  aria-label="View Project Two Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800"
                  aria-label="View Project Two Code"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.175a1.5 1.5 0 00-2.79 0L7.5 7.155A1.5 1.5 0 008.895 9h2.21A1.5 1.5 0 0013.5 7.155l-2.105-4.98zM6.5 10A1.5 1.5 0 005 11.5v4A1.5 1.5 0 006.5 17h7A1.5 1.5 0 0015 15.5v-4A1.5 1.5 0 0013.5 10h-7zm2 1h3a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105">
            <img
              src="https://placehold.co/600x400/6A5ACD/ffffff?text=Project+Three"
              alt="Project Three"
              className="w-full h-48 object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/6A5ACD/ffffff?text=Image+Error"; }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Weather Dashboard
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4">
                An interactive weather dashboard that displays current weather conditions and forecasts using data from a third-party API. Includes location search and unit conversion.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">HTML5</span>
                <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-cyan-900 dark:text-cyan-300">CSS3</span>
                <span className="bg-lime-100 text-lime-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-lime-900 dark:text-lime-300">JavaScript</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">API Integration</span>
              </div>
              <div className="flex justify-end space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  aria-label="View Project Three Demo"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 dark:focus:ring-offset-gray-800"
                  aria-label="View Project Three Code"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.175a1.5 1.5 0 00-2.79 0L7.5 7.155A1.5 1.5 0 008.895 9h2.21A1.5 1.5 0 0013.5 7.155l-2.105-4.98zM6.5 10A1.5 1.5 0 005 11.5v4A1.5 1.5 0 006.5 17h7A1.5 1.5 0 0015 15.5v-4A1.5 1.5 0 0013.5 10h-7zm2 1h3a.5.5 0 01.5.5v1.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                  </svg>
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </section>
  );
};

export default Project;