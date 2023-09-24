
import { useSession } from 'next-auth/react';

export const Header01 = ({section}) => {

    return (
        <h1 className="text-2xl md:text-4xl font-bold" >
            {section.content}
        </h1>
    );
}

export const Header02 = ({section}) => {

    return (
        <h1 className="text-2xl md:text-2xl font-semibold" >
            {section.content}
        </h1>
    );
}

export const Header03 = ({section}) => {

    return (
        <h2 className="text-2xl md:text-3xl font-semibold" >
            {section.content}
        </h2>
    );
}

export const Header2a = ({section}) => {

    const { status, data: session } = useSession();

    return (

        <>

        {status === 'loading' ? ( 'Loading' ) : session?.user?.isAdmin && 

        <h1 className="text-2xl md:text-4xl font-bold" >
            {section.content}
        </h1>

        }

        </>
    );
}

