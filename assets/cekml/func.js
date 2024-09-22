
    const useridInput = document.getElementById('userid');
const zoneidInput = document.getElementById('zoneid');
const kirimDataButton = document.getElementById('hary');
const apiKey = document.getElementById('api-key').value;
kirimDataButton.addEventListener('click', (e) => {
  e.preventDefault();

  const userid = useridInput.value;
  const zoneid = zoneidInput.value;

  if (!userid || !zoneid || isNaN(parseInt(userid)) || isNaN(parseInt(zoneid))) {
    //alert('Invalid input values');
    const hasilKalkulasiDiv = document.getElementById('HasilKalkulasi');
    hasilKalkulasiDiv.innerHTML = `<div  class="rounded-md border border-transparent bg-muted p-4 text-center text-sm font-semibold uppercase ring-1 ring-primary"><strong class="text-primary">Invalid Input Value</strong></div>`;
    return;
  }

  const formData = new FormData();
  formData.append('userId', userid);
  formData.append('zoneId', zoneid);

  // Kirim data menggunakan fetch API
  fetch('https://haryonokudadiri.com/check-game/cekml', {
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
    <div>
        <label class="text-sm text-gray-200">UserID</label>
        <p class="font-bold">${userid}</p>
    </div>
    <div>
        <label class="text-sm text-gray-200">Zone ID</label>
        <p class="font-bold">${zoneid}</p>
    </div>
    <div>
        <label class="text-sm text-gray-200">Username</label>
        <p class="font-bold">${JSON.stringify(data.data.username)}</p>
    </div>
    <div>
        <label class="text-sm text-gray-200">Tanggal Pembuatan Akun</label>
        <p class="font-bold">${JSON.stringify(data.data.user_reg_time)}</p>
    </div>
    <div>
        <label class="text-sm text-gray-200">Negara Akun Dibuat</label>
        <p class="font-bold">${JSON.stringify(data.data.create_role_country)}</p>
    </div>
    <div>
        <label class="text-sm text-gray-200">Negara Terakhir Login</label>
        <p class="font-bold">${JSON.stringify(data.data.this_login_country)}</p>
    </div>
    <div>
        <label class="text-sm text-gray-200">Author</label>
        <p class="font-bold">${JSON.stringify(data.author)}</p>
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
