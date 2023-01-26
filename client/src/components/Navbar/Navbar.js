import React, {useState, useEffect} from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import memories from "../../images/memories.png";


const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // console.log(user);

    // useEffect(()=>{
    //     setUser(JSON.parse(localStorage.getItem('profile')))
    // }, [])

    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                {/* <Link to="/"> */}
                    <Typography component = { Link } to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                {/* </Link> */}
                <img className={classes.image} src={memories} alt="memories" height="60" />

                <Toolbar className={classes.toolbar}>
                    {
                        user? (
                            <div className={classes.profile}>
                                <Avatar classes={classes.purple} alt={user.name} src={user.picture}>
                                    
                                </Avatar>
                                <Typography className={classes.userName} variant='h6'>
                                    {user.name}
                                </Typography>
                                <Button variant='contained' className={classes.logout} color="secondary"> Logout</Button>
                            </div>
                        ) : (
                           <Button component = { Link } to="/auth" variant='contained' color='primary'>Login</Button>
                        )
                    }
                </Toolbar>
            </div>

        </AppBar>
    )
}

Navbar.propTypes = {}

export default Navbar