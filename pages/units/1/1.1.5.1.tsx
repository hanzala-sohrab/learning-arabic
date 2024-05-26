'use client';
import Select, { ActionMeta, MultiValue } from 'react-select';
import React, { useRef, useState } from 'react';
import {enArWords} from '@/utils/constants';

interface OptionType {
  value: string;
  label: string;
}


const options = [
  { value: enArWords.I, label: enArWords.I },
  { value: enArWords.F, label: enArWords.F },
  { value: enArWords.H, label: enArWords.H },
  { value: enArWords.R, label: enArWords.R },
  { value: enArWords.N, label: enArWords.N },
  { value: enArWords.J, label: enArWords.J },
];

const answers = [
  [[enArWords.I, enArWords.R], [enArWords.H], [enArWords.I, enArWords.J], [enArWords.F], [enArWords.I, enArWords.N]],
  [[enArWords.I, enArWords.R], [enArWords.F], [enArWords.I, enArWords.N]],
  [[enArWords.I, enArWords.R], [enArWords.F], [enArWords.I, enArWords.J], [enArWords.I, enArWords.N], [enArWords.I, enArWords.N], [enArWords.H], [enArWords.I, enArWords.N]],
]

const Exercise1: React.FC = () => {
  const [questionsSelectedOptions, setQuestionsSelectedOptions] = useState([[[{ value: '', label: '' }]], [[]], [[]]]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState([false, false, false]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    // TODO: Check answers
    setIsAnswerCorrect(questionsSelectedOptions.map((question, i) => {
      for (let j = 0; j < question.length; ++j) {
        let subQuestion = question[j];
        if (subQuestion.length != answers[i][j].length) {
          return false;
        }

        for (let k = 0; k < subQuestion.length; ++k) {
          const option: string = subQuestion[k].value;

          if (!answers[i][j].includes(option)) {
            return false;
          }
        }
      }
      return true;
    }))
  }

  const handleChange = (e: any, question: string) => {
    const value = 'target' in e ? e.target : e;
    // TODO: Handle changes here

    const parts = /^(\d+)\.(\d+)/.exec(question);
    if (!parts) {
      return;
    }

    const [questionNumber, subQuestionNumber] = parts.slice(1).map((p) => parseInt(p, 10));

    setQuestionsSelectedOptions(prev => {
      prev[questionNumber][subQuestionNumber] = value;
      return prev;
    });
  }

  return (
    <>
      <h3>Exercise #1</h3>
      <p>
        Now that we understand Ending Sounds, let&apos;s do some additional general practice. Keep in mind the definition of a ﻓﻌﻞ: an action stuck in time and ﺣﺮﻑ: the thing that doesn&apos;t make sense unless another word comes after it. For each of the following, provide whether the word is an اﺳﻢ (Ism), ﻓﻌﻞ (Fi&apos;l), or حرف (Harf). If it&apos;s an اﺳﻢ, provide the status (Rafa&apos; رفع, Nasb نصب, Jarr جر).
      </p>
      <form onSubmit={handleSubmit}>
        <ol>
          <li>
            The apartment of Burhan smelled good. {submitted ? isAnswerCorrect[0] ? '✓' : '✘' : ''}
            <ol type="a">
              <li>
                The apartment:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '0.0')}
                />
              </li>
              <li>
                of:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '0.1')}
                />
              </li>
              <li>
                Burhan:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '0.2')}
                />
              </li>
              <li>
                smelled:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '0.3')}
                />
              </li>
              <li>
                good:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '0.4')}
                />
              </li>
            </ol>
          </li>

          <li>
            The cat wore sunglasses. {submitted ? isAnswerCorrect[1] ? '✓' : '✘' : ''}
            <ol type="a">
              <li>
                The cat:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '1.0')}
                />
              </li>
              <li>
                wore:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '1.1')}
                />
              </li>
              <li>
                sunglasses:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '1.2')}
                />
              </li>
            </ol>
          </li>

          <li>
            Danish eats Rashid&apos;s sandwich daily at work. {submitted ? isAnswerCorrect[2] ? '✓' : '✘' : ''}
            <ol type="a">
              <li>
                Danish:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.0')}
                />
              </li>
              <li>
                eats:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.1')}
                />
              </li>
              <li>
                Rashid&apos;s:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.2')}
                />
              </li>
              <li>
                sandwich:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.3')}
                />
              </li>
              <li>
                daily:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.4')}
                />
              </li>
              <li>
                at:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.5')}
                />
              </li>
              <li>
                work:
                <Select
                  isMulti
                  options={options}
                  onChange={(event) => handleChange(event, '2.6')}
                />
              </li>
            </ol>
          </li>
        </ol>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Exercise1;
