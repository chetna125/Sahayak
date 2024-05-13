import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-8 flex bg-gray-200"> {/* Added bg-gray-200 for grey background */}
      <div className="w-1/2 pr-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-6">Welcome to Sahayak, where innovation meets compassion to create a brighter, more inclusive future for individuals with disabilities. At Sahayak, we believe that everyone deserves the opportunity to communicate, learn, and thrive, regardless of physical or cognitive challenges. With our pioneering hardware and software solutions, we're on a mission to revolutionize accessibility and empowerment for all.</p>
        <p className="mb-6">At Sahayak, our mission is simple yet profound: to bridge the gap between individuals with disabilities and society, while providing inclusive educational opportunities for all. We're committed to leveraging technology to empower individuals to express themselves, engage with their communities, and pursue their dreams with confidence and dignity.</p>
        <p className="mb-6">Our vision is a world where accessibility is not just a privilege but a fundamental right, where inclusivity is celebrated, and where every individual has the opportunity to reach their full potential. Through our innovative solutions and unwavering dedication, we're working towards a future where barriers are dismantled, and opportunities are accessible to all.</p>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">Have questions or want to learn more about Sahayak? We'd love to hear from you! Feel free to reach out to us via email, phone, or social media. Together, let's create a more inclusive world, one step at a time. Thank you for choosing Sahayak - where innovation, compassion, and inclusivity come together to create a brighter tomorrow for all.</p>
          <ul>
            <li className="mb-2">Email: pratik1971sinha@gmail.com</li>
            <li className="mb-2">Phone: +91 7667069584</li>
            <li>Address: B-704, Boys Hostel Block 1, VIT Bhopal University, 466114</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2">
        <img src="../signup.png" alt="About Us" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default AboutUsPage;
