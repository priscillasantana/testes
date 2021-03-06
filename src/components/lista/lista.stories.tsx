import React from 'react';
import Lista from './';
import { Meta } from '@storybook/react';


export default {
    component: Lista,
    title: 'lista'
} as Meta;


export const Listinha = () => (
    <Lista />
);

