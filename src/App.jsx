import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayOut from './Components/LayOut/LayOut';
import Medicines from './Components/Medicines/Medicines';
import My_medicine from './Components/Pages/My_medicine';
import Order_history from './Components/Pages/Order_history';
import Saved_address from './Components/Pages/Saved_address'; 
import SettingsPage from './Components/Pages/SettingsPage';
import Notification from './Components/Pages/Notification'; 
import NotFound from './Components/NotFound/NotFound';
import ContactUs from './Components/Pages/ContactUs';
import ProfilePage from './Components/Pages/ProfilePage';
import CounterShoppingListProvider from './Components/Context/CounterShoppingListProvider';
import Prescription_Scanner from './Components/Pages/Prescription_Scanner';


let router = createBrowserRouter([
  {
    path: '', element: <LayOut />, children: [
      { index: true, element: <Medicines /> },
      { path: 'my_medicine', element: <My_medicine /> },
      { path: 'order_history', element: <Order_history /> },
      { path: 'saved_address', element: <Saved_address /> },
      { path: 'prescription_scanner', element: <Prescription_Scanner /> },
      { path: 'settings', element: <SettingsPage /> },
      { path: 'notification', element: <Notification /> }, 
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: '*', element: <NotFound /> },
    ]
  },

]);
function App() {
  const [count, setCount] = useState(0)


 
  return (
    <CounterShoppingListProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </CounterShoppingListProvider>
  )
}

export default App;
