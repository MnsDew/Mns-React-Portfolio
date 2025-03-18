import React , {Component} from "react";

class Amthal extends Component{
constructor (){
    super();
    this.state = { mathal: {} , TenQuotes: [] } // we use {} for object and [] for array 
}

    componentDidMount(){

        fetch("http://localhost:3004/quotes/random")
        .then((response) => response.json())
        .then((json) => this.setState({mathal: json}));

    }

    fetchAmthal = () => {
  
        fetch("http://localhost:3004/quotes/ten")
        .then((response) => response.json())
        .then((json) => this.setState({TenQuotes: json}));
         
    }
     
    render(){
        return(
            <div style={{margin:50}}>
            <h2>Today's Quote</h2>
            <p>{this.state.mathal.title}</p>
            <hr></hr>
            <h3 style={{margin:30}}>Looking for more quotes?</h3>
            <button style={{margin:50}} className="btn" onClick={this.fetchAmthal}>More...Quotes </button>
           
            { 
                this.state.TenQuotes.map(mathal => {
                    return <p>{mathal.title}</p>
                })
            }
            </div>
        )
    }

}

export default Amthal;