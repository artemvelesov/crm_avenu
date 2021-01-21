import { Link } from 'react-router-dom';

const Navigation = () => <>
    <div>
        <Link to='/'>Главная</Link>
    </div>
    <div>
        <Link to='/leads'>Заявки</Link>
    </div>
</ >;

export default Navigation;
