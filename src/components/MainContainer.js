/* eslint-disable max-len */

import React from 'react';
import { Container, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import "./MainContainer.css";
import HeadBar from './HeadBar';
import { Link } from "react-router-dom";

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        }
    }
    toggleVisibility = () => {
        console.log(this.state.visible);
        
        this.setState({ visible: !this.state.visible })
    }
    render(){
        const { visible } = this.state;
        return (
            <div>

                <HeadBar visible={visible} toggleVisibility={this.toggleVisibility}/>
                <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='push'
                    width='thin'
                    visible={visible}
                    icon='labeled'
                    vertical
                    inverted
                    className="main-container-sider-bar"
                >
                    <Link to='/'>
                        <Menu.Item name='home'>
                                <Icon name='home' />
                                    首页
                        </Menu.Item>
                    </Link>
                    <Link to='/search'>
                        <Menu.Item name='home'>
                        <Icon name='search' />
                        搜索
                        </Menu.Item>
                    </Link>
                    <Menu.Item name='gamepad'>
                    <Icon name='disk' />
                    分类
                    </Menu.Item>
                    <Menu.Item name='camera'>
                    <Icon name='tag' />
                    标签
                    </Menu.Item>
                    <Menu.Item name='camera'>
                    <Icon name='star' />
                    明星
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                
                <Container textAlign='justified'>
                    {this.props.children}
                   
                </Container>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
                
            </div>
          )
    }
}


export default MainContainer