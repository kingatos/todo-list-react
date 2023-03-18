import styled from "styled-components";
import Header from "../../common/Header";
import Section from "../../common/Section";

export const StyledContainer = styled.main`
  max-width: 900px;
  padding: 20px;
  margin: 0 auto;
`;

const AuthorPage = () => (
  <StyledContainer>
    <Header title="O autorze" />
    <Section
      title="Kinga Tos"
      body={
        <>
          <p>
            Na początek, kilka słów o mnie. Mam na imię <strong>Kinga Tos</strong>, mieszkam w Rzeszowie. Z wykształcenia
            jestem magistrem bezpieczeństwa-wewnętrznego o specjalizacji
            kryminalistyka i kryminologia oraz służby ochrony bezpieczeństwa
            publicznego. 🎓
            <br />
            Mimo wykształcenia mam smykałkę do innych rzeczy... Uwielbiam
            podróże małe i duże. Kocham jeść, aby spalić niezliczone kalorie
            dużo jeżdzę na rowerze, gram w badmintona oraz chodzę na siłownię.🤸‍♀️
          </p>
          <p>
            Jestem fanką motoryzacji, lubię szybką jazdę.
            <br />
            Od dłuższego czasu interesuje się programowaniem stron www oraz
            tworzeniem aplikacji.👨‍💻 <br />
            Chciałabym rozwijać się w tym kierunku.❤️
            <br />
            Uważam, że <strong>branża IT</strong> jest przyszłościowa z
            świetnymi zarobkami. 💸
          </p>
        </>
      }
    />
  </StyledContainer>
);

export default AuthorPage;
