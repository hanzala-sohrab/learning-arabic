'use client';
import Select, { StylesConfig } from 'react-select';
import React, { useRef, useState } from 'react';
import { enArWords } from '@/utils/constants';

const options = [
  { value: 'مُسَاعِیْدِیْنَ', label: 'مُسَاعِیْدِیْنَ' },
  { value: 'مُسَاعِدَاتٍ', label: 'مُسَاعِدَاتٍ' },
  { value: 'مُسْلِمِیْنَ', label: 'مُسْلِمِیْنَ' },
  { value: 'مُسْلِمَاتٍ', label: 'مُسْلِمَاتٍ' },
  { value: 'نَاصِحَةً', label: 'نَاصِحَةً' },
  { value: 'مُوَظَّفَاتٌ', label: 'مُوَظَّفَاتٌ' },
  { value: 'مُوَظَّفُوْنَ', label: 'مُوَظَّفُوْنَ' },
  { value: 'طَالِبَاتٌ', label: 'طَالِبَاتٌ' },
  { value: 'طَالِبَتَیْنِ', label: 'طَالِبَتَیْنِ' },
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

// TODO: Check answers

const Exercise1: React.FC = () => {
  return (
    <p style={{ padding: '10px' }}>
      Every year a group of <u style={{ whiteSpace: 'nowrap' }}>Muslim men</u><Select options={options} styles={customStyles} /> and a group of <u style={{ whiteSpace: 'nowrap' }}>Muslim women</u> <Select options={options} styles={customStyles} /> study at Bayyinah Dream. Bayyinah hires <u style={{ whiteSpace: 'nowrap' }}>assistants (masculine)</u> <Select options={options} styles={customStyles} /> to help the <u style={{ whiteSpace: 'nowrap' }}>Muslim men</u> <Select options={options} styles={customStyles} /> study and hires <u style={{ whiteSpace: 'nowrap' }}>assistants (feminine)</u> <Select options={options} styles={customStyles} /> to help the <u style={{ whiteSpace: 'nowrap' }}>Muslim women</u> <Select options={options} styles={customStyles} /> study. The assistants prepare exams and homework assignments. This year, Bayyinah also hired an <u style={{ whiteSpace: 'nowrap' }}>advisor (feminine)</u> <Select options={options} styles={customStyles} /> because the number of <u style={{ whiteSpace: 'nowrap' }}>employees (feminine)</u> <Select options={options} styles={customStyles} /> has increased. The <u style={{ whiteSpace: 'nowrap' }}>employees (masculine)</u> <Select options={options} styles={customStyles} /> and <u style={{ whiteSpace: 'nowrap' }}>employees (feminine)</u> <Select options={options} styles={customStyles} /> like working at Bayyinah because it is an Islamic environment. On Sunday, two <u style={{ whiteSpace: 'nowrap' }}>visitors (feminine)</u> <Select options={options} styles={customStyles} /> came to the Bayyinah campus. The <u style={{ whiteSpace: 'nowrap' }}>students (feminine)</u> <Select options={options} styles={customStyles} /> bought them food and encouraged them to become <u style={{ whiteSpace: 'nowrap' }}>students (pair, feminine)</u> <Select options={options} styles={customStyles} /> of the Dream Program.
    </p>
  )
}

export default Exercise1;
