/* eslint-disable react/prop-types */
const UseForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite seu nome aqui."
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail aqui."
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseForm;
