import './styles.css';

type Props =
    {
        name: string,
        time: string
    }

export function Card({name,time}:Props) {

    return (
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
}