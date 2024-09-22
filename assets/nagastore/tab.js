  function scrollTab(direction) {
        const container = document.querySelector('.kosweb-scroll');
        const scrollAmount = 100; // Jumlah piksel untuk menggulir

        if (direction === 'left') {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right') {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    }
