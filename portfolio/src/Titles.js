import React, { Component } from 'react';


const TITLES=[
    'I am a software Engineer',
    'I am enthusiastic Learner ',
    'I love Music',
    'I love Coding'
]

class Titles extends Component{
    state={titleIndex:0}

    componentDidMount(){
        this.animateTitle();
    }

    animateTitle=()=>{
        setInterval( () =>{
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({titleIndex});
        },4000);
    }

    render(){
        const title=TITLES[this.state.titleIndex]
        return(
            <p>{title}</p>
        )
    }
}
export default Titles;