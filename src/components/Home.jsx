import { useContext } from 'react';
import { LeadsContext } from '../App';
import { Button } from '@material-ui/core';

function Home() {
    const { leads, addLead } = useContext(LeadsContext);

    const lead = {
        id: leads.length,
        title: 'Cтепан Махно',
        status: 'todo',
        phone: '79998887722'
    };

    return <div>
        <Button variant="contained" color="primary" onClick={() => addLead([...leads, lead])}>
            Добавить
        </Button>
    </div>;
};

export default Home;
