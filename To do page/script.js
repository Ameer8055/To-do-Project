
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      displayData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  
  function displayData(data) {
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    tableBody.innerHTML = '';

  
    data.forEach((item) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td><input type="checkbox" class="checkbox"></td>
      `;
      tableBody.appendChild(row);
    });
    repeatMonitoring();
  }


  document.getElementById('fetchBtn').addEventListener('click', fetchData);

  function monitorCheckboxes() {
    return new Promise((resolve) => {
        const checkboxes = document.querySelectorAll('.checkbox');
        let checkedCount = 0;

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
              
                if (checkbox.checked) {
                    checkedCount++;
                } else {
                    checkedCount--;
                }

          
                if (checkedCount === 5) {
                    resolve('You have completed 5 tasks!');
                    checkedCount = 0;
                }
            });
        });
    });
}


function repeatMonitoring() {
    monitorCheckboxes().then(message => {
        alert(message);
        repeatMonitoring();
    });
}

