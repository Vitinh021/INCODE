# API-INCODE

API RESTfull para um software educacional que ensina as pessoas a programar de forma gamificada. Todo o projeto está containerizado com **Docker**, facilitando a execução em qualquer ambiente.

---

## 📦 Tecnologias

- Node.js + Express
- MySQL
- Docker + Docker Compose
- Nodemon
- dotenv

---

## Requisitos

Antes de começar, instale:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Subindo o projeto

Clone o repositório:

```bash
git clone https://github.com/Vitinh021/API-INCODE.git -> clonar projeto
docker-compose up --build -> construir
docker-compose up         -> rodar
docker-compose down       -> parar
```

---

## Rotas da API

### Usuários

| Método | Rota                        | Descrição                |
|--------|-----------------------------|--------------------------|
| GET    | `/usuarios`                 | Lista todos os usuários  |
| GET    | `/usuarios/id/:id`          | Busca usuário por ID     |
| GET    | `/usuarios/apelido/:apelido`| Busca usuário por apelido|
| POST   | `/usuarios`                 | Cria novo usuário        |
| PUT    | `/usuarios/:id`             | Atualiza usuário         |
| DELETE | `/usuarios/:id`             | Remove usuário           |

**Exemplo de criação:**
```json
{
  "apelido": "joao",
  "nome": "João Silva",
  "senha": "123456",
  "idade": 25
}
```

---

### Níveis

| Método | Rota                        | Descrição                |
|--------|-----------------------------|--------------------------|
| GET    | `/niveis`                   | Lista todos os níveis    |
| GET    | `/niveis/id/:id`            | Busca nível por ID       |
| GET    | `/niveis/titulo/:titulo`    | Busca nível por título   |
| POST   | `/niveis`                   | Cria novo nível          |
| PUT    | `/niveis/:id`               | Atualiza nível           |
| DELETE | `/niveis/:id`               | Remove nível             |

**Exemplo de criação:**
```json
{
  "titulo": "Fácil",
  "descricao": "Nível introdutório"
}
```

---

### Questões

| Método | Rota                              | Descrição                    |
|--------|-----------------------------------|------------------------------|
| GET    | `/questoes`                       | Lista todas as questões      |
| GET    | `/questoes/id/:id`                | Busca questão por ID         |
| GET    | `/questoes/nivel/:nivel_id`       | Lista questões por nível     |
| POST   | `/questoes`                       | Cria nova questão            |
| PUT    | `/questoes/:id`                   | Atualiza questão             |
| DELETE | `/questoes/:id`                   | Remove questão               |

**Exemplo de criação:**
```json
{
  "nivel_id": 1,
  "tipo": "aberta",
  "texto_questao": "O que é Node.js?",
  "resposta": "Node.js é um ambiente de execução JavaScript."
}
```

---

### Respostas

| Método | Rota                                  | Descrição                    |
|--------|---------------------------------------|------------------------------|
| GET    | `/respostas`                          | Lista todas as respostas     |
| GET    | `/respostas/id/:id`                   | Busca resposta por ID        |
| GET    | `/respostas/usuario/:usuario_id`      | Lista respostas de um usuário|
| GET    | `/respostas/questao/:questao_id`      | Lista respostas de uma questão|
| POST   | `/respostas`                          | Cria nova resposta           |
| PUT    | `/respostas/:id`                      | Atualiza resposta            |
| DELETE | `/respostas/:id`                      | Remove resposta              |

**Exemplo de criação:**
```json
{
  "usuario_id": 1,
  "questao_id": 2,
  "resposta": "Resposta do usuário",
  "resultado": true
}
```

---

## Exemplo de uso com cURL

```bash
curl -X POST  http://localhost:3000/api/niveis \
-H "Content-Type: application/json" \
-d '{"titulo":"Fácil","descricao":"Nível introdutório"}'
```

---

## Observações

- Todas as rotas aceitam e retornam JSON.
- Certifique-se de que o servidor está rodando em `http://localhost:3000`.

