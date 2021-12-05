/* Your specific elements. You could also use something like document.getElementById if you would like.*/
document.querySelector('#womginx').addEventListener('click', () => {
    var url = document.querySelector('#url').value,
        domain = document.domain;

    if (domain.split('.').length > 2) domain = domain.split('.').slice(-2).join('.');

    /* Redirect to subdomain */
    window.location.href = "https://cdn." + domain + "/main/" + url;
    /* Be sure you include the cookie below since basic cookie authentication is setup already for Womginx by default */
    document.cookie = 'womginx_are_you_a_bot=no; expires=' + (Date.now() + 259200) + '; SameSite=Lax; domain=.' + auth + '; path=/; Secure;';
});