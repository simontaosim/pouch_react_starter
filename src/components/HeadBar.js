import React from 'react'
import { Grid, Button, Icon, Header } from 'semantic-ui-react'

class HeadBar extends React.Component{
    toggleVisibility = () => {
        const { toggleVisibility } = this.props;
        toggleVisibility();
    }
    render(){
        const { visible } = this.props
        return (
            <Grid doubling center columns={5}>
            <Grid.Column>
                <Button basic onClick={this.toggleVisibility}>
                <Icon size='large' name={!visible? 'list layout': 'remove'} /> 
                </Button>
            </Grid.Column>
            <Grid.Column>
                <Header as='h2' image='https://react.semantic-ui.com/assets/images/icons/school.png' content='巫力格格' />
            </Grid.Column>
            
            </Grid>
        )
    }
}

export default HeadBar