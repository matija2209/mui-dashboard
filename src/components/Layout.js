import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Drawer,List,Typography,ListItemIcon,ListItem,ListItemText } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useHistory } from 'react-router'
import { useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme)=>{

    return {
    root:{
        display:'flex'
    },
    page:{
        background:'#f9f9f9f9',
        width:'100%'
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width: drawerWidth
    },
    active:{
        background: '#f4f4f4'
    },
    title:{
        padding:theme.spacing(2)
    }
    }
})
    
export default function Layout({children}) {
    const classes = useStyles( )
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text:'My life',
            icon:<SubjectOutlined color="secondary"></SubjectOutlined>,
            path:"/"
        },
        {
            text:'How to do me',
            icon:<AddCircleOutlineOutlined color="secondary"></AddCircleOutlineOutlined>,
            path:"/about"
        },

    ]

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper:classes.drawerPaper}}

            >
                <div className="">
                    <Typography variant="h5" className={classes.title}>
                        Rich Nations
                    </Typography>
                </div>
                <List>  
                        {menuItems.map((li)=>{
                            return <ListItem 
                            key={li.text} 
                            button
                            onClick={()=>history.push(li.path)}
                            className={location.pathname == li.path ? classes.active : null}
                            >
                                <ListItemIcon>{li.icon}</ListItemIcon>
                                <ListItemText primary={li.text}></ListItemText>
                            </ListItem>      
                        })}
                    
                </List>

            </Drawer>
            <div className={classes.page}></div>
                {children}
        </div>
    )
}
