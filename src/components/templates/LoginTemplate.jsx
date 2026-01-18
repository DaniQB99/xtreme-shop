import styled from "styled-components";
import { Title, InputText2, Btnsave, Linea, useAuthStore } from "../../index";
import { v, Footer } from "../../index";
import { Device } from "../../styles/breakpoints";
export function LoginTemplate() {

  const { loginGoogle } = useAuthStore();

  return (
    <Container>
      <div className="card">
          <Title $paddingBottom="20px">Ingresar</Title>
          <form>
            <InputText2>
              <input className="form__field" type="text" placeholder="email" />
            </InputText2>
            <InputText2>
              <input
                className="form__field"
                type="password"
                placeholder="password"
              />
            </InputText2>
            <Btnsave
              titulo="INGRESAR"
              bgcolor="#1CB0F6"
              color="225,225,225"
              width="100%"
            />
          </form>
          <Linea />
          <Btnsave
            titulo="Google"
            bgcolor="#fff"
            icono={<v.iconogoogle />}
            funcion={loginGoogle}
          />
        </div>
        <Footer />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: 100px;
    @media ${Device.tablet} {
      width: 400px;
    }
  }
`;
