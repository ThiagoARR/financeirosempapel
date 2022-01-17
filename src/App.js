import './App.css';
import {Layout} from './Componentes/layout/index';
import {useState} from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const openSidebar = () => {
    if(sidebarOpen === true){
      setSidebarOpen(false);
    }else{
      setSidebarOpen(true);
    }
    console.log(sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    console.log(sidebarOpen);
  };

  return (
    <div className="App">
        <Layout sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} openSidebar={openSidebar}></Layout>
    </div>
  );
}

export default App;
