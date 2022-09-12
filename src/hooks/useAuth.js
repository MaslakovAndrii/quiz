import { useSelector } from 'react-redux';

export function useAuth(){
     const { email, id, token } = useSelector(state => state.user)
     return {
          isAuth: !!email,
          email,
          id,
          token,
          admin: email === 'web.work.mv@gmail.com' ? true : false
     }
}