<!doctype html>
<html lang="pt-BR">
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
      }
      h1,
      h2 {
        color: #333;
      }
      pre {
        background-color: #f5f5f5;
        padding: 10px;
        border-radius: 5px;
        overflow-x: auto;
      }
      code {
        font-family: Consolas, monospace;
        font-size: 14px;
      }
      .note {
        background-color: #ffeeba;
        border: 1px solid #ffc107;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
      }
      .challenge {
        background-color: #e2f0ff;
        border: 1px solid #b8daff;
        padding: 10px;
        border-radius: 5px;
        margin-top: 20px;
      }
    </style>
  </head>
  <body>
    <h1>Documentação da API</h1>

    <h2>Endpoint</h2>
    <pre><code>POST https://caixaeletronico.onrender.com/caixa</code></pre>

    <h2>Tipos de Resposta</h2>
    <p>A API retorna os seguintes tipos de resposta:</p>
    <ul>
      <li>
        <strong>200 OK:</strong> Quando o saque é calculado com sucesso,
        retornando o número de cédulas de cada valor.
      </li>
      <li>
        <strong>400 Bad Request:</strong> Em caso de erro na requisição, como
        formato inválido de entrada.
      </li>
    </ul>

    <h2>Formato JSON Retornado</h2>
    <p>
      O JSON retornado para uma requisição bem-sucedida terá o seguinte formato:
    </p>
    <pre class="note"><code>
    {
      "2": 3,
      "5": 1,
      "10": 0,
      "20": 0,
      "50": 1,
      "100": 1
    }
    </code></pre>

      <h2>Erros de Requisição</h2>

      <h3>Erro 500: Internal Server Error</h3>
      <pre class="note"><code>
    { 
      "message": "Internal server error"
    }
    </code></pre>

      <h3>Erro 400: Formato Inválido de Entrada</h3>
      <pre class="note"><code>
    {
        "issues": {
            "_errors": [],
            "valor": {
                "_errors": [
                    "Erro: não identificamos nenhum valor a ser sacado, por favor, informe e tente novamente."
                ]
            }
        }
    }
    </code></pre>
    

      <h3>Erro 400: Erro de Valor de Saque</h3>
      <p>
        Quando um valor de saque não é permitido pela API, você receberá um erro
        específico:
      </p>
      <pre class="note"><code>
    {
        "error": {
            "name": "ErroValorSaque",
            "message": "Erro: Saque não permitido para o valor informado."
        }
    }
    </code></pre>

      <h2>Descrição</h2>
      <p>
        Esta API calcula a quantidade de cédulas necessárias para um saque, com
        base no valor fornecido.
      </p>

      

      <h2>Exemplo de Uso no Insomnia</h2>

      <p>
        Para facilitar o uso da API, você pode importar o seguinte snippet JSON no
        Insomnia para testar o endpoint diretamente:
      </p>

      <pre class="note"><code>
    {
      "_type": "export",
      "__export_format": 4,
      "__export_date": "2024-06-27T20:29:12.466Z",
      "__export_source": "insomnia.desktop.app:v9.2.0",
      "resources": [
        {
          "_id": "req_47d3b408ad964eb4acc77cff2260f7fe",
          "parentId": "wrk_da7d1b1186a241bc8be2975c45a40b14",
          "modified": 1719520023618,
          "created": 1719517406494,
          "url": "https://caixaeletronico.onrender.com/caixa",
          "name": "New Request",
          "description": "",
          "method": "POST",
          "body": {
            "mimeType": "application/json",
            "text": "{\n\t\"valor\": 156\n}"
          },
          "preRequestScript": "",
          "parameters": [],
          "headers": [
            {
              "name": "Content-Type",
              "value": "application/json"
            },
            {
              "name": "User-Agent",
              "value": "insomnia/9.2.0"
            }
          ],
          "authentication": {},
          "metaSortKey": -1719517406494,
          "isPrivate": false,
          "pathParameters": [],
          "settingStoreCookies": true,
          "settingSendCookies": true,
          "settingDisableRenderRequestBody": false,
          "settingEncodeUrl": true,
          "settingRebuildPath": true,
          "settingFollowRedirects": "global",
          "_type": "request"
        },
        {
          "_id": "wrk_da7d1b1186a241bc8be2975c45a40b14",
          "parentId": null,
          "modified": 1719517400828,
          "created": 1719517400828,
          "name": "Saque",
          "description": "",
          "scope": "collection",
          "_type": "workspace"
        },
        {
          "_id": "env_c25cfc1dd3f850a0e008f9d0e9bc067e9d5a7e81",
          "parentId": "wrk_da7d1b1186a241bc8be2975c45a40b14",
          "modified": 1719517400829,
          "created": 1719517400829,
          "name": "Base Environment",
          "data": {},
          "dataPropertyOrder": null,
          "color": null,
          "isPrivate": false,
          "metaSortKey": 1719517400829,
          "_type": "environment"
        },
        {
          "_id": "jar_c25cfc1dd3f850a0e008f9d0e9bc067e9d5a7e81",
          "parentId": "wrk_da7d1b1186a241bc8be2975c45a40b14",
          "modified": 1719517400830,
          "created": 1719517400830,
          "name": "Default Jar",
          "cookies": [],
          "_type": "cookie_jar"
        }
      ]
    }
    </code></pre>

      <p>
        Para mais detalhes sobre como utilizar a API, consulte a documentação
        completa no README.
      </p>

      <h2>Desafio e Solução</h2>
      <div class="challenge">
        <p>
          Inicialmente, não enfrentei desafios. Após finalizar a lógica de cálculo
          e testá-la, tudo parecia estar correto. No entanto, ao inserir o valor
          126, que é um número inteiro e deveria ser facilmente processado por um
          sistema de saque, descobri um problema na lógica que desenvolvi.
        </p>
        <p>
          Originalmente, minha abordagem era iterar de forma decrescente,
          começando pelas cédulas de maior valor e tentando encaixar o restante
          nos valores menores até não sobrar nenhum resto. Entretanto, eu sempre
          recebia um erro quando o resto do valor não era zero, indicando "Erro:
          Saque não permitido para o valor informado."
        </p>
        <p>
          Ao revisar os cálculos, percebi que, em vez de utilizar uma cédula de
          100, uma de 20 e três de 2 para compor 126, o sistema estava retornando
          uma de 100, uma de 20 e uma de 5, deixando um resto de 1. Para resolver
          isso, adicionei uma lógica especial para a última iteração: se houvesse
          um resto, eu ajustava a quantidade de cédulas de 5 somando o resto ao
          número de cédulas anteriores e subtraindo o valor do saque.
        </p>
        </div>
        <h2>Como Utilizar</h2>

        <h3>Instalação</h3>
        <pre><code>npm install</code></pre>
      
        <h3>Executar Testes (Modo Watch)</h3>
        <pre><code>npm run test:watch</code></pre>
      
        <h3>Verificar Cobertura de Testes</h3>
        <pre><code>npm run test:coverage</code></pre>
      
        <h3>Construir o Projeto</h3>
        <pre><code>npm run build</code></pre>
      
        <h3>Iniciar a Aplicação</h3>
        <pre><code>npm run start</code></pre>
  </body>
</html>
        
