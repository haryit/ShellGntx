
    const searchInput = document.getElementById('search-input');
    const optionsList = document.getElementById('headlessui-combobox-hary');
    const modalSearch = document.getElementById('modal-search');


    searchInput.addEventListener('click', function() {
            modalSearch.style.display = 'block'; 
        });

        
        document.addEventListener('click', function(event) {
            if (!searchInput.contains(event.target) && !modalSearch.contains(event.target)) {
                modalSearch.style.display = 'none'; 
            }
        });


    searchInput.addEventListener('input', async (e) => {
        const searchTerm = e.target.value.trim();
        if (searchTerm.length > 0) {
            const response = await fetch(`/search?term=${searchTerm}`);
            const data = await response.json();
            if (data.length === 0) {
                
                const errorMessage = `
                    <div class="flex flex-col items-center justify-center px-6 py-14 sm:px-14">
                        <p class="mt-4 text-sm text-foreground">We couldn't find any products with that term. Please try again.</p>
                    </div>
                `;
                optionsList.innerHTML = errorMessage;
            } else {
                
                renderOptions(data);
            }
        } else {
            optionsList.innerHTML = '';
        }
    });

    function renderOptions(data) {
    optionsList.innerHTML = '';
    data.forEach((item) => {
        const optionHTML = `
         
<a href="/id/${item.kode}" style="display: flex; align-items: center; gap: 16px; border-radius: 8px; transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; text-decoration: none; outline: none;">
    <img alt="${item.nama}" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" 
         style="width: 64px; height: 64px; border-radius: 16px; object-fit: cover; color: transparent;" 
         src="${item.thumbnail}" sizes="100vw">
    <div style="display: flex; flex-direction: column; gap: 2px; color: var(--secondary-foreground-color);">
        <p style="font-weight: bold;">${item.nama}</p>
        <p style="font-size: 0.875rem;">${item.sub_nama}</p>
    </div>
</a>
          
        `;
        optionsList.insertAdjacentHTML('beforeend', optionHTML);
    });
}

    
    modalSearch.addEventListener('hidden.bs.modal', function () {
        document.body.style.overflow = 'auto';
    });
