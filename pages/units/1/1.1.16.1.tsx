'use client';
import Select, { StylesConfig } from 'react-select';
import React, { useRef, useState } from 'react';
import { arWords, enArWords } from '@/utils/constants';

const statusOptions = [
  { value: enArWords.R, label: enArWords.R },
  { value: enArWords.N, label: enArWords.N },
  { value: enArWords.J, label: enArWords.J },
];

const flexibilityOptions = [
  { value: 'ff', label: 'Fully flexible' },
  { value: 'pf', label: 'Partly flexible' },
  { value: 'nf', label: 'Non-flexible' },
];


const Exercise1: React.FC = () => {
  const [answers, setAnswers] = useState([{ status: [], flexibility: '' }, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  const handleStatusInput = (e: any, question: number) => {
    const value = 'target' in e ? e.target : e;
    setAnswers(prevAnswers => {
      prevAnswers[question].status = value;
      return prevAnswers;
    });
  };
  const checkAnswers = (event: any) => {
    event.preventDefault();
    console.log({ answers });
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
            <td>کِتَابٌ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 0)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>عِیْسَی</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 1)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>اَرْثُوْرُ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 2)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>اَلرَّحْمنِ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 3)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>ھَارُوْنَ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 4)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>اِبْرَاھِیْمِ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 5)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>مُخْلِصِیْنَ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 6)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>آدَمُ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 7)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>صَادِقَانِ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 8)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
          <tr>
            <td>رَبٌّ</td>
            <td>
              <Select
                isMulti
                options={statusOptions}
                onChange={(event) => handleStatusInput(event, 9)}
              />
            </td>
            <td><Select options={flexibilityOptions} /></td>
          </tr>
        </tbody>
      </table>
      <button className='nx-text-white nx-font-bold nx-py-2 nx-px-4 nx-rounded nx-border' onClick={checkAnswers}>Check</button>
    </>
  )
}

export default Exercise1;
