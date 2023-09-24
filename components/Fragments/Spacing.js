
import { useSession } from 'next-auth/react';

export const Spacing01 = () => {

    return (

        <br></br>
       
    );
}

export const Spacing02 = () => {

    return (

        <br className="hidden md:block"></br>
       
    );
}

export const Spacing03 = () => {

    return (

        <br className="block md:hidden"></br>
       
    );
}

export const Spacing21 = () => {

    const { status, data: session } = useSession();

    return (

        <>

        {status === 'loading' ? ( 'Loading' ) : session?.user?.isAdmin && 

        <br></br>

        }

        </>
       
    );
}

