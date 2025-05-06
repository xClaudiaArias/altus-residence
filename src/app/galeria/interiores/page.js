'use client';


import { Box, MobileStepper, Paper, Typography, Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";

const autoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Interiores',
        imgPath: 'assets/interiores/1.jpg',
    },
    {
        label: 'Interiores',
        imgPath: 'assets/interiores/1.jpg',
    },
    {
        label: 'Interiores',
        imgPath: 'assets/interiores/1.jpg',
    },
]

export default function Page() {
    return (
        <Box>interiors</Box>
    );
}