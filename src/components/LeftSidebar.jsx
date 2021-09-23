import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom"
import { clientContext } from '../contexts/ClientContext'
import { Button } from '@material-ui/core';
const LeftSidebar = () => {
    const [price, setPrice] = React.useState('');
    const [genre, setGenre] = React.useState('')
    const history = useHistory()
    const { getProducts, genres, getGenre } = React.useContext(clientContext)

    const filterProducts = (key, value) => {
        let search = new URLSearchParams(history.location.search)
        search.set(key, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        setPrice(search.get("price_lte"))
        setGenre(search.get("genre"))
        getProducts()
    }

    let search = new URLSearchParams(history.location.search)
    React.useEffect(() => {
        setPrice(search.get("price_lte"))
        setGenre(search.get("genre"))
        getGenre()
    }, [])

    const resetFilter = () => {
        setPrice('')
        setGenre('')
        history.push('/')
        getProducts()
    }

    return (
        <div className='left-sidebar'>
            <FormControl component="fieldset" bgColor="white">
                <FormLabel component="legend">Цена</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={price} onChange={(e) => filterProducts('price_lte', e.target.value)}>
                    <FormControlLabel value="300" control={<Radio />} label="300" />
                    <FormControlLabel value="500" control={<Radio />} label="500" />
                    <FormControlLabel value="700" control={<Radio />} label="1000" />
                    {/* <FormControlLabel value="1000" control={<Radio />} label="1000" /> */}
                    {/* <FormControlLabel value="2000" control={<Radio />} label="2000" /> */}
                </RadioGroup>
            </FormControl>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Жанр</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={genre} onChange={(e) => filterProducts('genre', e.target.value)}>
                        {
                            genres.map(item => (
                                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <Button onClick={resetFilter}>Вернуться назад</Button>
        </div>
    );
};

export default LeftSidebar;