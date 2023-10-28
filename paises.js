const paises = [
    {
      pais: 'br',
      medalhas: [
        {
          tipo: 'ouro',
          ganhadores: [
            {
              nome: 'felipe',
              esporte: 'volei',
            },
          ],
        },
        {
          tipo: 'prata',
          ganhadores: [
            {
              nome: 'mathias',
              esporte: 'atletismo',
            },
          ],
        },
        {
          tipo: 'bronze',
          ganhadores: [
            {
              nome: 'michael',
              esporte: 'futebol',
            },
          ],
        },
      ],
    },
    {
      pais: 'eua',
      medalhas: [
        {
          tipo: 'ouro',
          ganhadores: [
            {
              nome: 'felipe',
              esporte: 'basquete',
            },
          ],
        },
        {
          tipo: 'prata',
          ganhadores: [],
        },
        {
          tipo: 'bronze',
          ganhadores: [],
        },
      ],
    },
    {
      pais: 'nova zelandia',
      medalhas: [
        {
          tipo: 'ouro',
          ganhadores: [],
        },
        {
          tipo: 'prata',
          ganhadores: [],
        },
        {
          tipo: 'bronze',
          ganhadores: [],
        },
      ],
    },
  ];

  const paisesComMedalha = paises.filter(pais => 
    pais.medalhas.some(medalha => medalha.ganhadores.length > 0)
  );
  
  console.log(JSON.stringify(paises, null, 2));

  for (const pais of paises) {
    console.log(`País: ${pais.pais}`);
    console.log("Medalhas:");
  
    for (const medalha of pais.medalhas) {
      console.log(`Tipo: ${medalha.tipo}, Quantidade: ${medalha.ganhadores.length || 0}`);
      console.log("Ganhadores:");
      
      for (const ganhador of medalha.ganhadores) {
        console.log(`Nome: ${ganhador.nome}, Esporte: ${ganhador.esporte}`);
      }
    }
  
    console.log("\n");
  }

