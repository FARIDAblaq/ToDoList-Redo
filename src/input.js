import React, { Component } from 'react'
import './input.css'
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal'
import AddIconBox from '@material-ui/icons/AddBox'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
            edit : false,
            open : false  
        }
    }
    handleChange = (event)=>{
        const inputValue = event.target.value 

        this.setState({ value: inputValue})
    }

    handleKeyPress = (event) =>{
        //if we hit enter while typing inside our input
        if(event.key==='Enter'){
            this.handleSubmit()
        }
    }

    handleSubmit = () =>{
        this.props.onTaskAdd(this.state.value)
        //clean the input
        this.setState({value: '', edit:false,open:false})
    }
    handleOpen = ()=>{
        this.setState({open: true})
    }

    handleClose=()=>{
        this.setState({open: false});
    }

    render(){
        return (
            <div className='Wrapper'>
                <span className='taskadd' >
                <AddIconBox onClick={this.handleOpen}></AddIconBox>
                {this.state.open&&<Modal
                    open={true}
                    onClose={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <input className='inputbox'  placeholder='Add a task' type="text" 
                            value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}></input>
                            <button className='allbuttons' onClick={this.handleSubmit} >Add</button>
                        </Box>
                </Modal>
                }
                </span>
                
            </div>
              
        
        );
    }
}
export default Input
