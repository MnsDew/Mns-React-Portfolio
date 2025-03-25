import React , {Component} from "react";
import '../Amthal.css';
class Amthal extends Component{
constructor (){
    super();
    this.state = { mathal: {} , TenQuotes: [] } // we use {} for object and [] for array 
}

    componentDidMount(){

        fetch("https://mns-react-portfolio.onrender.com/quotes/random")
        .then((response) => response.json())
        .then((json) => this.setState({mathal: json}));

    }

    fetchAmthal = () => {
  
        fetch("https://mns-react-portfolio.onrender.com/quotes/ten")
        .then((response) => response.json())
        .then((json) => this.setState({TenQuotes: json}));
         
    }

    render() {
        return (
            <div className="amthal-container">
                <h2>Today's Quote</h2>
                <div className="quote-card">{this.state.mathal.title}</div>
                <hr />
                <h3 className="amthal-title">Find Your Next Favorite Quote</h3>
                <button className="amthal-button" onClick={this.fetchAmthal}>More...Quotes</button>

                {this.state.TenQuotes.map((mathal) => {
                    return <div key={mathal.id} className="quote-card">{mathal.title}</div>;
                })}
            </div>
        );
    }
}

     
//     render(){
//         return(
//             <div style={{margin:50}}>
//             <h2>Today's Quote</h2>
//             <p>{this.state.mathal.title}</p>
//             <hr></hr>
//             <h3 style={{margin:30}}>Looking for more quotes?</h3>
//             <button style={{margin:50}} className="btn" onClick={this.fetchAmthal}>More...Quotes </button>

           
//             { 
//                 this.state.TenQuotes.map(mathal => {
//                     return <p key={mathal.id}>{mathal.title}</p>
//                 })
//             }
//             </div>
//         )
//     }

// }

export default Amthal;