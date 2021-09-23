// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
// import React from 'react';

// const Psycho = ({ filterProducts, genres }) => {
//     return (
//         <div>
//             <FormControl component="fieldset">
//                 <FormLabel component="legend">Жанр</FormLabel>
//                 <RadioGroup aria-label="gender" name="gender1" value={genres} onChange={(e) => filterProducts('genre', e.target.value)}>
//                     {
//                         genres.map(item => (
//                             <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
//                         ))
//                     }
//                 </RadioGroup>
//             </FormControl>
//         </div>
//     );
// };

// export default Psycho;