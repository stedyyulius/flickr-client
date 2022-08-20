import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearch: (input: string) => void
}

export const SearchInput = (props: Props) => {
    const [input, setInput] = useState('')

    const { onSearch } = props;

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSearch = () => {
        onSearch(input);
    }

    return (
        <Paper
        component="form"
        onSubmit={(e: React.SyntheticEvent) => { e.preventDefault(); handleSearch() }}
        sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            width: 400,
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleInput}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
