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
  return (
    <>
      <h4>Exercise #1</h4>
      <p>For the following words, provide their ({arWords.R}, {arWords.N}, {arWords.J}) and flexibility</p>
      <table style={{ width: '100%', tableLayout: 'fixed', textAlign: 'left' }}>
        <tr>
          <th style={{ width: '10%' }}>Word</th>
          <th>Status</th>
          <th style={{width: '30%'}}>Flexibility</th>
        </tr>
        <tr>
          <td>کِتَابٌ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>عِیْسَی</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>اَرْثُوْرُ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>اَلرَّحْمنِ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>ھَارُوْنَ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>اِبْرَاھِیْمِ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>مُخْلِصِیْنَ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>آدَمُ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>صَادِقَانِ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
        <tr>
          <td>رَبٌّ</td>
          <td>
            <Select
              isMulti
              options={statusOptions}
            />
          </td>
          <td><Select options={flexibilityOptions}/></td>
        </tr>
      </table>
    </>
  )
}

export default Exercise1;
