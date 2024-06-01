'use client';
import Select, { MultiValue, SingleValue, StylesConfig } from 'react-select';
import React, { useRef, useState } from 'react';
import { arWords, enArWords, enWords } from '@/utils/constants';

const statusOptions = [
  { value: enArWords.R, label: enArWords.R },
  { value: enArWords.N, label: enArWords.N },
  { value: enArWords.J, label: enArWords.J },
  { value: 'none', label: 'None' },
];

const flexibilityOptions = [
  { value: 'ff', label: 'Fully flexible' },
  { value: 'pf', label: 'Partly flexible' },
  { value: 'nf', label: 'Non-flexible' },
  { value: 'none', label: 'None' },
];

const correctAnswers = [
  { status: [enArWords.R], flexibility: 'ff' },
  { status: [enArWords.R, enArWords.N, enArWords.J], flexibility: 'nf' },
  { status: [enArWords.R], flexibility: 'pf' },
  { status: [enArWords.J], flexibility: 'ff' },
  { status: [enArWords.N, enArWords.J], flexibility: 'pf' },
  { status: ['none'], flexibility: 'none' },
  { status: [enArWords.N, enArWords.J], flexibility: 'ff' },
  { status: [enArWords.R], flexibility: 'pf' },
  { status: [enArWords.R], flexibility: 'ff' },
  { status: [enArWords.R], flexibility: 'ff' },
]

const Exercise1: React.FC = () => {
  const [answers, setAnswers] = useState([{ status: [], flexibility: '' }, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const [answerStatus, setAnswerStatus] = useState([false, false, false, false, false, false, false, false, false]);
  const [showResult, setShowResult] = useState(false);

  const handleStatusInput = (e: any, question: number) => {
    const value = 'target' in e ? e.target : e;
    setAnswers(prevAnswers => {
      prevAnswers[question].status = value;
      return prevAnswers;
    });
  };

  const handleFlexibilityInput = (e: any, question: number) => {
    const value = 'target' in e ? e.target : e;
    setAnswers(prevAnswers => {
      prevAnswers[question].flexibility = value.value;
      return prevAnswers;
    });
  };

  const checkAnswers = (event: any) => {
    event.preventDefault();
    console.log({ answers });

    setShowResult(true);
    setAnswerStatus(
      answers.map((answer, idx) => {
        const { status = [], flexibility = '' } = answer;
        const { status: correctStatus, flexibility: correctFlexibility } = correctAnswers[idx];
        if (flexibility != correctFlexibility || status.length != correctStatus.length) {
          return false;
        }
        let val = true;
        status.forEach((st, idx) => {
          const {value} = st;
          if (!correctStatus.includes(value)) {
            val = false;
            return;
          }
        });
        return val;
      })
    );
  };
  return (
    <>
      <h4>Exercise #1</h4>
      <p>For the following words, provide their ({arWords.R}, {arWords.N}, {arWords.J}) and flexibility</p>
      <table style={{ width: '100%', tableLayout: 'fixed', textAlign: 'left' }}>
        <thead>
          <tr>
            <th style={{ width: '10%' }}>Word</th>
            <th>Status</th>
            <th style={{ width: '30%' }}>Flexibility</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>کِتَابٌ {showResult ? answerStatus[0] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 0)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 0)}
              />
            </td>
          </tr>
          <tr>
            <td>عِیْسَی {showResult ? answerStatus[1] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 1)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 1)}
              />
            </td>
          </tr>
          <tr>
            <td>اَرْثُوْرُ {showResult ? answerStatus[2] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 2)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 2)}
              />
            </td>
          </tr>
          <tr>
            <td>اَلرَّحْمنِ {showResult ? answerStatus[3] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 3)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 3)}
              />
            </td>
          </tr>
          <tr>
            <td>ھَارُوْنَ {showResult ? answerStatus[4] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 4)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 4)}
              />
            </td>
          </tr>
          <tr>
            <td>اِبْرَاھِیْمِ {showResult ? answerStatus[5] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 5)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 5)}
              />
            </td>
          </tr>
          <tr>
            <td>مُخْلِصِیْنَ {showResult ? answerStatus[6] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 6)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 6)}
              /></td>
          </tr>
          <tr>
            <td>آدَمُ {showResult ? answerStatus[7] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 7)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 7)}
              />
            </td>
          </tr>
          <tr>
            <td>صَادِقَانِ {showResult ? answerStatus[8] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 8)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 8)}
              />
            </td>
          </tr>
          <tr>
            <td>رَبٌّ {showResult ? answerStatus[9] ? '✓' : '✘' : ''}</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={e => handleStatusInput(e, 9)}
              />
            </td>
            <td>
              <Select
                options={flexibilityOptions}
                onChange={e => handleFlexibilityInput(e, 9)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className='nx-text-white nx-font-bold nx-py-2 nx-px-4 nx-rounded nx-border' onClick={checkAnswers}>Check</button>
    </>
  )
}

export default Exercise1;
