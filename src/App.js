import WebRouter from "./route";
import { BrowserRouter as Router } from 'react-router-dom';
import { SidebarProvider } from "./context/SidebarContext/GlobalProvider";

function App() {
  return (
    <div className=" dark:bg-dark-background">
      <SidebarProvider>
        <Router>
          <WebRouter />
        </Router>
      </SidebarProvider>
    </div>


  );
}

export default App;
