import Authorization from "../components/Authorization/Authorization";
import Quiz from "../components/Quiz/Quiz";
import QuizStart from "../components/QuizStart/QuizStart";
import Registration from "../components/Registration/Registration";
import AddQuestion from "../components/AddQuestion/AddQuestion";
import { AUTHORIZATION_ROUTE, START_ROUTE, REGISTRATION_ROUTE, QUIZ_ROUTE, ADD_QUESTION_ROUTE } from "./const";

export const publicRoutes = [
     {
          path: START_ROUTE,
          element: <QuizStart/>
     },
     {
          path: AUTHORIZATION_ROUTE,
          element: <Authorization/>
     },
     {
          path: REGISTRATION_ROUTE,
          element: <Registration/>
     },
]

export const authRoutes = [
     {
          path: START_ROUTE,
          element: <QuizStart/>
     },
     {
          path: QUIZ_ROUTE,
          element: <Quiz/>
     },
]

export const adminRoutes = [
     {
          path: START_ROUTE,
          element: <QuizStart/>
     },
     {
          path: QUIZ_ROUTE,
          element: <Quiz/>
     },
     {
          path: AUTHORIZATION_ROUTE,
          element: <Authorization/>
     },
     {
          path: REGISTRATION_ROUTE,
          element: <Registration/>
     },
     {
          path: ADD_QUESTION_ROUTE,
          element: <AddQuestion />
     },

]

