'use client';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import {
    Box,
    MobileStepper,
    Paper,
    Typography,
    Button,
    IconButton
} from '@mui/material';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext01.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext02.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext03.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext04.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext05.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext06.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext07.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext08.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext09.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/ext10.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/extn01.png',
    },
    {
        label: 'Exteriores',
        imgPath: '/assets/exteriores/extn02.png',
    },
]

export default function Page() {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps);
    const handleBack = () => setActiveStep((prev) => (prev - 1) + maxSteps) % maxSteps; 
    const handleStepChange = (step) => setActiveStep(step);

    return (
        <Box
          sx={{
            position: 'relative',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            zIndex: 0, // sits behind navbar if navbar is zIndex > 0
          }}
        >
          {/* Swipeable Image Views */}
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ height: '100%', width: '100%' }}
          >
            {images.map((step, index) => (
              <Box
                key={step.label}
                component="img"
                src={step.imgPath}
                alt={step.label}
                sx={{
                  height: '100vh',
                  width: '100vw',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            ))}
          </AutoPlaySwipeableViews>
    
          {/* Overlayed Controls */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              zIndex: 10,
              pointerEvents: 'none', // allow image swipe
            }}
          >
            <IconButton
              onClick={handleBack}
              sx={{
                color: 'white',
                mixBlendMode: 'exclusion',
                pointerEvents: 'auto',
                backgroundColor: 'rgba(0,0,0,0.3)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
              }}
            >
              <KeyboardArrowLeft fontSize="large" />
            </IconButton>
    
            <IconButton
              onClick={handleNext}
              sx={{
                color: 'white',
                mixBlendMode: 'exclusion',
                pointerEvents: 'auto',
                backgroundColor: 'rgba(0,0,0,0.3)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
              }}
            >
              <KeyboardArrowRight fontSize="large" />
            </IconButton>
          </Box>
    
          <Box
  sx={{
    position: 'absolute',
    bottom: 60,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 1.5,
    zIndex: 10,
    mixBlendMode: 'exclusion',
  }}
>
  {images.map((_, index) => (
    <Button
      key={index}
      onClick={() => setActiveStep(index)}
      sx={{
        minWidth: 0,
        p: 0.5,
        borderRadius: '50%',
        backgroundColor: index === activeStep ? 'white' : 'rgba(255,255,255,0.3)',
        '&:hover': {
          backgroundColor: 'white',
        },
        transition: 'all 0.3s ease',
      }}
    />
  ))}
</Box>

        </Box>
      );
    }