import React from 'react';
//Css
import './Techniques.css'
import MainAndSidebar from '../../../Components/MainAndSidebar';
//Components
import TechniquesIntroduction from './PageComponents/TechniquesIntroduction.js';
import TechniquesList from './PageComponents/TechniquesList'


const Techniques = () => (

        <MainAndSidebar videos="3">
            <TechniquesIntroduction />
            <TechniquesList />
        </MainAndSidebar>
        
)

export default Techniques