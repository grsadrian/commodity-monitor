# Commodity Monitor 📊
O Commodity Monitor é um software desenvolvido para extrair, processar e armazenar dados de cotações de commodities diretamente do portal [CEPEA/ESALQ](https://www.cepea.org.br/br).
O projeto faz requisições automáticas, processa o conteúdo HTML da página, converte em estruturas de dados tratadas e salva tudo em arquivos JSON para uso posterior.

## ⚙️ Tecnologias utilizadas 
- **Node.js**
- **TypeScript**
- **[Puppeteer](https://pptr.dev/) (interação com browser)**
- **[cf-clearence scrapper](https://github.com/Xewdy444/CF-Clearance-Scraper) (script Python para bypass em verificações da Cloudflare)**

## 🚀 Como utilizá-lo ?
1. Faça um clone do repositório:
   - ```git clone git@github.com:grsadrian/commodity-monitor.git```
2. Instale as dependências:
   - ```npm install```
3. Compile o projeto:
   - ```npm run build```
4. Rode o programa:
   - ```npm run start```

## 💡 Futuras ideias
O Commodity Monitor ainda está em evolução, e existem diversas possibilidades de expansão para torná-lo ainda mais útil e completo. Algumas ideias planejadas incluem:

- Expor os dados por meio de um WebService (REST)
Permitir que outros sistemas consumam as informações extraídas de forma simples e padronizada.
- Criar um painel web com gráficos e histórico
Oferecer visualizações intuitivas dos preços e variações ao longo do tempo.
- Adicionar suporte para mais commodities e fontes de dados
Atualmente o monitor é focado no CEPEA, mas pode ser facilmente ampliado para outros fornecedores.
- Persistência em banco de dados (SQLite, PostgreSQL, MongoDB, etc.)
Para possibilitar análises mais avançadas, histórico completo e consultas personalizadas.
- Integração com APIs de notificação (Telegram, Discord, Email)
Enviar alertas automáticos quando preços ultrapassarem determinados valores.

## 🤝 Contribuindo

Contribuições são muito bem-vindas!
Se você tiver ideias, melhorias ou correções:

1. Faça um fork do repositório
2. Crie uma branch descritiva:
- ```git checkout -b feat/minha-melhoria```
3. Implemente sua mudança
4. Abra um Pull Request explicando o que foi feito

Sugestões, issues e críticas construtivas também são sempre bem-vindas !
