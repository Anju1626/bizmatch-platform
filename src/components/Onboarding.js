import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const buyerQuestions = [
  { id: 1, question: 'Which industries are you interested in?', type: 'multiselect', options: ['Tech', 'Retail', 'Manufacturing', 'Health', 'Finance'] },
  { id: 2, question: 'What is your acquisition budget?', type: 'range', min: 100000, max: 10000000 },
  { id: 3, question: 'Preferred deal timeframe?', type: 'select', options: ['0-3 months', '3-6 months', '6+ months'] },
  { id: 4, question: 'Have you acquired a business before?', type: 'radio', options: ['Yes', 'No'] },
];

const sellerQuestions = [
  { id: 1, question: 'Describe your business industry', type: 'text' },
  { id: 2, question: 'Annual revenue range?', type: 'range', min: 50000, max: 5000000 },
  { id: 3, question: 'Type of sale?', type: 'select', options: ['Full sale', 'Partnership', 'Earn-out'] },
  { id: 4, question: 'Are financial documents ready?', type: 'radio', options: ['Yes', 'No'] },
];

function Question({ q, answer, onAnswer }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (q.type === 'multiselect') {
      if (!Array.isArray(answer)) {
        onAnswer([value]);
      } else {
        if (checked) {
          onAnswer([...answer, value]);
        } else {
          onAnswer(answer.filter(a => a !== value));
        }
      }
    } else if (q.type === 'range') {
      onAnswer(Number(value));
    } else {
      onAnswer(value);
    }
  };

  return (
    <div>
      <label className="block mb-2 font-medium">{q.question}</label>
      {q.type === 'text' && (
        <input
          type="text"
          className="w-full border rounded p-2"
          value={answer || ''}
          onChange={e => onAnswer(e.target.value)}
        />
      )}
      {q.type === 'select' && (
        <select
          className="w-full border rounded p-2"
          value={answer || ''}
          onChange={e => onAnswer(e.target.value)}
        >
          <option value="" disabled>Select an option</option>
          {q.options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      )}
      {q.type === 'radio' && q.options.map(opt => (
        <label key={opt} className="inline-flex items-center mr-4">
          <input
            type="radio"
            name={`question-${q.id}`}
            value={opt}
            checked={answer === opt}
            onChange={handleChange}
            className="mr-1"
          />
          {opt}
        </label>
      ))}
      {q.type === 'multiselect' && q.options.map(opt => (
        <label key={opt} className="inline-flex items-center mr-4">
          <input
            type="checkbox"
            value={opt}
            checked={answer ? answer.includes(opt) : false}
            onChange={handleChange}
            className="mr-1"
          />
          {opt}
        </label>
      ))}
      {q.type === 'range' && (
        <input
          type="range"
          min={q.min}
          max={q.max}
          value={answer || q.min}
          onChange={handleChange}
          className="w-full"
        />
      )}
      {q.type === 'range' && <div>Selected: {answer || q.min}</div>}
    </div>
  );
}

function Onboarding() {
  const { userType } = useParams();
  const questions = userType === 'seller' ? sellerQuestions : buyerQuestions;
  const [answers, setAnswers] = useState({});
  const [step, setStep] = useState(0);

  const onAnswer = (value) => {
    setAnswers(prev => ({ ...prev, [questions[step].id]: value }));
  };

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      alert(`Onboarding submitted for ${userType}: ` + JSON.stringify(answers, null, 2));
      // Here, you could submit answers to backend
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Onboarding - {userType.charAt(0).toUpperCase() + userType.slice(1)}</h2>
      <progress value={step + 1} max={questions.length} className="w-full mb-4" />
      <Question q={questions[step]} answer={answers[questions[step].id]} onAnswer={onAnswer} />
      <div className="flex justify-between mt-6">
        {step > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Back
          </button>
        )}
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {step < questions.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
