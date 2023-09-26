import React from 'react';
import '../allComponents/CounterCSS.css';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            customInput: 1,
            history: [],
            isInputHovered: false,
        };
    }

 

    // Function to decrease the count
    decreaseCount = () => {
        const { count, customInput, history } = this.state;
        const newCount = count - customInput;
        const newHistory = [...history, newCount];

        this.setState({
            count: newCount,
            customInput: 1,
            history: newHistory.slice(-5), // Keep the last 5 counts
        });
    };

       // Function to increase the count
       increaseCount = () => {
        const { count, customInput, history } = this.state;
        const newCount = count + customInput;
        const newHistory = [...history, newCount];

        this.setState({
            count: newCount,
            customInput: 1,
            history: newHistory.slice(-5), // Keep the last 5 counts
        });
    };


    handleCustomIncrementChange = (e) => {
        this.setState({
            customInput: parseInt(e.target.value) || 0, // Ensure it's a number
        });
    };

 

    // Function to reset the count
    resetCount = () => {
        this.setState({
            count: 0,
            history: [],
        });
    };
   // Function to handle input hover
   handleInputHover = () => {
    this.setState({ isInputHovered: true });
};

// Function to handle input hover exit
handleInputHoverExit = () => {
    this.setState({ isInputHovered: false });
};


    render() {
        const { count, customInput, isInputHovered, history } = this.state;

        return (
            <div className="App">
                <h1>COUNTER APP</h1>
                <div className="counter-app ">
                    <div className='count-container'>
                        <h2 className=' count'>COUNTS: {count}</h2>
                        <button className='buttons' onClick={this.increaseCount}>INCREASE</button>
                        <button className='buttons' onClick={this.decreaseCount}>DECREASE</button>
                        <button className='reset-button' onClick={this.resetCount}>RESET</button>
            
                        <div>
                            <input
                                type="number"
                                value={customInput}
                                className={`input-container ${isInputHovered ? 'input-hover' : ''}`}
                                onMouseEnter={this.handleInputHover}
                                onMouseLeave={this.handleInputHoverExit}
                                onChange={this.handleCustomIncrementChange}
                            />
                        </div>
                    </div>
                    <div className="history">
                        <h3> HISTORY OF COUNT</h3>
                        {history.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </div>
                </div>
            </div >
        );
    }
}

export default Counter