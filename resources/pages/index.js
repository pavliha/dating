import React, {Component} from 'react'
import Head from 'next/head'
import NavBar from "../components/NavBar";
import AuthStage1Form from "../components/AuthStage1Form";
import Slider from "../components/Slider";
import AuthStage2Form from "../components/AuthStage2Form";
import Form from 'form-to-json'
import axios from 'axios'
import LoginForm from "../components/LoginForm";
import LoginData from "../components/LoginData";

export default class Index extends Component {
    state = {
        slide: false,
        user: null,
        formResult: {}
    }

    render() {
        return <div>
            <Head>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Looking for love</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
                      integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
                      crossOrigin="anonymous"/>
                <link href='../static/css/style.css' rel='stylesheet'/>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>

            </Head>

            <header>
                <NavBar>
                    {this.state.user ?
                        <LoginData user={this.state.user} onLogout={this.handleLogout.bind(this)}/> :
                        <LoginForm onSubmit={this.handleLogin.bind(this)}/>}
                </NavBar>

                <section id='landing-area' className='bg-photo d-flex flex-column justify-content-center py-5'>
                    <div className={this.state.slide ? 'hidden' : 'visible'}>
                        <h2 className='text-center display-4 white'>Create your free profile</h2>
                        <div className='container mb-5'>
                            <AuthStage1Form onSubmit={this.handleFirstSlide.bind(this)}/>

                        </div>
                        <div className='lead white text-center'>
                            ¡Únete a nosotros para conocer gente! Hoy somos más de 900.000 inscritos
                        </div>
                    </div>
                    <div className={this.state.slide ? 'visible' : 'hidden'}>
                        <div className='mx-auto stage-2-form'>
                            <AuthStage2Form values={{}} onSubmit={this.handleSecondSlide.bind(this)}/>
                        </div>
                    </div>
                </section>

                <Slider/>

            </header>
        </div>
    }


    componentDidMount() {
        const user = localStorage.getItem('user')

        try{
            if (user) this.setState({user: JSON.parse(user)})
        }catch (err){
            this.handleLogout()
        }
    }

    handleFirstSlide(e) {
        e.preventDefault()
        this.setState({formResult: Form(e.target.form).toJson()})
        this.setState({slide: true})
    }

    handleSecondSlide(e) {
        e.preventDefault()

        let secondForm = Form(e.target.form).toJson()

        axios.post('/register', {...this.state.formResult, ...secondForm}).then((response) => {
            document.querySelector('#home').innerHTML = response.data.name
        })
    }

    async handleLogin(e) {

        e.preventDefault()

        const loginForm = Form(e.target.form).toJson()

        const response = await axios.post('/login', loginForm)

        localStorage.setItem('user', JSON.stringify(response.data))

        this.setState({user: response.data})

    }

    handleLogout() {
        localStorage.clear()
        this.setState({user: null})
    }
}
