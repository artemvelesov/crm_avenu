import { useContext, useState } from 'react';
import { LeadsContext } from '../App';
import { Button, Input } from '@material-ui/core';

function Home() {
    const { leads, addLead } = useContext(LeadsContext),
        [fields, setFields] = useState({}),
        handleAddLead = () => {
            const lead = {
                ...fields,
                id: leads.length,
                status: 'todo'
            };
            addLead([...leads, lead]);
        }

    return <div>
        <h2>Home Page</h2>

        <div>
            <Input
                name='title'
                value={fields.title}
                placeholder='Имя'
                onChange={e => setFields({ ...fields, title: e.target.value })}
            />

            <Input
                name='phone'
                value={fields.phone}
                placeholder='Телефон'
                onChange={e => setFields({ ...fields, phone: e.target.value })}
            />

            <Button variant='contained' onClick={handleAddLead}>Добавить</Button>
        </div>
    </div>;
};

export default Home;
