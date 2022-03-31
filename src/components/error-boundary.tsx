import React from 'react';


export default class ErrorBoundary extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
        props.init && props.init();
    }

    static getDerivedStateFromError(error: any) {
        console.log('derived state from error...', error);
        return { hasError: true };
    }

    componentDidCatch(error: any, info: any ) {
        console.log('error..', error);
        console.log('info...', info);
        // this.setState({
        //     hasError: true
        // })
        console.log('this.state...', this.state);
    }
    render() {
        if(this.state.hasError) {
            return <h1>Opps, I am errory boundary</h1>
        }

        return this.props.children;
    }
}