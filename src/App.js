import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Menu from './components/menu';
import Cursos from './pages/cursos/Cursos';
import CursosForm from './pages/cursos/CursosLista';
import Disciplinas from './pages/disciplinas/Disciplinas';
import DisciplinaLista from './pages/disciplinas/DisciplinaLista';
import Professores from './pages/professores/Professores';
import ProfessorLista from './pages/professores/ProfessorLista';
import AlunoLista from './pages/alunos/AlunoLista';
import Alunos from './pages/alunos/Alunos';
import CursoLista from './pages/cursos/CursosLista';
import SalaLista from './pages/salas/SalaLista';
import Salas from './pages/salas/Salas';
import SemestreLista from './pages/semestres/SemestreLista';
import Semestres from './pages/semestres/Semestres';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
          <Route path="/" element={<Cursos />} />
          <Route path="/cursos" element={<CursoLista />} />
            <Route path="/cursos/create" element={<Cursos />} />
            <Route path="/cursos/:id" element={<Cursos/>} />
            <Route path="/disciplinas" element={<DisciplinaLista />} />
            <Route path="/disciplinas/create" element={<Disciplinas />} />
            <Route path="/disciplinas/:id" element={<Disciplinas />} />
            <Route path="/professores" element={<ProfessorLista />} />
            <Route path="/professores/create" element={<Professores />} />
            <Route path="/professores/:id" element={<Professores />} />
            <Route path="/alunos" element={<AlunoLista />} />
            <Route path="/alunos/create" element={<Alunos />} />
            <Route path="/alunos/:id" element={<Alunos />} />
            <Route path="/salas" element={<SalaLista />} />
            <Route path="/salas/create" element={<Salas />} />
            <Route path="/salas/:id" element={<Salas />} />
            <Route path="/semestres" element={<SemestreLista />} />
            <Route path="/semestres/create" element={<Semestres />} />
            <Route path="/semestres/:id" element={<Semestres />} />
            </Routes>
        </Container>
        </BrowserRouter>
    </div>
  );
}

export default App;
