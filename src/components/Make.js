import React, { useState } from 'react'

function Make ({ db }) {
  const [answers, setAnswers] = useState(['', ''])
  const [question, setQuestion] = useState('')
  function modifyAnswerText (index, text) {
    const newAnswers = [...answers]
    newAnswers[index] = text
    setAnswers(newAnswers)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
      }}
    >
      <input
        type='text'
        placeholder='Enter your question'
        onChange={event => setQuestion(event.target.value)}
        value={question}
      />
      <input
        type='text'
        placeholder='Answer 1'
        onChange={event => modifyAnswerText(0, event.target.value)}
        value={answers[0]}
      />
      <input
        type='text'
        placeholder='Answer 2'
        onChange={event => modifyAnswerText(1, event.target.value)}
        value={answers[1]}
      />
      {answers.map(
        (answer, index) =>
          index !== 0 &&
          index !== 1 && (
            <>
              <input
                type='text'
                placeholder={`Answer ${index + 1}`}
                onChange={event => modifyAnswerText(index, event.target.value)}
                value={answers[index]}
              />
              <button
                onClick={() => {
                  const newAnswers = [...answers]
                  newAnswers.splice(index, 1)
                  setAnswers(newAnswers)
                }}
              >
                Delete answer
              </button>
            </>
          )
      )}
      <button
        onClick={() => {
          const newAnswers = [...answers]
          newAnswers.push('')
          setAnswers(newAnswers)
        }}
      >
        Add a new answer field
      </button>
      <button
        style={{ marginTop: '15px' }}
        onClick={() => {
          if (answers.filter(item => item === '').length !== 0) {
            alert('You have blank answers')
          } else {
            db.collection('polls').add({})
          }
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default Make
