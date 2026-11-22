import './App.css';
import User from "./GetUser/User";
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import AddUser from "./add/AddUser";
import UpdateUser from './Updateuser/UpdateUser';



function App() {
  const route = createBrowserRouter([
    {path: "/",element: <User/> },

    {path: "/add", element:<AddUser/> },

    {path: "/update/:id", element:<UpdateUser/> },
  ])

  return (
    <div className='App'>
      <RouterProvider router={route}></RouterProvider>
      
    </div>
      
  );
}

export default App;
