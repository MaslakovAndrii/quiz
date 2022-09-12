import { React } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, FormControl, InputLabel, Box, Typography, Button, Select, MenuItem } from '@mui/material';
import MainContainer from '../MainContainer/MainContainer';


const AddQuestion = ({ create }) => {
     const { register, handleSubmit, formState: { errors }, watch, reset, control } = useForm({
          mode: 'onChange',
          defaultValues: {
               textQuestion: "",
               answerCorrect: "",
               inputMethod: "",
               answerOptions: "",
          }
     })

     const onSubmit = data => {
          create(data)
          reset()
     }
     const onError = errors => {
          console.log(errors);
     }
     return (
          <>
               <MainContainer>
                    <Typography
                         component='h3'
                         variant='h3'
                    >
                         Зоздать вопрос
                    </Typography>
                    <Box
                         component='form'
                         noValidate
                         onSubmit={handleSubmit(onSubmit, onError)}
                         sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              rowGap: '20px',
                              minWidth: '50%'
                         }}>
                         <Box
                              component='div'
                         >
                              <Controller
                                   control={control}
                                   name="textQuestion"
                                   render={({ field }) => (
                                        <TextField
                                             type='text'
                                             label="Введите текст вопроса"
                                             variant="outlined"
                                             fullWidth
                                             required
                                             {...register('textQuestion', {
                                                  required: 'Обязательное поле',
                                             }
                                             )}
                                             onChange={field.onChange}
                                             value={field.value}
                                             error={!!errors.textQuestion}
                                        />
                                   )}
                              />
                              {errors?.textQuestion && <div style={{ color: 'red' }}>{errors.textQuestion.message}</div>}
                         </Box>
                         <Box
                              component='div'
                         >
                              <Controller
                                   control={control}
                                   name="answerCorrect"
                                   render={({ field }) => (
                                        <TextField
                                             type='text'
                                             label='Введите правильный ответ (если их несколько разделяйте ";")'
                                             variant="outlined"
                                             fullWidth
                                             required
                                             {...register('answerCorrect', {
                                                  required: 'Обязательное поле',
                                             }
                                             )}
                                             onChange={field.onChange}
                                             value={field.value}
                                             error={!!errors.answerCorrect}
                                        />
                                   )}
                              />
                              {errors?.answerCorrect && <div style={{ color: 'red' }}>{errors.answerCorrect.message}</div>}
                         </Box>
                         <Box
                              component='div'
                         >
                              <FormControl
                                   required
                                   fullWidth>
                                   <InputLabel id="inputMethod">Способ ответа</InputLabel>
                                   <Controller
                                        control={control}
                                        name="inputMethod"
                                        render={
                                             ({ field }) => <Select
                                                  {...field}
                                                  {...register('inputMethod',
                                                       {
                                                            required: 'Обязательное поле'
                                                       }
                                                  )}
                                                  label="Способ ответа"
                                                  error={!!errors.inputMethod}
                                             >
                                                  <MenuItem value={'input'}>Ввести ответ вручную</MenuItem>
                                                  <MenuItem value={'radio'}>Выбрать вариант из возможных</MenuItem>
                                                  <MenuItem value={'checkbox'}>Вы несколько вариантов из возможных</MenuItem>
                                                  <MenuItem value={'select'}>Выбрать из списка</MenuItem>
                                             </Select>
                                        }
                                   />
                              </FormControl>
                              {errors?.inputMethod && <div style={{ color: 'red' }}>{errors.inputMethod.message}</div>}
                         </Box>

                         {watch('inputMethod') === 'radio' || watch('inputMethod') === 'checkbox' || watch('inputMethod') === 'select'
                              ?
                              <Box
                                   component='div'
                              >
                                   <Controller
                                        control={control}
                                        name="answerOptions"
                                        render={({ field }) => (

                                             <TextField
                                                  type='text'
                                                  label='Введите неправильные варианты ответов (если их несколько разделяйте ";")'
                                                  variant="outlined"
                                                  fullWidth
                                                  required
                                                  {...register('answerOptions', {
                                                       required: 'Обязательное поле',
                                                  }
                                                  )}
                                                  error={!!errors.answerOptions}
                                             />
                                        )}
                                   />
                                   {errors?.answerOptions && <div style={{ color: 'red' }}>{errors.answerOptions.message}</div>}
                              </Box>
                              : null
                         }
                         <Box
                              component="div"
                              sx={{
                                   display: 'flex',
                                   justifyContent: "space-between",
                                   margin: "0 -15px",
                                   // padding: "0 15px"
                              }}
                         >
                              <Box
                                   component="div"
                                   sx={{
                                        flex: "1 1 50%",
                                        padding: '0 15px'
                                   }}
                              >
                                   <Button
                                        onClick={() => reset()}
                                        variant="contained"
                                        color='error'
                                        fullWidth
                                   >
                                        Сбросить форму
                                   </Button>
                              </Box>
                              <Box
                                   component="div"
                                   sx={{
                                        flex: "1 1 50%",
                                        padding: '0 15px'
                                   }}
                              >
                                   <Button
                                        type='submit'
                                        variant="contained"
                                        fullWidth
                                   >
                                        Создать
                                   </Button>
                              </Box>
                         </Box>
                    </Box>

               </MainContainer>
          </>
     );
};

export default AddQuestion;