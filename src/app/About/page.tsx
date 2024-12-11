import Link from 'next/link'
import {Charm} from 'next/font/google'



const charm = Charm({
    subsets: ['latin'],
    weight: ['400', '700'],
})



export default function About() {
    return (
      <div className="w-full max-w-2xl mx-auto bg-gray-100 rounded-2xl shadow-xl mt-10">
        <h1 className="text-center  align-middle py-6 hover:scale-110" style={{fontFamily: 'Charm', fontWeight: 700 , fontSize: '48px'}}>About Me</h1>
        <div className="shadow-xl rounded-xl p-6 bg-yellow-100  shadow-yellow-500 mb-8">
          <p className="text-gray-600 mb-4">
            I'm a passionate individual with a background in digital marketing and a growing expertise in web development.
            I've completed a digital marketing course and I'm currently expanding my skills through the Governor Sindh Initiative IT courses.
          </p>
          <p className="text-gray-600 mb-4">
            My journey in the tech world started with HTML and CSS, and I've since added TypeScript to my skill set.
            I'm constantly learning and looking for new challenges to improve my abilities.
          </p>
          <p className="text-gray-600">
            
            I believe in the power of continuous learning and I'm excited about the future of technology and digital marketing.
          </p>
        </div>
      </div>
    )
  }