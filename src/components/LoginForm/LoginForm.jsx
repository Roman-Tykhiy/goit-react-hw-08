import s from './LoginForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import YupPassword from 'yup-password';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
// import { register } from '../../redux/auth/operations';
// YupPassword(Yup);

const initialValues = {
  email: '',
  password: '',
};

const registrationFormSchema = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (credentials, options) => {
    // console.log(credentials);
    dispatch(logIn(credentials));
    options.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.item}>
          <span className={s.label}>Введіть електронну пошту</span>
          <Field
            className={s.field}
            type="text"
            name="email"
            autoComplete="current-email"
    
          />
          <ErrorMessage
            className={s.error}
            name="email"
            component="span"
          />
        </label>
        <label className={s.item}>
          <span className={s.label}>Введіть пароль</span>
          <Field
            className={s.field}
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <ErrorMessage
            className={s.error}
            name="password"
            component="span"
          />
        </label>
        <button className={s.submit} type="submit">
          Увійти
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;