import React, { useState, useEffect } from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { registerUser } from '../../../_actions/user_actions'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import reactDOM from 'react-dom'

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})

function Forms(props) {
    const {
        classes,
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        setTouched,
        handleSubmit,
    } = props

    const [test, setTest] = useState('')
    const [testerror, setTesterror] = useState(false)

    function handleBlur1(e) {
        const data = {
            Email: e.target.value,
        }

        axios
            .post('http://127.0.0.1:5000/register/checkemail', data)
            .then((response) => {
                if (response.data.error == 'exist') {
                    console.log('123123')
                    setTouched(e, false)
                    setTest('?????? ????????? ????????? ?????????.')
                    setTesterror(true)
                } else {
                    setTesterror(false)
                    props.handleBlur(e)
                }
            })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    ????????????
                </Typography>
                <form
                    className={classes.form}
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="nick"
                                label="?????????"
                                value={values.nick}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={touched.nick ? errors.nick : ''}
                                error={touched.nick && Boolean(errors.nick)}
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                error={
                                    (touched.email && Boolean(errors.email)) ||
                                    testerror
                                }
                                helperText={touched.email ? errors.email : test}
                                variant="outlined"
                                onBlur={handleBlur1}
                                fullWidth
                                id="email"
                                label="????????? ??????"
                                type="email"
                                value={values.email}
                                required
                                onChange={handleChange}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="????????????"
                                type="password"
                                id="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    touched.password ? errors.password : ''
                                }
                                error={
                                    touched.password && Boolean(errors.password)
                                }
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="???????????? ??????"
                                type="password"
                                id="confirmPassword"
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                helperText={
                                    touched.confirmPassword
                                        ? errors.confirmPassword
                                        : ''
                                }
                                error={
                                    touched.confirmPassword &&
                                    Boolean(errors.confirmPassword)
                                }
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="allowExtraEmails"
                                        color="primary"
                                    />
                                }
                                label="???????????? ?????? ????????? ??? ???????????? ?????? ?????? ?????? ??????"
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            ????????????
                        </Button>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                ?????? ???????????????????
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}></Box>
        </Container>
    )
}

const Form = withFormik({
    mapPropsToValues: ({ nick, email, password, confirmPassword }) => {
        return {
            nick: nick || '',
            email: email || '',
            password: password || '',
            confirmPassword: confirmPassword || '',
        }
    },

    validationSchema: Yup.object().shape({
        nick: Yup.string().required('???????????? ??????????????????.'),
        email: Yup.string()
            .email('????????? ????????? ????????? ????????????.')
            .required('???????????? ??????????????????.'),
        password: Yup.string()
            .min(8, '8~16??? ?????? ??? ?????????, ??????, ??????????????? ???????????????.')
            .required('??????????????? ??????????????????.'),
        confirmPassword: Yup.string()
            .required('??????????????? ???????????? ????????? ???????????? ????????????.')
            .oneOf(
                [Yup.ref('password')],
                '??????????????? ???????????? ????????? ???????????? ????????????.'
            ),
    }),

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            let dataToSubmit = {
                Email: values.email,
                Password: values.password,
                Nick: values.nick,
            }

            axios
                .post('http://192.168.43.154:5000/register', dataToSubmit)
                .then((response) => {})

            setSubmitting(false)
        }, 500)
    },
})(Forms)

export default withStyles(styles)(Form)
