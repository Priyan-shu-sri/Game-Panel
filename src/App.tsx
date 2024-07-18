import {BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import {lazy, Suspense} from 'react'
import Loader from './components/Loader';

const Dashboard = lazy(()=> import('./pages/Dashboard'));
const Messages = lazy(()=> import('./pages/Messages'));
const Games = lazy(()=> import('./pages/Games'));
const Users = lazy(()=> import('./pages/Users'));
const NewProduct = lazy(()=> import('./pages/management/NewProduct'));
const ProductManagement = lazy(()=> import('./pages/management/ProductManagement'));
const TransactionManagement = lazy(()=> import('./pages/management/TransactionManagement'));
const BarCharts = lazy(() => import('./pages/charts/BarCharts'))
const PieCharts = lazy(() => import('./pages/charts/PieCharts'))
const LineCharts = lazy(() => import('./pages/charts/LineCharts'))
const Stopwatch = lazy(() => import('./pages/apps/Stopwatch'))
const Coupon = lazy(() => import('./pages/apps/Coupon'))
const Toss = lazy(() => import('./pages/apps/Toss'))



const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
      <Route path='/' element={<Link to='/admin/dashboard'><button>Visit Dasboard</button></Link>} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/messages' element={<Messages />} />
        <Route path='/admin/games' element={<Games />} />
        <Route path='/admin/users' element={<Users />} />

        <Route path='/admin/chart/bar' element={<BarCharts />}/>
        <Route path='/admin/chart/pie' element={<PieCharts />}/>
        <Route path='/admin/chart/line' element={<LineCharts />}/>

        <Route path='/admin/app/stopwatch' element={<Stopwatch />}/>
        <Route path='/admin/app/coupon' element={<Coupon />}/>
        <Route path='/admin/app/toss' element={<Toss />}/>

        <Route path='/admin/games/new' element={<NewProduct />}/>
        <Route path='/admin/games/:id' element={<ProductManagement />}/>
        <Route path='/admin/transaction/:id' element={<TransactionManagement />}/>
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App

