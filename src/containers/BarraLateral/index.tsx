import FiltroCard from '../../components/FiltroCard';
import * as S from './style';

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.FIltros>
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard />
        <FiltroCard ativo />
      </S.FIltros>
    </div>
  </S.Aside>
);

export default BarraLateral;
