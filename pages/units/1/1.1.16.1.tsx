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
          const { value } = st;
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
      <table style={{ width: '100%', textAlign: 'left' }} className='nx-table-fixed nx-border-collapse'>
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
      {
        showResult
        &&
        <table style={{ width: '100%', textAlign: 'left' }} className='nx-table-fixed'>
          <thead>
            <tr>
              <th style={{ width: '10%' }}>Word</th>
              <th>Status</th>
              <th style={{ width: '30%' }}>Flexibility</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>کِتَابٌ</td>
              <td>{arWords.R} because of ٌ◌</td>
              <td>Fully flexible; we can tell easily because it has a tanween</td>
            </tr>
            <tr>
              <td>عِیْسَی</td>
              <td>{arWords.R}, {arWords.N}, or {arWords.J}</td>
              <td>Non-flexible</td>
            </tr>
            <tr>
              <td>اَرْثُوْرُ</td>
              <td>{arWords.R} because of ُ◌</td>
              <td>Partly flexible; this is a non-Arab name (Arthur)</td>
            </tr>
            <tr>
              <td>اَلرَّحْمنِ</td>
              <td>{arWords.J} because of ِ◌</td>
              <td>Fully flexible: not only does it have an ال but the ◌ِ gives it away that it&apos;s fully flexible</td>
            </tr>
            <tr>
              <td>ھَارُوْنَ</td>
              <td>ﻧﺼﺐ or ﺟﺮ because of the  َ◌</td>
              <td>Partly flexible; this is a non-Arab name</td>
            </tr>
            <tr>
              <td>اِبْرَاھِیْمِ</td>
              <td>Trick question! This doesn&apos;t exist because Ibrahim is a partly flexible (non-Arab) name, and thus can never take a <i>kasra</i></td>
              <td></td>
            </tr>
            <tr>
              <td>مُخْلِصِیْنَ</td>
              <td>ﻧﺼﺐ or ﺟﺮ because of the یْنِ ending combination</td>
              <td>Fully flexible; we can tell easily because it isn&apos;t light</td>
            </tr>
            <tr>
              <td>آدَمُ</td>
              <td>ﺭﻓﻊ because of the  ُ◌</td>
              <td>Partly flexible; this is a non-Arab name</td>
            </tr>
            <tr>
              <td>صَادِقَانِ</td>
              <td>ﺭﻓﻊ because it has the انِ ending combination</td>
              <td>Fully flexible; we can tell because it isn&apos;t light (and it has a ◌ِ at the end too)</td>
            </tr>
            <tr>
              <td>رَبٌّ</td>
              <td>ﺭﻓﻊ because it has  ٌ◌</td>
              <td>Fully flexible; it has a tanween</td>
            </tr>
          </tbody>
        </table>
      }
    </>
  )
}

export default Exercise1;
