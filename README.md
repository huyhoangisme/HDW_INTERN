<!-- LOGGIN -->

if loggin then redirect admin page
ortherwise, redirect login pages

call api login to get token + user infor
set token to local storage
redirect to admin page

<!LOGGOUT>

clear accessToken from localStorage;
redirect to login pages

authSaga:
if login watcher logout
else watche login

redirect page in saga use connect router
