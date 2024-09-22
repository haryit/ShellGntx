
  const searchInput = document.getElementById('search-input');
  const optionsList = document.getElementById('headlessui-combobox-hary');
  const cdn = document.currentScript.dataset.cdn;
const urlweb = document.currentScript.dataset.urlweb;
const lang = document.currentScript.dataset.lang;

  searchInput.addEventListener('input', async (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm.length > 0) {
      const response = await fetch(`${urlweb}/search?term=${searchTerm}`);
      const data = await response.json();
      if (data.length === 0) {
        // Data not found, display error message
        const errorMessage = `
          <div class="flex flex-col items-center justify-center px-6 py-14 sm:px-14">
            <p class="mt-4 text-sm text-foreground">We couldn't find any products with that term. Please try again.</p>
          </div>
        `;
        optionsList.innerHTML = errorMessage;
      } else {
        // Data found, display search results
        renderOptions(data);
      }
    } else {
      optionsList.innerHTML = '';
    }
  });

  function renderOptions(data) {
    optionsList.innerHTML = '';
    data.forEach((item) => {
      //const optionHTML = `<a href="/<?php echo str_replace(' ','-',strtolower('Game')); ?>/${item.lug}">
        const optionHTML = `<a href="${urlweb}/${lang}/${item.lug}">
        <li
          class="flex cursor-default select-none items-center rounded-md px-3 py-2" 
          id="headlessui-combobox-option-:r4h:" 
          role="option" 
          tabindex="-1" 
          aria-selected="false" 
          data-headlessui-state=""
        >
          <img 
            alt="${item.kategori}" 
            loading="lazy" 
            width="300" 
            height="300" 
            decoding="async" 
            data-nimg="1" 
            class="aspect-square w-24 rounded-2xl object-cover" 
            sizes="100vw"
            src="${cdn}/upload/${item.image}"
          >
          <span class="ml-3 flex-auto truncate">${item.kategori}</span>
        </li></a>
      `;
      optionsList.insertAdjacentHTML('beforeend', optionHTML);
    });
  }
