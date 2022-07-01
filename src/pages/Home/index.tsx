import { useEffect, useState } from 'react';
import { Card } from "../../components";
import { student, user } from '../../types';
import './styles.css';

export function Home() {

  const [inputValue, setInputValue] = useState<string>("");
  const [students, setStudents] = useState<student[]>([]);
  const [user, setUser] = useState<user>({} as user);

  useEffect(() => {
    fetch('https://api.github.com/users/NRayan')
      .then(response => response.json())
      .then(data => {
        setUser({ name: data.name, avatar: data.avatar_url })
      });
  }, []);

  function handleAddStudentClick() {
    const newStudent: student =
    {
      name: inputValue,
      time: new Date().toLocaleString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }),
      id: students.length + 1
    }

    setStudents(prevState => [...prevState, newStudent]);
  }

  return (
    <div className="container">
      <header>
        <h1>nome2:{inputValue}</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input type={"text"} placeholder="Digite o nome..." onChange={e => setInputValue(e.target.value)} />
      <button type="button" onClick={handleAddStudentClick}>Adicionar</button>

      {
        students.map(student => (
          <Card key={student.id} name={student.name} time={student.time} />
        ))
      }

    </div>
  )
}
