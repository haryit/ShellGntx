
  
    const mail = document.getElementById('mail');
const message = document.getElementById('message');
const kirimDataButton = document.getElementById('hary');
const apiKey = document.getElementById('api-key').value;
kirimDataButton.addEventListener('click', (e) => {
  e.preventDefault();

  const userid = mail.value;
  const zoneid = message.value;

  

  const formData = new FormData();
  formData.append('mail', userid);
  formData.append('message', zoneid);

  // Kirim data menggunakan fetch API
  fetch('https://haryonokudadiri.com/sendmail', {
    method: 'POST',
    body: formData,
    headers: {
    'Authorization': `${apiKey}`
  }
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === true) {



    const hasilKalkulasiDiv = document.getElementById('HasilKalkulasi');
    hasilKalkulasiDiv.innerHTML = `<div class="mt-2 text-wrap rounded-xl bg-muted/50 p-3 text-muted-foreground">
    <div class="w-full max-w-md bg-white border border-gray-200 shadow rounded-lg p-5 mt-3">
                      
                        
                            <code class="space-y-1 text-gray-500 leading-loose">
                                {

                                  ${JSON.stringify(data)}
}
                            </code>
                            
                            
                    </div>
</div>`;

}else{
 const hasilKalkulasiDiv = document.getElementById('HasilKalkulasi');
    hasilKalkulasiDiv.innerHTML = `<div  class="rounded-md border border-transparent bg-muted p-4 text-center text-sm font-semibold uppercase ring-1 ring-primary"><strong class="text-primary">${data.message}</strong></div>`;

}
  })
  .catch(error => {
    const hasilKalkulasiDiv = document.getElementById('HasilKalkulasi');
    hasilKalkulasiDiv.innerHTML = `<div  class="rounded-md border border-transparent bg-muted p-4 text-center text-sm font-semibold uppercase ring-1 ring-primary"><strong class="text-primary">${error.message}</strong></div>`;
  });
});
