import '/src/App.css'
import Header from '../components/Header'
import DisplayArticles from '../components/DisplayArticles'
import BackgroundImg from './BackgroundImg'


export default function HomePg(){

    DisplayArticles()

    return(
        <div className='Test'>
            <BackgroundImg />
            <Header />
            <MenuItems />
            <AppRoutes />
            <Footer />
      </div> 
    )
}
