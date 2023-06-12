const refs = {
  tableBody: document.querySelector('[data-table-body]'),
};

const customersData = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225)555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    active: true,
  },
];

const createMarkup = data => {
  return data
    .map(customer => {
      const { name, company, phone, email, country, active } = customer;

      return `
          <tr>
          <td>${name}</td>
          <td>${company}</td>
          <td>${phone}</td>
          <td>${email}</td>
          <td>${country}</td>
          <td>${active ? 'Active' : 'Inactive'}</td>
        </tr>
        `;
    })
    .join('');
};

refs.tableBody.insertAdjacentHTML('beforeend', createMarkup(customersData));
