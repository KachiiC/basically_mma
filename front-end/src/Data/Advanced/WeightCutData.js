import React from 'react'
//Icons
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import WcIcon from '@material-ui/icons/Wc';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const WeightCutData = [
    {
      icon: <SportsKabaddiIcon />,
      description: "Find your optimal fighting weight, the weight you perform best during training"
    },
    {
      icon: <LocalDrinkIcon />,
      description: "You should be entering fight week fully hydrated and at your optimal fight weight."
    },
    {
      icon: <WcIcon />,
      description: "Female fighters physically can’t cut as much as male fighters."
    },
    {
      icon: <FitnessCenterIcon />,
      description: "Muscle stores more water, the better shape you’re in, the more weight you can cut"
    },
    {
      icon: <AccessibilityIcon />,
      description: "If you are cutting less than 10% of your body weight, you consider moving down a weight class."
    },
    {
      icon: <EventBusyIcon />,
      description: "The older you are, the harder it will become to cut weight. if you are struggling to make your required weight then consider moving up."
    },

  ]

  export default WeightCutData