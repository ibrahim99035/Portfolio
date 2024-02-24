"use client";
import Image from "next/image";

const PortfolioPage = () => {
    // Sample data for demonstration
    const projects = [
      {
        id: 1,
        name: 'Diyarah Real Estate Landing Page',
        description: 'Diyarah Real Estate Company utilizes React functional components for a seamless user experience. Netlify deployment ensures rapid updates directly from GitHub, while React Router enables smooth navigation. ',
        html_url: 'https://github.com/ibrahim99035/Diyarah',
        logo: '/Projects/diyarah.jpg', 
      },
      {
        id: 2,
        name: 'LSTM Review Analyzer',
        description: 'A Django web app for movie review sentiment analysis using LSTM-based RNNs, enabling advanced sentiment analysis and practical insights. Skills showcased include deep learning expertise, Django web development, and Python proficiency.',
        html_url: 'https://github.com/ibrahim99035/ReviewAnalyzer',
        logo: '/Projects/ML.jpg', 
      },
      {
        id: 3,
        name: 'Network Tracker',
        description: 'This project visualizes network traffic using Python, Django, Wireshark, and Google Maps, with pcap file processing and GeoLiteCity integration. Skills showcased include Python, Django, and geospatial visualization.',
        html_url: 'https://github.com/ibrahim99035/Network_Tracker',
        logo: '/Projects/Networking-cover.png', 
      },
      {
        id: 4,
        name: 'Back Rooms Controller',
        description: 'Home Automation Backend Server powered by Node.js and MongoDB. Engineered to streamline communication between smart home devices and the centralized system, it offers seamless automation, efficient data storage, and optimized retrieval capabilities.',
        html_url: 'https://github.com/ibrahim99035/BackRooms',
        logo: '/Projects/home.webp', 
      },
    ];
  
    return (
      <div className="overflow-y-scroll bg-black">
        <h1 className="text-3xl font-bold text-center mt-8 mb-35 text-highlight">Projects</h1>
        <div className="flex flex-wrap justify-center bg-black">
  
          {projects.map(project => (
            <div
              key={project.id}
              className="w-64 m-4 rounded-lg shadow-md transition-transform transform hover:scale-105 bg-background"
            >
              <div className="overflow-hidden h-24">
                {project.logo && (
                  <Image 
                    src="/Social/github.png" 
                    width={24} height={24} 
                    alt={`GitHub Logo`} 
                    className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-full w-10 h-10" />
                )}
              </div>
              <div className="p-4">
                <Image 
                  src={ project.logo }
                  width={480} height={480} 
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
                <h3 className="text-xl font-semibold text-highlight">{project.name}</h3>
                <p className="mt-2 text-highlight">{project.description}</p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-highlight hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
          <div className="w-full flex justify-center mt-8 text-highlight">          
            <div className="max-w-4xl mx-auto p-4">
              <h2 className="text-3xl font-bold text-center text-highlight">University Journey &amp; Graduation Project</h2>
              <div>
                <h3 className="text-lg font-semibold mb-2">Education:</h3>
                <p className="mb-4">
                  I graduated from the Faculty of Computers and Informatics at Tanta University, specializing in Information Technology. Throughout my academic journey, I studied a diverse range of subjects, including Computer Science Fundamentals, C++, DBMS, Java, Data Structures, Algorithms, Networking, Computer Architecture, Operating Systems, Machine Learning, and Cyber Security Fundamentals.
                </p>
                <Image 
                  src="/Me/grad.jpg" 
                  width={240} height={240} 
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Computers &amp; AI Olympiad (Helwan University):</h3>
                <p className="mb-4">
                  Our participation in the Fifth Olympiad for Computers &amp; AI at Helwan University featured a web application developed using Flask. This application incorporates AI models built with TensorFlow and Keras libraries, trained on extensive image datasets, enabling accurate diagnosis of both Covid-19 and Brain Tumors.
                </p>
                <Image 
                  src="/Me/helawan.jpg" 
                  width={480} height={480} 
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Graduation Project:</h3>
                <p className="mb-4">
                  Under the supervision of 
                  <a href="https://www.linkedin.com/in/dr-aida-a-nasr-a3b936122/" target="_blank" className="text-background hover:text-highlight font-bold"> Dr. Aida Nasr</a>, 
                  I served as the lead backend developer for a Smart Hospital in a Smart City prototype. 
                  This project showcased my commitment to leveraging technology 
                  for positive change in healthcare and aligns with my passion for transformative 
                  projects in connected Smart Cities. Our project received 1st place in 
                  the Computer Engineering Exhibition at Al-Azhar University in Cairo.
                  <a href="https://drive.google.com/file/d/15hqdzY9NrTE2aFXyicGAsLzqndfGVUbA/view?usp=sharing" target="_blank"
                    className="text-background hover:text-highlight font-bold">
                    View The Book on Google Drive
                  </a>
                </p>
                <Image 
                  src="/Me/5g.jpg" 
                  width={480} height={480} 
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
                <Image 
                  src="/Me/AUC.jpg" 
                  width={480} height={480} 
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto mt-10"
                />
                <Image 
                  src="/Me/azhar.jpg" 
                  width={480} height={480} 
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto mt-10"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Skills:</h3>
                <p className="mb-4">
                  Throughout my journey, I have developed a strong skill set encompassing areas such as backend development, database integration, interface design, API development, and project management. I am proficient in languages such as C++, Java, and have hands-on experience with technologies like DBMS, networking, and machine learning.
                </p>
                <Image 
                  src="/Me/ECPC.jpg" 
                  width={480} height={480}  
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Professional Growth:</h3>
                <p>
                  My journey has been characterized by continuous learning and professional growth. Each project and experience has contributed to my development as a technologist and innovator. I am passionate about leveraging technology to address real-world challenges and am committed to making a positive impact in the field of Information Technology.
                </p>
                <Image 
                  src="/Me/gradcer.jpeg" 
                  width={280} height={280}  
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Udacity Nanodrgree:</h3>
                <p>
                  Embarking on the Professional Frontend Nanodegree journey with Udacity has been an exhilarating experience! Throughout the program, I delved deep into the world of JavaScript, Node.js, and the Express library, gaining invaluable insights and honing my technical expertise. Crafting two significant projects – an Interactive Landing page and a Weather App – not only solidified my understanding but also fueled my passion for frontend development. Beyond coding, I immersed myself in Agile methods, freelancing strategies, and the intricacies of tech businesses, enriching my professional toolkit and broadening my career horizons. This journey has been challenging yet immensely rewarding, affirming my dedication to continuous growth and innovation in the ever-evolving tech landscape. I'm excited to leverage my newfound skills and knowledge as I embark on the next phase of my career journey.
                </p>
                <Image 
                  src="/Me/udacity.jpg" 
                  width={580} height={580}  
                  alt={`GitHub Logo`} 
                  className="rounded-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>      
    );
  };

export default PortfolioPage;
