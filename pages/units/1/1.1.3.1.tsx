'use client';

import { useState } from 'react';

interface Answers {
  q1: string[];
  q2: string[];
  q3: string[];
}

const Exercise1: React.FC = () => {
  const [answers, setAnswers] = useState<Answers>({
    q1: [],
    q2: [],
    q3: [],
  });

  const [showExplanation, setShowExplanation] = useState(false);
  const [correctAnswer1, setCorrectAnswer1] = useState(false);
  const [correctAnswer2, setCorrectAnswer2] = useState(false);
  const [correctAnswer3, setCorrectAnswer3] = useState(false);

  const handleCheckboxChange = (question: keyof Answers, option: string) => {
    const currentAnswers = answers[question];
    const updatedAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter((ans) => ans !== option)
      : [...currentAnswers, option];
    setAnswers({
      ...answers,
      [question]: updatedAnswers,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted Answers:', answers);
    setShowExplanation(true);
    if (answers.q1?.length === 1 && answers.q1[0] === 'Yaseen') {
      setCorrectAnswer1(true);
    }
    if (answers.q2?.length === 1 && answers.q2[0]?.includes('Faheem')) {
      setCorrectAnswer2(true);
    }
    if (answers.q3?.length === 1 && answers.q3[0] === 'My') {
      setCorrectAnswer3(true);
    }
  };

  return (
    <div className='p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700'>
      <h3>Exercise #1</h3>
      <form onSubmit={handleSubmit}>
        <p>In the examples below, try to figure out the ﺟﺮ words:</p>
        <ol>
          <li>
            <p>Car of Yaseen {showExplanation ? correctAnswer1 ? '✓' : '✘' : ''}</p>
            <label>
              <input
                type="checkbox"
                name="q1"
                value="Car"
                checked={answers.q1.includes('Car')}
                onChange={() => handleCheckboxChange('q1', 'Car')}
              />
              Car
            </label>
            <label>
              <input
                type="checkbox"
                name="q1"
                value="of"
                checked={answers.q1.includes('of')}
                onChange={() => handleCheckboxChange('q1', 'of')}
              />
              of
            </label>
            <label>
              <input
                type="checkbox"
                name="q1"
                value="Yaseen"
                checked={answers.q1.includes('Yaseen')}
                onChange={() => handleCheckboxChange('q1', 'Yaseen')}
              />
              Yaseen
            </label>
          </li>
          <li>
            <p>Faheem&apos;s house {showExplanation ? correctAnswer2 ? '✓' : '✘' : ''}</p>
            <label>
              <input
                type="checkbox"
                name="q2"
                value="Faheem's"
                checked={answers.q2.includes("Faheem's")}
                onChange={() => handleCheckboxChange('q2', "Faheem's")}
              />
              Faheem's
            </label>
            <label>
              <input
                type="checkbox"
                name="q2"
                value="house"
                checked={answers.q2.includes('house')}
                onChange={() => handleCheckboxChange('q2', 'house')}
              />
              house
            </label>
          </li>
          <li>
            <p>My pen {showExplanation ? correctAnswer3 ? '✓' : '✘' : ''}</p>
            <label>
              <input
                type="checkbox"
                name="q3"
                value="My"
                checked={answers.q3.includes('My')}
                onChange={() => handleCheckboxChange('q3', 'My')}
              />
              My
            </label>
            <label>
              <input
                type="checkbox"
                name="q3"
                value="pen"
                checked={answers.q3.includes('pen')}
                onChange={() => handleCheckboxChange('q3', 'pen')}
              />
              pen
            </label>
          </li>
        </ol>
        <button type="submit">Submit</button>
      </form>
      {showExplanation && <div className='explanation'>
        <p>
          In the first sentence, the word &#39;Yaseen&#39; came after &#39;of&#39;, so Yaseen would be ﺟﺮ. In the second sentence, another way of rewriting this is: &#34;House of Faheem&#34;. In this case, the word after &#39;of&#39; is &#39;Faheem&#39;, so Faheem will be ﺟﺮ. In the third sentence, we can rewrite this as &#34;Pen of my/mine&#34;. Although it sounds odd in English, it helps us rewrite the sentence to include the word &#39;of&#39;. Thus, in the third sentence, My will be ﺟﺮ.
        </p>
        <p>So Yaseen, Faheem, and My are all ﺟﺮ.</p>
      </div>}
    </div>
  );
};

export default Exercise1;
