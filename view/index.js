const getSignup = () => {
    const main = document.getElementById('root');
  const dadosHTML = `
  <h1>Novo Cliente</h1>
      <form id="signup-form">
        <label for="type">Nome do cliente</label>
        <input type="text" id="name" placeholder="Digite aqui">

        <br><br>

        <label for="type">Modelo do veículo</label>
        <input type="text" id="model" placeholder="Digite aqui">

        <br><br>

        <label for="type">Tipo do Veículo</label>
        <select id="type">
          <option value="1">Carro</option>
          <option value="2">Moto</option>
        </select>

        <br><br>

        <label for="label">Placa do Veículo</label>
        <input type="text" id="label" placeholder="Digite aqui">

        <br><br>

        <label for="observation">Observações</label>
        <textarea id="observation" cols="30" rows="10"></textarea>

        <br><br>

        <button id="cancel" type="button">Cancelar</button>
        <button id="save" type="submit">Salvar</button>
      </form>
  `

  main.innerHTML = dadosHTML;
}

const getClient = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
    <section>
      <h1>Lista de Clientes</h1>
      <table id="tbody">
        <tr>
          <th>Cliente</th>
          <th>Modelo</th>
          <th>Placa</th>
          <th>Tipo</th>
          <th>Observações</th>
          <th>
            <a href="#">Novo</a>
          </th>
        </tr>
      </table>
    </section>
  `
  main.innerHTML = dadosHTML;
}

const getUpdate = () => {
  const main = document.getElementById('root');
const dadosHTML = `
<h1>Editar Cliente</h1>
    <form id="signup-form">
      <label for="type">Nome do cliente</label>
      <input type="text" id="name" placeholder="Digite aqui">

      <br><br>

      <label for="type">Modelo do veículo</label>
      <input type="text" id="model" placeholder="Digite aqui">

      <br><br>

      <label for="type">Tipo do Veículo</label>
      <select id="type">
        <option value="1">Carro</option>
        <option value="2">Moto</option>
      </select>

      <br><br>

      <label for="label">Placa do Veículo</label>
      <input type="text" id="label" placeholder="Digite aqui">

      <br><br>

      <label for="observation">Observações</label>
      <textarea id="observation" cols="30" rows="10"></textarea>

      <br><br>

      <button id="cancel" type="button">Cancelar</button>
      <button id="save" type="submit">Atualizar</button>
    </form>
`

main.innerHTML = dadosHTML;
}

const getCheckinHTML = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
    <section>
      <h2>Lista de Clientes do Estacionamento</h2>
      <br>
      <table id="tbody" class="tabela">
        <tr>
        <th>Modelo</th>
        <th>Placa</th>
        <th>Opção</th>
        </tr>
      </table>

      <div>
        <label for="select">Placa</label>
        <select id="select" class="input"></select>
        <a type="button" id="adicionar-novo">Adicionar Novo</a>
        <br>
        <div class="btn">
          <button id="checkin" class="btn-link">Check-in</button>
        </div>
      </div>
    </section>
  `
  main.innerHTML = dadosHTML;
}

const getCheckoutHTML = () => {
  const main = document.getElementById('root');
  const dadosHTML = `
    <section class="container">
      <h2>Dados do Cliente</h2>
      <br>
      <table class="tabela">
        <tr>
          <th>Cliente</th>
          <th>Modelo</th>
          <th>Placa</th>
        </tr>
        <tr id="tbody"></tr>
      </table>

      <div>
        <label>Total de Horas</label>
        <input 
          id="totalHora"
          class="input"
          type="text"
          placeholder="Total de Horas"
          disabled
        />
      </div>
      <br/>
      <div> 
        <label>Valor a pagar</label>
        <input
          id="valorPagar"
          class="input"
          type="text"
          placeholder="Valor a pagar"
          disabled
        />
      </div>
      <br/>
      <div class="btn">
        <button class="btn-link" id="finalizar">Finalizar</button>
      </div>
    </section>
  `
  main.innerHTML = dadosHTML;
}

export const view = {
  getSignup,
  getClient,
  getUpdate,
  getCheckinHTML,
  getCheckoutHTML,
}