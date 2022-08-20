import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    onSearch: () => void
}

export const SearchInput = (props: Props) => {
  return (
    <Paper
      component="form"
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
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={props.onSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
