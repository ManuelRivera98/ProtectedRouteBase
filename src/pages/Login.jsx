import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFn } from '../redux/action';

const Login = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    user: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginFn(values))
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <label htmlFor="user">
          Usuario
          <input
            name="user"
            value={values.user}
            onChange={(e) => setValues({ ...values, user: e.target.value })}
            type="text" />
        </label>
        <label htmlFor="password">
          Contraseña
          <input
            name="password"
            value={values.password}
            onChange={(e) => setValues({ ...values, user: e.target.value })}
            type="password" />
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default Login;