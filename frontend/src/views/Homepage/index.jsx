import React from 'react';
import { Container, Header, Divider} from 'semantic-ui-react'
import News from '../../components/Homepage/news';

const Home = () => {
  return (
    <div>
      <Container text>
        <Header
        as='h1'
        content='12 Prac Herkulesa'
        inverted
        style={{
          fontSize: '4.5em',
          fontWeight: 'bold',
          marginBottom: 0,
          marginTop: '3em',
          fontFamily: 'Dalek',
        }}
        />
        <Header
        as='h2'
        content='Strona poświęcona grze autorstwa Patryka Grzyba'
        inverted
        style={{
          fontSize: '1.2em',
          fontWeight: 'normal',
          marginTop: '1.5em',
          marginBottom: '5em',
          fontFamily: 'Verdana',
        }}
        />
      </Container>

      <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', fontFamily: 'Dalek', color: 'white' }}
        >
          Aktualnosci
      </Divider>
      <div className="newsPage">
        <div className='news'>
        <News
            header="Nowy trailer, data premiery i inne" 
            date="12 marca 2020" 
            text='Już za dwa dni oficjalna premiera "12 Prac Herkulesa". Po miesiącu testów i poprawek, w końcu udało nam się zakończyć wszystkie prace nad grą. Obserwuj nasz fanpage na Facebooku, aby poznać więcej szczegółów i obejrzeć nowy trailer, tym razem w języku angielskim.'
        />
        <News
            header="Beta-Testy rozpoczęte" 
            date="1 lutego 2020" 
            text='Dziś rozpoczęły się oficjalne beta-testy "12 Prac Herkulesa". Przez najbliższy miesiąc, razem z 16 testerami będziemy szukać błędów, usprawniać mechanikę oraz doszlifowywać każdy poziom, aby już w marcu wydać w pełni funkcjonalną grę. Jeśli dopiero teraz odkryłeś naszą stronę, wciąż jeszcze nie jest za późno, by dołączyć do grona testerów. Szczegóły jak to zrobić, przeczytasz w poprzednim wpisie.'
        />
        <News
            header="Testerzy poszukiwani!" 
            date="25 stycznia 2020" 
            text="Już pierwszego lutego startuje zamknięta beta gry! Jeśli chcesz zostać testerem i jako pierwszy wcielić się w mitycznego Herkulesa, wystarczy, że napiszesz do mnie wiadomość. Możesz to zrobić na stronie przez zakładkę 'Kontakt', albo w prywatnej wiadomości na Facebookowym fanpage'u. Jako tester, zostaniesz dodany do prywatnej grupy, na której będziesz mógł dowiedzieć się o kulisach powstawania gry, będziesz mógł zasugerować, co warto dodać lub zmienić w rozgrywce, a także pojawisz się w zakładce 'testerzy' w napisach w ostatecznej wersji gry. Nie czekaj, zapisz się już dziś!"
        />
        <News
            header="Strona ruszyła!" 
            date="25 stycznia 2020" 
            text='Witaj na stronie! Jeśli chcesz dowiedzieć się czegoś więcej o "12 Pracach Herkulesa", wejdź w zakładkę "O grze". Jeśli chcesz się ze mną skontaktować, możesz to zrobić poprzez mój fanpage na Facebooku widoczny po prawej, lub poprzez wejście w zakładkę "Kontakt".'
        />
        </div>
        <div className="facebok">
          <div className="fb-page" data-href="https://www.facebook.com/12-Prac-Herkulesa-113511530195213/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/12-Prac-Herkulesa-113511530195213/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/12-Prac-Herkulesa-113511530195213/">12 Prac Herkulesa</a>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;