import * as $ from 'jquery';
import Post from '@models/Post'
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import WebpackLogo from '@/assets/webpack-logo.png'
import React from 'react'
import {render} from 'react-dom'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

const post = new Post ('Webpack Post Tilte', WebpackLogo)

// $('pre').addClass('code2').html(post.toString())
// console.log('Post to String:', post.toString());

const App = () => (
    <div class="container">
        <h1>Webpack Course</h1>

        <hr />

        
        <div class="logo" />

        <hr />

        <pre />

        <hr />

        <div class="box">
            <h2>Less</h2>
        </div>
        <div class="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))

// console.log('JSON:',json);
// console.log('XMl:',xml);
// console.log('CSV:', csv);