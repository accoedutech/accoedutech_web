import React from 'react'
import "./Details.scss";
import { BarChartOutlined} from "@ant-design/icons";


export const Course = () => {
  return (
    <>
    <div className='container'>
      <h1>Course Curriculum</h1>
      <p>Become a job-ready Full Stack Web Development by the end of 30 weeks, and get an upgrade to your career. Our hiring partners include companies like IBM, Samsung, Paytm Money, BharatPe, Sharechat among 200 others.</p>
      <div>
        <div>
        <BarChartOutlined />
        <h2>Full Stack Web Program</h2>
        <p>Learn fundamental principles of web which drives web in products.</p>
        </div>
        
      
      </div>
      <div>
        <div>
          <BarChartOutlined/>
        </div>
        <h2>UI & Interaction Design</h2>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    


    </>

  )
}
