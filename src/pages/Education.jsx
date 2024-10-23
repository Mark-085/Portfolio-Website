//import "./Education.css";
import { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
    return (
        <>
            <div className="bg-white rounded-2xl text-black py-8 max-w-[83rem] mx-auto pt-24" ref={ref}>
                <h1 className="text-center mb-8 text-4xl">Education</h1>
                <p id="desc" className="text-lg text-center mb-8 text-gray-500 mx-auto max-w-2xl p-8">
                    My academic journey has been focused on acquiring a solid foundation in computer science and engineering, along with hands-on project experience. Here's a breakdown of my education.
                </p>

                <div className="border-2 border-[#2eb2d3] rounded-2xl p-4 mx-auto my-8 transition duration-300 hover:border-gray-500 hover:shadow-md max-w-xl">
                    <div className="flex mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/en/6/61/Rajiv_Gandhi_Technical_University_logo.jpg" alt="RGPV Logo" className="h-12 w-12 rounded-lg mr-4" />
                        <div>
                            <p className="text-gray-500 text-lg">University Institute of Technology RGPV, Bhopal</p>
                            <p className="text-gray-500 text-sm my-1">Bachelor of Technology (B.Tech) in Computer Science and Engineering</p>
                            <p className="text-gray-500 text-xs">2021 - 2025</p>
                        </div>
                    </div>
                    <div className="text-black">
                        <p>CGPA: 8.08</p>
                        <p>
                            Currently pursuing a Bachelor of Technology in Computer Science and Engineering from RGPV Bhopal, focusing on software development, data structures, algorithms, and system design.
                        </p>
                    </div>
                </div>

                <div className="border-2 border-[#2eb2d3] rounded-2xl p-4 mx-auto my-8 transition duration-300 hover:border-gray-500 hover:shadow-md max-w-xl">
                    <div className="flex mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/CBSE_logo.png/1200px-CBSE_logo.png" alt="CBSE Logo" className="h-12 w-12 rounded-lg mr-4" />
                        <div>
                            <p className="text-gray-500 text-lg">Rainbow Public School, Rudrapur</p>
                            <p className="text-gray-500 text-sm my-1">Class 12th (CBSE) - Mathematics and Science</p>
                            <p className="text-gray-500 text-xs">2019 - 2020</p>
                        </div>
                    </div>
                    <div className="text-black">
                        <p>Percentage: 89%</p>
                        <p>
                            Completed my 12th grade with a focus on Mathematics and Science, securing 89% from Rainbow Public School, Rudrapur.
                        </p>
                    </div>
                </div>

                <div className="border-2 border-[#2eb2d3] rounded-2xl p-4 mx-auto my-8 transition duration-300 hover:border-gray-500 hover:shadow-md max-w-xl">
                    <div className="flex mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/CBSE_logo.png/1200px-CBSE_logo.png" alt="CBSE Logo" className="h-12 w-12 rounded-lg mr-4" />
                        <div>
                            <p className="text-gray-500 text-lg">Rainbow Public School, Rudrapur</p>
                            <p className="text-gray-500 text-sm my-1">Class 10th (CBSE)</p>
                            <p className="text-gray-500 text-xs">2017 - 2018</p>
                        </div>
                    </div>
                    <div className="text-black">
                        <p>Percentage: 94%</p>
                        <p>
                            Completed my 10th grade with 94% from Rainbow Public School, Rudrapur.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
});

export default Education;
