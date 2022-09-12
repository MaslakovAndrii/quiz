import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { TextField, Box, Button, Typography } from '@mui/material';
import MainContainer from '../MainContainer/MainContainer';
import { QUIZ_ROUTE, REGISTRATION_ROUTE } from '../../utils/const';



const Authorization = () => {
     const dispatch = useDispatch();


     const navigate = useNavigate()
     const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
          mode: 'onChange',
          defaultValues: {
               email: "",
               password: "",

          }
     })


     const onSubmit = data => {
          const  auth = getAuth();

          const { email, password } = data

          signInWithEmailAndPassword(auth, email, password)
               .then(({ user }) => {
                    dispatch(setUser({
                         email: user.email,
                         id: user.uid,
                         token: user.accessToken,
                    }))
                    navigate(QUIZ_ROUTE, { replace: true });
               })
               .catch(console.error)

          reset();
     }
     const onError = errors => {
          console.log(errors);
     }


     return (
          <>
               <MainContainer>
                    <Box
                         component='form'
                         noValidate
                         onSubmit={handleSubmit(onSubmit, onError)}
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              rowGap: '20px',
                              minWidth: '50%'
                         }}

                    >
                         <Box
                              component='div'
                              sx={{
                                   width: '100%'
                              }}
                         >
                              <Controller
                                   control={control}
                                   name="email"
                                   render={({ field }) => (
                                        <TextField
                                             type='email'
                                             label="Введите адрес почты"
                                             variant="outlined"
                                             fullWidth
                                             required
                                             {...register('email', {
                                                  required: 'Обязательное поле',
                                             }
                                             )}
                                             onChange={field.onChange}
                                             value={field.value}
                                             error={!!errors.email}
                                        />
                                   )}
                              />
                              {errors?.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
                         </Box>
                         <Box
                              component='div'
                              sx={{
                                   width: '100%'
                              }}
                         >
                              <Controller
                                   control={control}
                                   name="password"
                                   render={({ field }) => (
                                        <TextField
                                             type='password'
                                             label="Введите пароль"
                                             variant="outlined"
                                             fullWidth
                                             required
                                             {...register('password', {
                                                  required: 'Обязательное поле',
                                             }
                                             )}
                                             onChange={field.onChange}
                                             value={field.value}
                                             error={!!errors.password}
                                        />
                                   )}
                              />
                              {errors?.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
                         </Box>

                         <Button
                              type='submit'
                              variant="contained"
                         >
                              Войти
                         </Button>

                         <Typography
                              sx={{
                                   textAlign: 'center'
                              }}
                         >Если у Вас еще нет аккаунта, то <Link to={REGISTRATION_ROUTE}>создайте</Link> создайте его</Typography>
                    </Box>
               </MainContainer>
          </>
     );
};

export default Authorization;