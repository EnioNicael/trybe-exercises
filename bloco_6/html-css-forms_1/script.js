const statesList = [
  { uf: 'AC', nome: 'Acre' },
  { uf: 'AL', nome: 'Alagoas' },
  { uf: 'AP', nome: 'Amapá' },
  { uf: 'AM', nome: 'Amazonas' },
  { uf: 'BA', nome: 'Bahia' },
  { uf: 'CE', nome: 'Ceará' },
  { uf: 'DF', nome: 'Distrito Federal' },
  { uf: 'ES', nome: 'Espirito Santo' },
  { uf: 'GO', nome: 'Goiás' },
  { uf: 'MA', nome: 'Maranhão' },
  { uf: 'MS', nome: 'Mato Grosso do Sul' },
  { uf: 'MT', nome: 'Mato Grosso' },
  { uf: 'MG', nome: 'Minas Gerais' },
  { uf: 'PA', nome: 'Pará' },
  { uf: 'PB', nome: 'Paraíba' },
  { uf: 'PR', nome: 'Paraná' },
  { uf: 'PE', nome: 'Pernambuco' },
  { uf: 'PI', nome: 'Piauí' },
  { uf: 'RJ', nome: 'Rio de Janeiro' },
  { uf: 'RN', nome: 'Rio Grande do Norte' },
  { uf: 'RS', nome: 'Rio Grande do Sul' },
  { uf: 'RO', nome: 'Rondônia' },
  { uf: 'RR', nome: 'Roraima' },
  { uf: 'SC', nome: 'Santa Catarina' },
  { uf: 'SP', nome: 'São Paulo' },
  { uf: 'SE', nome: 'Sergipe' },
  { uf: 'TO', nome: 'Tocantins' }
];

const showStates = function () {
  const selectElement = document.getElementById('uf');
  for (let index = 0; index < statesList.length; index += 1) {
    const optionElement = document.createElement('option');
    optionElement.value = statesList[index].uf;
    optionElement.innerText = statesList[index].nome;
    selectElement.appendChild(optionElement);
  }
};

const dateSplit = function (date) {
  const finalDate = date.split('/');
  return finalDate;
}

const validateDay = function (day) {
  if (day > 0 && day < 31) {
    return true;
  }
  return false;
};

const validateMonth = function (month) {
  if (month > 0 && month < 12) {
    return true;
  }
  return false;
};

const validateYear = function (year) {
  if (year >= 0) {
    return true;
  }
  return false;
};

const dateValidate = function (date) {
  const finalDate = dateSplit(date);
  const day = validateDay(finalDate[0]);
  const month = validateMonth(finalDate[1]);
  const year = validateYear(finalDate[2]);

  console.log(day, month, year);
  if (!day && !month && !year) {
    alert('Preencha o campo data de inicio corretamente com datas válidas separadas por /');
  }
};

function handleClickSendButton(event) {
  event.preventDefault();
  const date = document.getElementById('dt-inicio').value;
  console.log('value' + date);
  dateValidate(date);
}

const sendForm = function () {
  const buttonElement = document.getElementById('btn-submit');
  buttonElement.addEventListener('click', handleClickSendButton);
};

window.onload = function () {
  showStates();
  sendForm();
};