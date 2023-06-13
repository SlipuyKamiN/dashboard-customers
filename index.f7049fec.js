!function(){let e={tableBody:document.querySelector("[data-table-body]"),sideBarLogo:document.querySelector("[data-toggle-side-bar]"),sideBar:document.querySelector("[data-side-bar]")};e.sideBarLogo.addEventListener("click",()=>{e.sideBar.classList.toggle("open")}),e.tableBody.insertAdjacentHTML("beforeend",[{name:"Jane Cooper",company:"Microsoft",phone:"(225)555-0118",email:"jane@microsoft.com",country:"United States",active:!0},{name:"Floyd Miles",company:"Yahoo",phone:"(205)555-0100",email:"floyd@yahoo.com",country:"Kiribati",active:!1},{name:"Ronald Richards",company:"Adobe",phone:"(302)555-0107",email:"roland@adobe.com",country:"Israel",active:!1},{name:"Marvin McKinney",company:"Tesla",phone:"(252)555-0126",email:"marvin@tesla.com",country:"Iran",active:!0},{name:"Jerome Bell",company:"Google",phone:"(629)555-0129",email:"jerome@google.com",country:"R\xe9union",active:!0},{name:"Katryn Murphy",company:"Microsoft",phone:"(406)555-0120",email:"katryn@microsoft.com",country:"Cura\xe7ao",active:!0},{name:"Jacob Jones",company:"Yahoo",phone:"(208) 555-0112",email:"jacob@yahoo.com",country:"Brazil",active:!0},{name:"Kristin Watson",company:"Facebook",phone:"(704) 555-0127",email:"kristin@facebook.com",country:"\xc5land Islands",active:!1}].map(e=>{let{name:a,company:o,phone:t,email:n,country:c,active:i}=e;return`
          <tr class="table__body-row">
          <td>${a}</td>
          <td>${o}</td>
          <td>${t}</td>
          <td>${n}</td>
          <td>${c}</td>
          <td>
          <span class="status ${i?"status--active":"status--inactive"}">${i?"Active":"Inactive"}</span>
          </td>

        </tr>
        `}).join(""))}();
//# sourceMappingURL=index.f7049fec.js.map
