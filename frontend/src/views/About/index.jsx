import React from 'react';
import { Divider} from 'semantic-ui-react'

const About = () => {
  return (
    <div>
      <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', fontFamily: 'Dalek', color: 'white' }}
        >
          Opis Gry
      </Divider>
    <div className = 'about'>
      <div className = 'centr info'>
        Jak sam tytuł wskazuje, w grze wcielisz się w mitycznego herosa, któremu przyszło wykonać dwanaście pozornie niewykonalnych zadań. Uzbrojony w łuk i maczugę, będziesz musiał stawić czoła niesamowitym i zabójczym bestiom:
      </div>
      <div className="centr info">
        <li className="point"><span role='img' aria-label=''>🦁</span> Lwu nemejskiemu,</li>
        <li className="point"><span role='img' aria-label=''>🐉</span> Hydrze lernejskiej,</li>
        <li className="point"><span role='img' aria-label=''>🐦</span> Ptakom stymfalijskim,</li>
        <li className="point"><span role='img' aria-label=''>🐂</span> Bykowi kreteńskiemu,</li>
        <li className="point"><span role='img' aria-label=''>🐎</span> Klaczom Diomedesa,</li>
        <li className="point"><span role='img' aria-label=''>🐶</span> a nawet Cerberowi</li>
      </div>
      <a href='https://i.imgur.com/mMMIAgJ.png' target='blank' className="lefft foto"><img alt='Screen z gry' src={'https://i.imgur.com/mMMIAgJ.png'} /></a>
      <a href='https://i.imgur.com/eRwCw1z.png' target='blank' className="riht foto"><img alt='Screen z gry' src={'https://i.imgur.com/eRwCw1z.png'} /></a>
      <div className="centr info">
      Oprócz tego, będziesz musiał złapać Łanię cerynejską oraz Dzika erymantejskiego, wysprzątać stajnię Augiasza, sprowadzić byki Geriona, odnaleźć jabłka w labiryncie Hesperyd oraz przekonać Amazonki do oddania Ci pasa swej królowej.
      </div>
      <div className="lefft info">
      Na szczęście nie będziesz przy tym sam! Nad Herkulesem czuwa Atena, bogini mądrości, sztuki i sprawiedliwej wojny. Wesprze bohatera dobrą radą, a czasem nawet ześle przedmioty, które okażą się niezwykle przydatne podczas podróży.
      </div>
      <a href='https://i.imgur.com/RAIYRI1.png' target='blank' className="riht foto"><img alt='Screen z gry' src={'https://i.imgur.com/RAIYRI1.png'} /></a>
      <a href='https://i.imgur.com/oJiVcBx.png' target='blank' className="lefft foto"><img alt='Screen z gry' src={'https://i.imgur.com/oJiVcBx.png'} /></a>
      <div className="riht info">
      Zadania są wymagające; czasem trzeba użyć spytu, czasem logicznego myślenia, a w niektórych niezwykle pomocna może okazać się znajomość mitu. Każde z nich możesz wykonywać dowolnej kolejności, a w nagrodę otrzymasz jeden z dwunastu przedmiotów do skompletowania swojego ekwipunku, z którym gra będzie jeszcze ciekawsza!
      </div>
      <a href='https://i.imgur.com/kXumBvi.png' target='blank' className="lefft foto"><img alt='Screen z gry' src={'https://i.imgur.com/kXumBvi.png'} /></a>
      <a href='https://i.imgur.com/JyX81pg.png' target='blank' className="riht foto"><img alt='Screen z gry' src={'https://i.imgur.com/JyX81pg.png'} /></a>
      <div className="lefft info">
      Jest też coś dla osób żądnych wyzwań! 36 osiągnięć tylko czeka, aby je odblokować. Dwanaście z nich tyczy się wykonania każdej pracy. Dwanaście kolejnych, to heroiczne czyny, których możesz dokonać w trakcie zadań. Ostatnia dwunastka jest ukryta i tylko najwytrwalsi dowiedzą się, co w sobie kryje. Czy uda Ci się zdobyć je wszystkie?
      </div>
      <a href='https://i.imgur.com/3oSWwGR.png' target='blank' className="riht foto"><img alt='Screen z gry' src={'https://i.imgur.com/3oSWwGR.png'} /></a>
    </div>
    <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase', fontFamily: 'Dalek', color: 'white' }}
        >
          Zobacz zwiastun
    </Divider>
    <div className='youtube'>
      <iframe className="centr" width="560" height="315" src="https://www.youtube.com/embed/zgYzBYu1ySU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
  );
};

export default About;

//https://imgur.com/a/ulr23a6
