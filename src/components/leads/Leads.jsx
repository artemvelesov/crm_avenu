import { useContext, useState } from 'react';
import { LeadsContext } from '../../App';
import { useParams, useHistory } from 'react-router-dom';
import { Card, Input, Button, Select, MenuItem } from '@material-ui/core';
import s from './leads.module.css'


export function Lead() {
    const { leads, editLead } = useContext(LeadsContext),
        [edit, setEdit] = useState(false),
        { id } = useParams(),
        [lead, setLead] = useState(leads.find(item => item.id === Number(id)) || {}),
        [openSelect, setOpenSelect] = useState(false);

    const handleSave = () => {
        const result = leads.filter(lead => lead.id !== Number(id));

        editLead([ ...result, lead ]);

        setEdit(false);
    };

    return <div>
        <br />

        <Button onClick={() => setEdit(!edit)}>
            {edit ? 'Отменить' : 'Редактировать'}
        </Button>

        {edit && <Button onClick={handleSave}>Сохранить</Button>}

        <br />

        {edit && <div>
            <div>
                Заявка
                <Input
                    name='title'
                    value={lead.title}
                    onChange={e => setLead({ ...lead, title: e.target.value })}
                />
            </div>
            <div>
                Телефон
                <Input
                    name='phone'
                    value={lead.phone}
                    onChange={e => setLead({ ...lead, phone: e.target.value })}
                />
            </div>
            <div>
                Статус:
                <Select
                    // id="demo-controlled-open-select"
                    open={openSelect}
                    onClose={() => setOpenSelect(false)}
                    onOpen={() => setOpenSelect(true)}
                    value={lead.status}
                    onChange={status => setLead({ ...lead, status })}
                >
                    <MenuItem value='todo'>To do</MenuItem>
                    <MenuItem value='in_progress'>In progress</MenuItem>
                    <MenuItem value='done'>Done</MenuItem>
                </Select>
            </div>
        </div>}

        {!edit && <div>
            <div>Заявка {lead.title}</div>
            <div>Телефон: {lead.phone}</div>
            <div>Статус: {lead.status}</div>
        </div>}
    </div>
}

function Leads() {
    const { leads } = useContext(LeadsContext);

    const history = useHistory();

    const handleClick = id => {
        history.push(`/leads/${id}`);
    }

    return <div className={s.col}>
        {leads.map( ({ id, title, status, phone }) => <div
            key={id}
            className={s.item}
            onClick={() => handleClick(id)}
        >
            <Card>
                <div className={s.wrapper}>
                    <div>id: {id} - {title} ({status})</div>
                    <div>{phone}</div>
                </div>
            </Card>

        </div>
        )}
    </div>;
};

export default Leads;
