import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media'

const app = document.getElementById('app')
render(<Media title="Titans" year="2018" image="./images/series/titans.jpg"  />, app)