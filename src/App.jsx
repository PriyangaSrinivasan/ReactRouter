import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import All from "./Pages/All";
import FullStack from "./Pages/FullStack";
import CyberSecurity from "./Pages/CyberSecurity";
import DataScience from "./Pages/DataScience";
import Career from "./Pages/Career";
import PageNotFound from "./Pages/PageNotFound";
import Navbar from "./Components/Navbar"
const App = () => {
  let data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBHHaKkdYPMAKlHlheIepXy6Y6tIvwZj85g&s",
      head: "FULL STACK DEVELOPMENT",
      author:"By Isha Sharma",
      content: "Best Full-Stack Development Project Ideas in 2024",
      postdate: "25 Mar 2024",
      readtime:"4 Min Read"
    },
    {
      image:
        "data:image/png;base64,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",
      head:"FULL STACK DEVELOPMENT",
      author:"By Meghana D",
      content: "How Long Would It Take to Be a Full Stack Developer?",
      postdate: "26 Mar 2024",
      readtime:"3 Min Read"
    },
    {
      image:
        "data:image/jpeg;base64,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",
      head: "FULL STACK DEVELOPMENT",
      author:"By Lukesh S",
      content: "How does Apache work? A detailed introduction to Apache",
      postdate: "26 Mar 2024",
      readtime:"5 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/09/Full-Stack-Developer-course-syllabus.png",
      head: "FULL STACK DEVELOPMENT",
      author:"By Srinithi Sankar",
      content: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024 [UPDATED]",
      postdate: "26 Mar 2024",
      readtime:"6 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
      head: "DATA BASE",
      author:"By Meghana D",
      content: "10 Best Database Management Systems For Software Developers",
      postdate: "25 Mar 2024",
      readtime:"7 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/05/react-768x402.jpg",
      head: "FULL STACK DEVELOPMENT",
      author:"By Saakshi Priyadarshini",
      content: "6 Essential Prerequisites For Learning ReactJS",
      postdate: "25 Mar 2024",
      readtime:"8 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
      head: "CYBER SECURITY",
      author:"By Tushar Vinocha",
      content: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      postdate: "16 April 2024",
      readtime:"2 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      head: "CYBER SECURITY",
      author:"By Jaishree Tomar",
      content: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      postdate: "24 Mar 2024",
      readtime:"3 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      head: "CYBER SECURITY",
      author:"By Meghana D",
      content: "What Is Hacking? Types of Hacking & More",
      postdate: "25 March 2024",
      readtime:"5 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
      head: "CYBER SECURITY",
      author:"By Tushar Vinocha",
      content: "8 Different Types of Cybersecurity and Threats Involved",
      postdate: "25 Mar 2024",
      readtime:"6 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png",
      head: "CYBER SECURITY",
      author:"By Tushar Vinocha",
      content: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      postdate: "25 Mar 2024",
      readtime:"8 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      head: "CYBER SECURITY",
      author:"By Srinithi Sankar",
      content: "The Ultimate Cybersecurity Roadmap for Beginners",
      postdate: "23 Mar 2024",
      readtime:"9 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      head: "DATASCIENCE",
      author:"By Isha Sharmar",
      content: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      postdate: "16 Apr, 2024",
      readtime:"6 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1200x628.webp",
      head: "DATASCIENCE",
      author:"By Lukesh S",
      content: "12 Real-World Data Science Examples: Power Of Data Science",
      postdate: "25 Mar, 2024",
      readtime:"6 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
      head: "DATASCIENCE",
      author:"By Saakshi Priyadarshini",
      content: "Can A Commerce Student Do Data Science?",
      postdate: "16 April, 2024",
      readtime:"6 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4-1200x676.png",
      head: "DATASCIENCE",
      author:"By Jaishree Tomar",
      content: "Roles and Responsibilities of a Data Scientist",
      postdate: "16 April, 2024",
      readtime:"6 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-2048x1024.png",
      head: "CAREER",
      author:"By Lahari Chandana",
      content: "Data Science vs Data Analytics | Best Career Choice in 2024",
      postdate: "16 April, 2024",
      readtime:"3 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-2048x1575.jpg",
      head: "CAREER",
      author:"By Lahari Chandana",
      content: "As a Software Engineer, How Do I Shift My Career to DevOps?",
      postdate: "16 April, 2024",
      readtime:"4 Min Read"
    },
    {
      image:
        "https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
      head: "CAREER",
      author:"By Saanchi Bhardwaj",
      content: "Career in Animation: Jobs, Salary, Future Scope in India (2024)",
      postdate: "03 May, 2024",
      readtime:"4 Min Read"
    },
    {
      img:
        "https://png.pngtree.com/png-clipart/20211009/original/pngtree-404-not-found-mdern-transparent-background-png-image_6839517.png"
    },

  ];

  return (
    <div>
    
      <BrowserRouter>
      <div>
      <Navbar />
      
      </div>
      
      <Routes>
        <Route path="/" element={<All data={data} />} />
        <Route path="/fullstack" element={<FullStack  data={data}/>} />
        <Route path="/cybersecurity" element={<CyberSecurity  data={data} />} />
        <Route path="/datascience" element={<DataScience  data={data}/>} />
        <Route path="/career" element={<Career  data={data}/>} />
        <Route path="*" element={<PageNotFound data={data} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
