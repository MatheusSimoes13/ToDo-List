import React, { Component } from "react"
import { render } from "react-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Grid from "../template/Grid"
import IconButton from "../template/IconButton"

import { changeDescription , search} from "./todoActions"

class TodoForm extends Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.search()
    }

    render() {
        return(
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        value={this.props.description}></input>
                        </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)