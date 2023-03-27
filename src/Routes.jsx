import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import MyNotices from "./pages/MyNotices";
import NewNotice from "./pages/NewNotice";

const App = lazy(() => import('./App'))
const Home = lazy(() => import('./pages/Home'))
const Register = lazy(() => import('./pages/Register'))
const Login = lazy(() => import('./pages/Login'))
const AuthRouter = lazy(() => import('./routes/AuthRouter'))
const ProtectedRoute = lazy(() => import('./routes/ProtectedRoute'))

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<h1>Cargando app...</h1>}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h1>Cargando home...</h1>}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'editprofile',
        element: (
          <Suspense fallback={<h1>cargando editprofile</h1>}>
            <ProtectedRoute
              isAllowed={true}
            >
              <EditProfile />
            </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: 'newnotice',
        element: (
          <Suspense fallback={<h1>cargando editprofile</h1>}>
            <ProtectedRoute
              isAllowed={true}
            >
              <NewNotice />
            </ProtectedRoute>
          </Suspense>
        )
      },
      {
        path: 'mynotices',
        element: (
          <Suspense fallback={<h1>cargando editprofile</h1>}>
            <ProtectedRoute
              isAllowed={true}
            >
              <MyNotices />
            </ProtectedRoute>
          </Suspense>
        )
      }
    ]
  },
  {
    path: 'auth',
    errorElement: <h1>Something wrong!!</h1>,
    element: (
      <Suspense fallback={<h1>Cargando autenticacion</h1>}>
        <AuthRouter />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<h1>Cargando login</h1>}>
            <Login />
          </Suspense>
        )
      },
      {
        path: 'register',
        element: (
          <Suspense fallback={<h1>Cargando register</h1>}>
            <Register />
          </Suspense>
        )
      }
    ]
  }
])

export default function Routes() {
  return <RouterProvider router={router} />
}