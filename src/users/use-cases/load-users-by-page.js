import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/user';

/**
 * 
 * @param {Number} page 
 * @returns { Promise<User[]> }
 */
export const loadUsersByPage = async ( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const res = await fetch(url);

    if (!res.ok) {
        console.error('HTTP error:', res.status);
        console.error(await res.text());
        return [];
    }

    const data = await res.json();

    const usersArray = Array.isArray(data)
        ? data
        : Array.isArray(data.data)
            ? data.data
            : [];

    if (!Array.isArray(usersArray)) {
        console.error('Respuesta inesperada:', data);
        return [];
    }

    const users = usersArray.map(localhostUserToModel);

    return users;
};