
import React from 'react';
import { AlertTriangle, MapPin, Check } from 'lucide-react';

const InfoSection = () => {
  // Lista de locais não permitidos para plantio
  const restricoes = [
    'Sob redes elétricas de alta tensão',
    'Em frente a garagens ou entradas de veículos',
    'Em calçadas com menos de 1,2m de largura',
    'Próximo a esquinas (distância mínima de 5m)',
    'Em cima de tubulações de água ou esgoto',
    'Em frente a pontos de ônibus',
  ];

  // Lista de benefícios
  const beneficios = [
    'Redução da temperatura em até 8°C',
    'Melhoria da qualidade do ar',
    'Redução de enchentes e alagamentos',
    'Aumento da biodiversidade urbana',
    'Valorização dos imóveis',
    'Melhoria da saúde física e mental dos moradores'
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-raiz-green-dark mb-12">Saiba Mais Sobre Arborização</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Áreas restritas para plantio */}
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-500 h-6 w-6" />
              <h3 className="text-xl font-semibold text-raiz-gray">Onde NÃO Plantar</h3>
            </div>
            <ul className="space-y-3">
              {restricoes.map((restricao, index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin className="text-red-500 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{restricao}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Benefícios */}
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-4">
              <Check className="text-green-600 h-6 w-6" />
              <h3 className="text-xl font-semibold text-raiz-gray">Benefícios das Árvores</h3>
            </div>
            <ul className="space-y-3">
              {beneficios.map((beneficio, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="text-green-600 h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
