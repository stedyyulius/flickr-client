import Pagination from '@mui/material/Pagination';

interface Props {
    dataDisplayed: React.ReactElement | null,
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void,
    count: number,
    page?: number
}

export const DataList = (props: Props) => {

    const { dataDisplayed, onChange, count, page } = props;

    return (
        <div>
            {dataDisplayed}
            <Pagination count={count} onChange={onChange} page={page || 0} />
        </div>
    )
}