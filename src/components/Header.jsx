import React, { useContext } from 'react';
import { LiaGripfire } from "react-icons/lia";
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

const Header = () => {
    const {setRoute, user, setUser} = useContext(AppContext);
    const hazLogout = () => {
      signOut(auth)
      .then(() => {
        setRoute("login");
        setUser(null);
        toast("Logout realizado exitosamente");
      }).catch((e) => console.error(e));
    }
  return (
    <header className='flex h-20 w-full bg-gray-100 shadow-lg items-center justify-between px-8 fixed top-0'>
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute("home")}>
          <LiaGripfire className='text-2xl text-amber-700'/>
          <span className='text-xl font-semibold text-amber-700'>FireShopping</span>
        </div>
        <div className='flex gap-2'>
        { user ? (
          <>
            <button onClick={hazLogout}>Logout</button>
          </>
        ) : (
          <>
        <button className='bg-slate-600 text-white py-1 px-3 rounded-full hover:bg-slate-800 transition' onClick={() => setRoute("login")}>
            Login
        </button>
        <button onClick={() => setRoute("register")}>
           o Registrate
        </button>
        </>
        )}
        </div>
    </header>
  )
}

export default Header
