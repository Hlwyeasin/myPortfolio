import React from 'react';
import myImg from "../../assets/my proffull.jpg"
import Container from '../Containner/Containner';


const AboutMe = () => {
  return (
    <section className="py-16   font-bold ">

      <Container>

        <div className="container  mx-auto px-10 mt-[30px]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image Section */}
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">

              <div className='group '>
                <img
                  src={myImg} //  image URL
                  alt="Yeasin Chowdhury"
                  className="w-full h-full object-cover rounded-full border-3 border-transparent group-hover:border-green-500 transition-all duration-500 ease-in-out "
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-semibold text-white">Yeasin Chowdhury</h2>
              <p className="mt-4 text-lg text-white text-justify">
                _______Hi, I'm Yeasin Chowdhury, a passionate web developer with expertise in React and Tailwind CSS. I enjoy building responsive and user-friendly web applications that provide seamless experiences across devices.
                As a professional web designer, my blend aesthetic vision with technical skill to create intuitive and visually appealing digital experiences. my specialize in responsive design, ensuring websites function flawlessly across all devices.My focus is on delivering client-centric solutions, showcasing meticulous attention to detail and a commitment to continuous learning in every project.______"
              </p>
            </div>
          </div>
        </div>
      </Container>


    </section>
  );
};

export default AboutMe;
