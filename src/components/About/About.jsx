// import React from 'react';
// import myImg from "../../assets/my proffull.jpg"
// import Container from '../Containner/Containner';


// const AboutMe = () => {
//   return (
//     <section className="py-16   font-bold ">

//       <Container>

//         <div className="container  mx-auto px-10 mt-[30px]">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             {/* Image Section */}
//             <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">

//               <div className='group '>
//                 <img
//                   src={myImg} //  image URL
//                   alt="Yeasin Chowdhury"
//                   className="w-full h-full object-cover rounded-full border-3 border-transparent group-hover:border-green-500 transition-all duration-500 ease-in-out "
//                 />
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="text-center md:text-left">
//               <h2 className="text-3xl font-semibold text-white">Yeasin Chowdhury</h2>
//               <p className="mt-4 text-lg text-white text-justify">
//                 _______Hi, I'm Yeasin Chowdhury, a passionate web developer with expertise in React and Tailwind CSS. I enjoy building responsive and user-friendly web applications that provide seamless experiences across devices.
//                 As a professional web designer, my blend aesthetic vision with technical skill to create intuitive and visually appealing digital experiences. my specialize in responsive design, ensuring websites function flawlessly across all devices.My focus is on delivering client-centric solutions, showcasing meticulous attention to detail and a commitment to continuous learning in every project.______"
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>


//     </section>
//   );
// };

// export default AboutMe;


 import React, { useState, useRef, useEffect } from 'react';
import Container from '../Containner/Containner';
// ছবির পাথ পরিবর্তন করা হয়েছে একটি প্লেসহোল্ডার URL দিয়ে, কারণ আসল পাথটি পাওয়া যাচ্ছে না।
// আপনি আপনার নিজের ছবির URL এখানে দিতে পারেন।
import myImg from "../../assets/my proffull.jpg" 

// 'Container' কম্পোনেন্টটি সরাসরি HTML div দিয়ে প্রতিস্থাপন করা হয়েছে,
// কারণ এর ডেফিনিশন পাওয়া যায়নি। এর ক্লাসগুলো সরাসরি div-এ যোগ করা হয়েছে।
// যদি আপনার 'Container' কম্পোনেন্টের নিজস্ব জটিল লজিক থাকে, তাহলে সেটি আলাদাভাবে যোগ করতে হবে।

const AboutMe = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // টেক্সট তার কন্টেইনার থেকে উপচে পড়ছে কিনা তা প্রাথমিক রেন্ডারে এবং উইন্ডো রিসাইজ করার সময় পরীক্ষা করুন
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fullDescription = `Hi, I'm Yeasin Chowdhury, a passionate web developer with expertise in React and Tailwind CSS. I enjoy building responsive and user-friendly web applications that provide seamless experiences across devices. As a professional web designer, my blend aesthetic vision with technical skill to create intuitive and visually appealing digital experiences. My specialize in responsive design, ensuring websites function flawlessly across all devices. My focus is on delivering client-centric solutions, showcasing meticulous attention to detail and a commitment to continuous learning in every project. My journey in web development is fueled by a desire to create impactful digital products that are not only functional but also delightful to use. I'm always eager to explore new challenges and contribute to innovative projects.`;

  // এখানে truncatedDescription ব্যবহার করার প্রয়োজন নেই কারণ fullDescription সরাসরি রেন্ডার করা হচ্ছে
  // এবং overflow CSS দ্বারা নিয়ন্ত্রিত হচ্ছে।
  // const truncatedDescription = fullDescription.substring(0, 300); 

  return (
    <>
      
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500 to-gray-500 relative overflow-hidden">
      {/* ভিজ্যুয়াল ইন্টারেস্টের জন্য ব্যাকগ্রাউন্ড সার্কেল */}
   <div className="absolute top-0 left-0 w-48 h-48 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Container কম্পোনেন্টের পরিবর্তে সরাসরি div ব্যবহার করা হয়েছে */}
      <div className="max-w-7xl mt-[40px] mx-auto px-10 sm:px-6 lg:px-8">
        <div className=" bg-purple-500  /90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border-4 border-white relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            {/* উন্নত স্টাইলিং সহ ইমেজ সেকশন */}
            <div className="flex-shrink-0 relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg group transition-all duration-500 ease-in-out transform hover:scale-105">
              <img
                src={myImg}
                alt="Yeasin Chowdhury"
                className="w-full h-full object-cover rounded-full border-4 border-transparent group-hover:border-blue-500 transition-all duration-500 ease-in-out"
              />
              {/* ঐচ্ছিক: হোভারে একটি সূক্ষ্ম ওভারলে যোগ করুন */}
              <div className="absolute inset-0 rounded-full bg-gray-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            {/* ডাইনামিক কন্টেন্ট সহ টেক্সট সেকশন */}
            <div className="text-center md:text-left flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white-900 leading-tight mb-4">
                Hello, I'm <span className="text-blue-600">Yeasin Chowdhury</span>
              </h2>
              <p className="text-xl text-white font-bold mb-4">
                Full Stack Web Developer | UI/UX Enthusiast
              </p>
              <div
                ref={textRef}
                className={`text-lg text-black leading-relaxed transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-full' : 'max-h-36 overflow-hidden'}`}
                style={!isExpanded && isOverflowing ? {
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                } : {}}
              >
                {fullDescription}
              </div>
              {isOverflowing && (
                <button
                  onClick={toggleExpand}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
        </div>


      </div> {/* Container div এর শেষ */}

      {/* ব্যাকগ্রাউন্ড ব্লব অ্যানিমেশনের জন্য CSS */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
    </>
  );
};

export default AboutMe;


