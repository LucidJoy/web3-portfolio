import { SlCalender } from "react-icons/sl";
import "./Experience.css";
import { useEffect, useState } from "react";

const Experience = ({ state }) => {
  const [edu, setEdu] = useState();

  useEffect(() => {
    const { contract } = state;
    const eduDetails = async () => {
      const education = await contract.methods.allEducations().call();
      console.log(education);
      setEdu(education);
    };
    contract && eduDetails();
  }, [state]);

  return (
    <section className='exp-section'>
      <h1 className='title'>Experience & Education </h1>

      <div className='container'>
        <div className='education'>
          <h1 className='edu-tittle'>Education</h1>
          {edu &&
            edu.map((education, idx) => {
              return (
                <div className='edu-card' key={idx}>
                  <p className='card-text1'>
                    <SlCalender className='icon' /> {education.date}
                  </p>
                  <h3 className='card-text2'>{education.degree}</h3>
                  <p className='card-text3'>{education.knowledgeAcquired}</p>
                  <p className='card-text4'>{education.institution}</p>
                </div>
              );
            })}
        </div>
        {/* experience */}
        <div className='education'>
          <h1 className='edu-tittle'>Experience</h1>
          <div className='edu-card'>
            <p className='card-text1'>
              <SlCalender className='icon' /> March 2013 - Present
            </p>
            <h3 className='card-text2'>Blockchain Developer Intern</h3>
            <p className='card-text3'>
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className='card-text4'>Code Eater</p>
          </div>
          {/* card2 */}
          <div className='edu-card'>
            <p className='card-text1'>
              <SlCalender className='icon' /> March 2013 - Present
            </p>
            <h3 className='card-text2'>Blockchain Developer Intern</h3>
            <p className='card-text3'>
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className='card-text4'>Code Eater</p>
          </div>
          {/* card3 */}
          <div className='edu-card'>
            <p className='card-text1'>
              <SlCalender className='icon' /> March 2013 - Present
            </p>
            <h3 className='card-text2'>Blockchain Developer Intern</h3>
            <p className='card-text3'>
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className='card-text4'>Code Eater</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
