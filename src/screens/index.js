import React from 'react'
import { getTranslate, changeLanguage } from '../localization/index'
import {Typography ,Button} from '@material-ui/core'

export default function index() {
    const translate = getTranslate()
    return (
			<>
				<Button onClick={() => changeLanguage('fa')}>Persian</Button>
				<Button onClick={() => changeLanguage('en')}>English</Button>
				<Typography variant="body1">{translate.name}</Typography>
			</>
		);
}
