let ids = new Set( );

const charset = '123456789abcdefghijklnopqrstuvwxyzABCDEFGHIKPLMNOPQRSTUVWXYZ_'

const generateID = ( len: number ): string => {
    return new Array(len).fill(0).map( x => charset.charAt(Math.floor(Math.random( ) * charset.length))).join('');
}

export function randomID( len: number ) {
    const id = generateID( len );
    if( ids.has(id) ) return randomID( len );
    ids.add( id );
    return id;
}

