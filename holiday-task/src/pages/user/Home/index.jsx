import Button from '../../../components/button'
import "./home.scss"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <section className='sec1'>
                <div id='container'>
                    <div className='all'>
                        <h1>Shop With Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                        <Button />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home