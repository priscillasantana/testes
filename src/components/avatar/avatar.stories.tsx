import React from 'react';
import { Meta } from '@storybook/react';
import Avatar from './index';
import kira from './kira.jpg';


export default {
    title: 'Avatar',
    component: Avatar
} as Meta;


const Kira = {
    src: kira,
    alt: 'foto da Kira'
};

export const KiraImage = () => <img src={Kira.src} alt={Kira.alt} />;