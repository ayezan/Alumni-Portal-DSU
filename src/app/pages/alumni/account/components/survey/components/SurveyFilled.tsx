import React from 'react'

const SurveyFilled = () => {
  return (
    <div id='container'>
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
      <div id='wrapper'>
        <p id='tokenmessage'>
          <span className='error'>Error</span>
          <br />
          <br />
          This survey is no longer available.
          <br />
          <br />
          Please contact Administrator ( survey.admin@dsu.edu.pk ) for further assistance.
          <br />
          <br />
        </p>
      </div>
    </div>
  )
}

export default SurveyFilled
