import { authLogin, login } from "../../app/session/loginUser";
import "./Form.scss";
import { useNavigate } from "react-router";

export default function Form({ label }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      await login();
      // await authLogin();
      // navigate(`../../../../https://www.themoviedb.org/authenticate/6e0fef7bf90387faa2b19173734b4886a4b7c715
      // `);
    })();
  };
  return (
    <form className="form">
      <div className="form-background"></div>
      <div className="form-content">
        <h1>{label}</h1>
        <div>
          <label htmlFor="email"></label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Ingrese su correo"
          />
        </div>
        <div>
          <label htmlFor="pass"></label>
          <input
            name="pass"
            id="pass"
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <button onClick={handleSubmit}>{label}</button>
      </div>
    </form>
  );
}
