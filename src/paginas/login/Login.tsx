import { Button, Grid , TextField, Typography} from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/Userlogin';

import { login } from '../../services/Service';
import { addToken } from '../../store/tokens/actions';
import './Login.css';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: '',
            foto: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/auth/logar`, userLogin, setToken)
                toast.success('Usuário logado com sucesso!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }catch(error){
                toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
        }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='imgb'>
            
          <Grid alignItems='center' xs={6} className='grid'>
            <Box padding={20} >
                <form onSubmit={onSubmit}>
                    <Typography><h1>Olá! <br/>Seja bem vindo<br/>Faça seu login</h1></Typography>
                    <TextField id='usuario' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='Insira o nome do seu usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                    <TextField id='senha' value={userLogin.senha}  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} label='Digite a sua senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                <Box marginTop={2} textAlign= 'center'>
               <Button type='submit' variant='contained' className='botton txt'>
                Login
               </Button>
                </Box>
                </form>
                <Box display='flex' justifyContent='center' marginTop={2} >
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Crie sua conta</Typography>
                    </Box>
                    <Link to='/cadastrousuario'>
                    <Button type='submit' variant='contained' className='botton txt'>
                Cadastre-se!
               </Button>
                    
                </Link>
                </Box>
            </Box>
          </Grid >
          
        </Grid>
    );
}
export default Login;