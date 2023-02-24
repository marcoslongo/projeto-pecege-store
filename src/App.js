import './App.scss';
import RoutesApp from './routes';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='app'>
        <ToastContainer autoclose={3000}/>
        <RoutesApp/>
    </div>
  );
};

export default App;