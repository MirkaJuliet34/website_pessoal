import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educação</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Análise e Desenvolvimento de Sistemas
            </h5>
            <p className="font-semibold">Universidade Cruzeiro do Sul (Concluído)</p>
            <p className="my-3">
            Realizando trabalhos com Front End Developer que estão disponíveis em meu
            GitHub.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experiência</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Front End Developer</h5>
            <p className="font-semibold">MagniFinance (Lisboa - Portugal)</p>
            <p className="my-3">Sistema de Gestão de Faculdade em Angular</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Linguagens & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;