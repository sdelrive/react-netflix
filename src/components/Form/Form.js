import "./Form.scss";

export default function Form({ label }) {
  const handleSubmit = (e) => {
    e.preventDefault();
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
