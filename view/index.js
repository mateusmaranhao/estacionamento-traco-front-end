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
      <table>
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

export const view = {
  getSignup,
  getClient
}