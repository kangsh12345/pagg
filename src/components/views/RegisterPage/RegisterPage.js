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
                    setTest('이미 등록된 아이디 입니다.')
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
                    회원가입
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
                                label="닉네임"
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
                                label="이메일 주소"
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
                                label="비밀번호"
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
                                label="비밀번호 확인"
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
                                label="이메일을 통한 이벤트 및 프로모션 알림 메일 수신 동의"
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
                            가입하기
                        </Button>
                    </Grid>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                이미 회원이신가요?
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
        nick: Yup.string().required('닉네임을 입력해주세요.'),
        email: Yup.string()
            .email('올바른 이메일 형식이 아닙니다.')
            .required('이메일을 입력해주세요.'),
        password: Yup.string()
            .min(8, '8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')
            .required('비밀번호를 입력해주세요.'),
        confirmPassword: Yup.string()
            .required('비밀번호와 비밀번호 확인이 일치하지 않습니다.')
            .oneOf(
                [Yup.ref('password')],
                '비밀번호와 비밀번호 확인이 일치하지 않습니다.'
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
