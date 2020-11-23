import React from 'react';


class Carre extends React.Component {

      state ={
            titre: 'Votre choix'
      }
  addBleu =(e) =>{
        this.setState =
 
      console.log(e.target);
      e.target.classList.toggle('carre1')
   
  }

  addRouge =(e) =>{
 
      console.log(e.target);
      e.target.classList.toggle('carre2')
   
  }


  render(){
    return (
     <div class="carre1">
     <button onClick = {this.addCarre}>{this.props.title}ON/OFF </button>
     <button onClick = {this.addBleu}>{this.props.title}Bleu </button>
     <button onClick = {this.addRouge}>{this.props.title}Rouge </button>

     </div>
    
     
    );
  }
 
}
export default Carre;


 