
    $(document).ready(function() {
        $('#login-form').submit(function(event) {
            event.preventDefault();
            //console.log($(this).serialize());
            $.ajax({
                type: 'POST',
                url: '/auth/login',
                data: $(this).serialize(),
                dataType: 'json',
                success: function(response) {
    if (response.status === '2fa_required') {
        // Display 2FA verification form
        $('#2fa-form').show();
    } else if (response.status === 'success') {
        // Login successful, redirect to dashboard
          const successMessage = `
    <div class="animate-fadeOut" style="left: 0px; right: 0px; display: flex; position: absolute; transition: all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s; transform: translateY(0px); top: 0px; justify-content: center;">
      <div class="toast-notification flex w-full max-w-md rounded-lg bg-background shadow-lg ring-1 ring-muted ring-opacity-5">
        <div class="w-0 flex-1 p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6 text-success">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="ml-3 flex-1">
              <p class="text-sm font-medium text-foreground">Berhasil masuk!</p>
              <p class="mt-1 text-sm text-foreground/75">Redirecting to dashboard in 3 seconds. Please wait...</p>
            </div>
          </div>
        </div>
        <div class="border-murky-100 flex border-l">
          <button class="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-foreground hover:text-foreground/75 focus:outline-none" id="close-button">Tutup</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('error-message-container').innerHTML += successMessage;
          setTimeout(function() {
    window.location.href = '/dashboard/';
  }, 3000); // 1000ms = 1 detik
    } else if (response.status === 'wrongpw'){
        const errorMessage = `
    <div class="flex items-center justify-between rounded-md bg-destructive px-4 py-3 text-sm" id="username-error-message">
      <div>Password Anda Salah</div>
      <button type="button" onclick="hideUsernameErrorMessage()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  document.getElementById('error-message-container').innerHTML = errorMessage;
    }else if (response.status === 'error'){
       const errorMessage = `
    <div class="flex items-center justify-between rounded-md bg-destructive px-4 py-3 text-sm" id="username-error-message">
      <div>Username Tidak Ditemukan</div>
      <button type="button" onclick="hideUsernameErrorMessage()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  document.getElementById('error-message-container').innerHTML = errorMessage;
    }else if (response.status === '!captcha'){
       const errorMessage = `
   <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none">
  <div class="globalalerthary hide-after-5s" style="left: 0px; right: 0px; display: flex; position: absolute; top: 0px; justify-content: center;">
    <div class="alerthary" style="animation: 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go3223188581;">
      <div class="alertrina">
        <div class="alertdina"></div>
        <div class="alertfeny">
          <div class="alertharyrina"></div>
        </div>
      </div>
      <div role="status" aria-live="polite" class="alertmasalalu">Mohon selesaikan CAPTCHA terlebih dahulu!</div>
    </div>
  </div>
</div>
  `;
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = errorMessage;
  document.body.appendChild(errorDiv);
}else if (response.status === 'robot'){
       const errorMessage = `
   <div style="position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none">
  <div class="globalalerthary hide-after-5s" style="left: 0px; right: 0px; display: flex; position: absolute; top: 0px; justify-content: center;">
    <div class="alerthary" style="animation: 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go3223188581;">
      <div class="alertrina">
        <div class="alertdina"></div>
        <div class="alertfeny">
          <div class="alertharyrina"></div>
        </div>
      </div>
      <div role="status" aria-live="polite" class="alertmasalalu">${response.message}</div>
    </div>
  </div>
</div>
  `;
  const errorDiv = document.createElement('div');
  errorDiv.innerHTML = errorMessage;
  document.body.appendChild(errorDiv);
    }else if (response.status === 'notverif'){
       const errorMessage = `
    <div class="flex items-center justify-between rounded-md bg-destructive px-4 py-3 text-sm" id="username-error-message">
      <div>Verifikasi Akun Anda Terlebih Dahulu</div>
      <button type="button" onclick="hideUsernameErrorMessage()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  `;
  document.getElementById('error-message-container').innerHTML = errorMessage;

   setTimeout(function() {
    var hary = response.dinda;
    window.location.href = `/confirm/${hary}`;
  }, 1000);
    }else {
        console.error('Unknown response status:', response.status);

    }


},
                error: function(xhr, status, error) {
                    console.error(error);
                }
            });
        });
    });
