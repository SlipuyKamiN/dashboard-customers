import { getUsers } from './api';
import debounce from 'lodash.debounce';

const refs = {
  tableBody: document.querySelector('[data-table-body]'),
  totalCounter: document.querySelector('[data-total-counter]'),
  sortByButtons: document.querySelectorAll('[data-sort-by]'),
  searchInput: document.querySelector('[data-search-input]'),
};

let data = [];
let reverse = true;

(async () => {
  data = await getUsers();
})();

const handleSort = async event => {
  let sortBy = event.target.dataset.sortBy;

  let sortedData = data.sort((prevItem, nextItem) => {
    if (sortBy === 'id') {
      if (reverse) {
        return nextItem.id - prevItem.id;
      }
      return prevItem.id - nextItem.id;
    }

    if (reverse) {
      return eval(`prevItem.${sortBy}`).localeCompare(
        eval(`nextItem.${sortBy}`)
      );
    }

    return eval(`nextItem.${sortBy}`).localeCompare(eval(`prevItem.${sortBy}`));
  });

  reverse = !reverse;
  createMarkup(sortedData);
};

const handleSearch = async ({ target: { value } }) => {
  value = value.toLowerCase();

  let filteredData = data.filter(({ name, username, address, company }) => {
    return (
      name.toLowerCase().includes(value) ||
      username.toLowerCase().includes(value) ||
      address.city.toLowerCase().includes(value) ||
      company.name.toLowerCase().includes(value)
    );
  });
  createMarkup(filteredData);
};

const createMarkup = async data => {
  if (!data) {
    data = await getUsers();
  }

  const markup = data
    .map(user => {
      const { id, name, username, email, address, company } = user;

      return `
          <tr class="table__body-row">
          <td>${id}</td>
          <td>${name}</td>
          <td>${username}</td>
          <td>${email}</td>
          <td>${address.city}</td>
          <td>${company.name}</td>
        </tr>
        `;
    })
    .join('');

  refs.tableBody.innerHTML = markup;
  refs.totalCounter.innerHTML = data.length;
};
createMarkup();

refs.sortByButtons.forEach(button => {
  button.addEventListener('click', handleSort);
});
refs.searchInput.addEventListener('input', debounce(handleSearch, 250));
