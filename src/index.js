const refs = {
  tableBody: document.querySelector('[data-table-body]'),
  sideBarLogo: document.querySelector('[data-toggle-side-bar]'),
  sideBar: document.querySelector('[data-side-bar]'),
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
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205)555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    active: false,
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302)555-0107',
    email: 'roland@adobe.com',
    country: 'Israel',
    active: false,
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252)555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    active: true,
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629)555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    active: true,
  },
  {
    name: 'Katryn Murphy',
    company: 'Microsoft',
    phone: '(406)555-0120',
    email: 'katryn@microsoft.com',
    country: 'Curaçao',
    active: true,
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    active: true,
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    active: false,
  },
];

const createMarkup = data => {
  return data
    .map(customer => {
      const { name, company, phone, email, country, active } = customer;

      return `
          <tr class="table__body-row">
          <td>${name}</td>
          <td>${company}</td>
          <td>${phone}</td>
          <td>${email}</td>
          <td>${country}</td>
          <td>
          <span class="status ${
            active ? 'status--active' : 'status--inactive'
          }">${active ? 'Active' : 'Inactive'}</span>
          </td>

        </tr>
        `;
    })
    .join('');
};

const toggleSideBar = () => {
  refs.sideBar.classList.toggle('open');
};

refs.sideBarLogo.addEventListener('click', toggleSideBar);
refs.tableBody.insertAdjacentHTML('beforeend', createMarkup(customersData));
