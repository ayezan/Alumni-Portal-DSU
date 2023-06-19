import SurveyForm from './SurveyForm'

import React, {useState} from 'react'
import SurveyFilled from './components/SurveyFilled'

function Survey() {
  const handleSubmit = (answers: Record<number, string>) => {
    console.log(answers)
  }

  const [filled, setFilled] = useState(false)
  return (
    <>
      {!filled ? (
        <>
          <div className='container'>
            <div style={{textAlign: 'center'}}>
              <img
                className='middle'
                alt='DHA Suffa University'
                src='http://survey.dsu.edu.pk/images/logo.png'
                style={{padding: 10}}
                width='150px'
                height='140px'
              />
            </div>
            <br />
            <div className='wrapper text-center'>
              <h3>Welcome to Alumni Survey DSU</h3>
              <br />
              <br />
            </div>
            <SurveyForm onSubmit={handleSubmit} />
          </div>
        </>
      ) : (
        <SurveyFilled />
      )}
    </>
  )
}

export default Survey
