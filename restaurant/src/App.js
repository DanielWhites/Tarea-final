import './App.css';
import Index from './pages/Home/Index';
import AppRouters from './routes/AppRoutes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
    <ToastContainer />
    <AppRouters/>
    </>
  );
}

export default App;
