import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Menu from './components/menu';
import Cursos from './pages/cursos/Cursos';
import CursosForm from './pages/cursos/CursosForm';
import Disciplinas from './pages/disciplinas/Disciplinas';
import DisciplinaLista from './pages/disciplinas/DisciplinaLista';
import Professores from './pages/professores/Professores';
import ProfessorLista from './pages/professores/ProfessorLista';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
          <Route path="/" element={<Cursos />} />
            <Route path="/cursos/create" element={<Cursos />} />
            <Route path="/cursos/form" element={<CursosForm />} />
            <Route path="/disciplinas" element={<DisciplinaLista />} />
            <Route path="/disciplinas/create" element={<Disciplinas />} />
            <Route path="/professores" element={<ProfessorLista />} />
            <Route path="/professores/create" element={<Professores />} />
            </Routes>
        </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
