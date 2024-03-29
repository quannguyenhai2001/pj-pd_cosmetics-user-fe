import React from 'react';
import { ErrorMessage } from 'formik';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import useStyles from './SelectField.styles';
function SelectField({ field, form, label, half, list }) {
    const classes = useStyles();
    const { name, value, onChange } = field
    return (
        <Grid item xs={12} sm={half ? 6 : 12} >
            <FormControl sx={{ minWidth: 80 }} size="small">
                <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
                <Select className={classes.rootSelect}
                    name={name}
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={value}
                    onChange={onChange}
                    autoWidth
                    label={label}
                >
                    {list.map((age) => (
                        <MenuItem key={age} value={age}>
                            {age}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ color: 'red', fontSize: '1.3rem', margin: '1rem 0 0 0' }}>
                <ErrorMessage name={name} />
            </Box>
        </Grid>
    );
}

export default SelectField;