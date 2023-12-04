import React from 'react'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Booking from "./pages/Booking/Booking";
import Search from "./pages/Search/Search";
import './App.css';
import { SeatList } from './components/SeatList';
function App() {
    
    const [cinemaData, setCinemaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/cinema.json');
                if (!response.ok) {
                    throw new error('there was not ok');
                }
                const data = await response.json();

                console.log("data", data);

               setCinemaData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }

        };
        fetchData();
    }, []
    );
    if (loading) {
        return <div>loading...</div>
    }
    if (error) {
        return <div>error: {error.message}</div>
    }
    const router = createBrowserRouter([
        {
          path: "/Welcome",
          element: <Welcome />,
        },
        {
          path: "/Booking",
          element: <Booking />,
        },
        {
          path: "/Search",
          element: <Search cinemaData={cinemaData} />,
          },
{
path: "/SeatList",
element: <SeatList />,
}


      ]); 
    
    return (
   <main>
    <h1 className='cinema'>{cinemaData.cinema.name}</h1>

<RouterProvider router={router} />   
<Search cinemaData={cinemaData} />
</main>

                          
    )
}

export default App;
