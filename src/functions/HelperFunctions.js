import Cookies from 'universal-cookie';

function logOut() {
    const cookies = new Cookies();
    cookies.set('tokenLogin', null);
}
