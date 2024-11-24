import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import "./App.css";
import UseForm from "./Components/UseForm";
import ReviewForm from "./Components/ReviewForm";
import Thanks from "./Components/Thanks";
import { useForm } from "./hook/useForm";
import Steps from "./Components/Steps";
import { useState } from "react";
const formTemplate = {
  name: "",
  email: "",
  review: "",
  Comment: "",
};

function App() {
  const [data, seteData] = useState(formTemplate);
  const updateFieldHandler = (key, value) => {
    seteData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UseForm key="form" data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm
      key="review"
      data={data}
      updateFieldHandler={updateFieldHandler}
    />,
    <Thanks key="thanks" data={data} />,
  ];
  const { currentStep, currentComponent, changeStep, isLapsStep, isFirstStep } =
    useForm(formComponents);
  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <p>
          <Steps currentStep={currentStep} />
        </p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLapsStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
