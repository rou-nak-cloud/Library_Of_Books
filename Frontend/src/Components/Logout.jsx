import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = ()=> {
        try {
            setAuthUser({
                ...authUser,
                userInfo:null,
            })
            localStorage.removeItem("userInfo")
            toast.success("Logout Successful")
          setTimeout(()=> {
            window.location.reload();
          }, 2000)
        } catch (error) {
            toast.error("Logout Failed")
            setTimeout(()=> {
            }, 2000)
        }
    }
  return (
    <div>
      <button className='px-4 py-2 bg-red-700 rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
