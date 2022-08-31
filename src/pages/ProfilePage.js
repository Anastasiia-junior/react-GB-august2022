import React from 'react';
import {useDispatch} from 'react-redux';
import {FormControlLabel, Checkbox } from '@mui/material';
import {toggleCheckbox} from './../store/profile-reducer'

export const ProfilePage = () => {
    const dispatch = useDispatch();
    let handleChange = () => {
        dispatch(toggleCheckbox())
    }
    return (
        <div>
             <FormControlLabel control={<Checkbox  onChange={handleChange}/>} label="Homework" />
        </div>
    )
}