import React from 'react'
import Container from '../Containner/Containner'

const Skills = () => {
  return (

         <section className='py-16 bg-gray-900'>

    <Container>
        <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-gray-800">My Skills</h2>
      <p className="mt-4 text-lg text-gray-600">
        Proficient in modern web development technologies.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Skill 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">HTML</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>90%</span>
            <span>Advanced</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      {/* Skill 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">CSS</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>85%</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>

      {/* Skill 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>80%</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>

      {/* Skill 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">React</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>75%</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* Skill 5 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">Tailwind CSS</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>70%</span>
            <span>Intermediate</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-teal-500 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>
      </div>

      {/* Skill 6 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>65%</span>
            <span>Beginner</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>
    </div>
    </Container>
         </section>
   
  )
}

export default Skills;
