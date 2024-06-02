'use client';
import Select, { StylesConfig } from 'react-select';
import React, { useRef, useState } from 'react';
import { enArWords } from '@/utils/constants';

const options = [
  { value: 'مُسَاعِیْدِیْنَ', label: 'مُسَاعِیْدِیْنَ' },
  { value: 'مُسَاعِیْدُوْنَ', label: 'مُسَاعِیْدُوْنَ' },
  { value: 'مُسَاعِدَاتٍ', label: 'مُسَاعِدَاتٍ' },
  { value: 'مُسْلِمِیْنَ', label: 'مُسْلِمِیْنَ' },
  { value: 'مُسْلِمَاتٍ', label: 'مُسْلِمَاتٍ' },
  { value: 'نَاصِحَةً', label: 'نَاصِحَةً' },
  { value: 'مُوَظَّفَاتٌ', label: 'مُوَظَّفَاتٌ' },
  { value: 'مُوَظَّفَاتٍ', label: 'مُوَظَّفَاتٍ' },
  { value: 'مُوَظَّفُوْنَ', label: 'مُوَظَّفُوْنَ' },
  { value: 'طَالِبَاتٌ', label: 'طَالِبَاتٌ' },
  { value: 'طَالِبَتَیْنِ', label: 'طَالِبَتَیْنِ' },
  { value: 'زَائِرَتَانِ', label: 'زَائِرَتَانِ' }
]

const customStyles: StylesConfig<any> = {
  container: (provided) => ({
    ...provided,
    display: 'inline-block',
    padding: '0 10px',
  }),
  control: (provided) => ({
    ...provided,
    minHeight: 'initial',
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: '0 8px',
  }),
  input: (provided) => ({
    ...provided,
    margin: '0',
    padding: '0',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: '0',
  }),
};

const correctAnswers = ['مُسْلِمِیْنَ', 'مُسْلِمَاتٍ', 'مُسَاعِیْدِیْنَ', 'مُسْلِمِیْنَ', 'مُسَاعِدَاتٍ', 'مُسْلِمَاتٍ', 'مُسَاعِیْدُوْنَ', 'نَاصِحَةً', 'مُوَظَّفَاتٍ', 'مُوَظَّفُوْنَ', 'مُوَظَّفَاتٌ', 'زَائِرَتَانِ', 'طَالِبَاتٌ', 'طَالِبَتَیْنِ'];

const Exercise1: React.FC = () => {
  const [answers, setAnswers] = useState(new Array(13).fill(''));
  const [answerStatus, setAnswerStatus] = useState(new Array(13).fill(false));
  const [showAnswers, setShowAnswers] = useState(false);

  const handleChange = (e: any, idx: number) => {
    if (!('value' in e) || !('value' in e.value)) {
      return;
    }

    const { value } = e.value;

    setAnswers(prevAnswers => {
      prevAnswers[idx] = value;
      return prevAnswers;
    })
  }

  const checkAnswers = (event: any) => {
    setShowAnswers(true);
    setAnswerStatus(answers.map((ans, idx) => ans === correctAnswers[idx]));
  };

  return (
    <>
      <p style={{ padding: '10px' }}>
        Every year a group of <u style={{ whiteSpace: 'nowrap' }}>Muslim men</u><Select options={options} styles={customStyles} onChange={e => handleChange(e, 0)} /> and a group of <u style={{ whiteSpace: 'nowrap' }}>Muslim women</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 1)} /> study at Bayyinah Dream. Bayyinah hires <u style={{ whiteSpace: 'nowrap' }}>assistants (masculine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 2)} /> to help the <u style={{ whiteSpace: 'nowrap' }}>Muslim men</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 3)} /> study and hires <u style={{ whiteSpace: 'nowrap' }}>assistants (feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 4)} /> to help the <u style={{ whiteSpace: 'nowrap' }}>Muslim women</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 5)} /> study. The <u>assistants</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 6)} /> prepare exams and homework assignments. This year, Bayyinah also hired an <u style={{ whiteSpace: 'nowrap' }}>advisor (feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 7)} /> because the number of <u style={{ whiteSpace: 'nowrap' }}>employees (feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 7 + 1)} /> has increased. The <u style={{ whiteSpace: 'nowrap' }}>employees (masculine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 8 + 1)} /> and <u style={{ whiteSpace: 'nowrap' }}>employees (feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 9 + 1)} /> like working at Bayyinah because it is an Islamic environment. On Sunday, two <u style={{ whiteSpace: 'nowrap' }}>visitors (feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 10 + 1)} /> came to the Bayyinah campus. The <u style={{ whiteSpace: 'nowrap' }}>students (feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 11 + 1)} /> bought them food and encouraged them to become <u style={{ whiteSpace: 'nowrap' }}>students (pair, feminine)</u> <Select options={options} styles={customStyles} onChange={e => handleChange(e, 12 + 1)} /> of the Dream Program.
      </p>
      <button className='nx-text-white nx-font-bold nx-py-2 nx-px-4 nx-rounded nx-border' onClick={checkAnswers}>Check</button>
      {
        showAnswers
        &&
        <p style={{ padding: '10px' }}>
          Every year a group of <u style={{ whiteSpace: 'nowrap' }}>Muslim men</u> {correctAnswers[0]} and a group of <u style={{ whiteSpace: 'nowrap' }}>Muslim women</u> {correctAnswers[1]} study at Bayyinah Dream. Bayyinah hires <u style={{ whiteSpace: 'nowrap' }}>assistants (masculine)</u> {correctAnswers[2]} to help the <u style={{ whiteSpace: 'nowrap' }}>Muslim men</u> {correctAnswers[3]} study and hires <u style={{ whiteSpace: 'nowrap' }}>assistants (feminine)</u> {correctAnswers[4]} to help the <u style={{ whiteSpace: 'nowrap' }}>Muslim women</u> {correctAnswers[5]} study. The <u>assistants</u> {correctAnswers[6]} prepare exams and homework assignments. This year, Bayyinah also hired an <u style={{ whiteSpace: 'nowrap' }}>advisor (feminine)</u> {correctAnswers[6 + 1]} because the number of <u style={{ whiteSpace: 'nowrap' }}>employees (feminine)</u> {correctAnswers[7 + 1]} has increased. The <u style={{ whiteSpace: 'nowrap' }}>employees (masculine)</u> {correctAnswers[8 + 1]} and <u style={{ whiteSpace: 'nowrap' }}>employees (feminine)</u> {correctAnswers[9 + 1]} like working at Bayyinah because it is an Islamic environment. On Sunday, two <u style={{ whiteSpace: 'nowrap' }}>visitors (feminine)</u> {correctAnswers[10 + 1]} came to the Bayyinah campus. The <u style={{ whiteSpace: 'nowrap' }}>students (feminine)</u> {correctAnswers[11 + 1]} bought them food and encouraged them to become <u style={{ whiteSpace: 'nowrap' }}>students (pair, feminine)</u> {correctAnswers[12 + 1]} of the Dream Program.
        </p>
      }
    </>
  )
}

export default Exercise1;
