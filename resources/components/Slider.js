import React, {Component} from "react"


export default class Slider extends Component {


    constructor(props) {
        super(props)
        this.state = {left: 0}

    }

    componentDidMount() {
        setInterval(this.goLeft.bind(this), 2000)
    }

    goLeft() {
        this.setState({left: this.state.left - 244})

        this.refs.polosa.style.left = this.state.left + 'px'
        if (this.state.left < -2928) this.setState({left: 0})
    }

    render() {
        return (
            <div>
                <div id="header-slider"/>
                <div id="slider">
                    <div id="polosa" ref='polosa'>
                        <img src="/static/images/slider/users/1.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/2.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/3.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/4.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/5.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/8.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/27.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/26.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/25.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/24.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/23.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/22.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/21.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/20.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/19.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/18.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/17.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/16.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/15.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/14.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/13.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/12.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/11.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/10.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/9.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/7.jpg" height={123} width={92}/>
                        <img src="/static/images/slider/users/6.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-9.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-8.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-7.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-6.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-5.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-4.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-3.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-2.jpg" height={123} width={92}/>
                        <img src="/static/images/photo-1.jpg" height={123} width={92}/>
                        <img src="/static/images/person.jpg" height={123} width={92}/>
                    </div>
                </div>
            </div>
        )
    }
}