
import { useSession } from 'next-auth/react';

export const Paypal01 = ({section}) => {

    const { status, data: session } = useSession();

    console.log('suppose to pay HK$ 10.-');
    console.log('now pay ... ', section.amount)

    return (
        <>

        {status === 'loading' ? ( 'Loading' ) : session?.user?.isAdmin && 

        <form 
           
           action="https://www.paypal.com/cgi-bin/webscr" 
           method="post" 
           target="_top">
            <p>
                <input name="cmd" type="hidden" value="_s-xclick" /> 
                <input name="hosted_button_id" type="hidden" value="2F2CY3U6SHUKS" /> 
                <input 
                   alt="PayPal – The safer, easier way to pay online!" 
                   name="submit" 
                   src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" 
                   type="image" />
                <img src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" alt="" width="1" height="1" border="0" />
            </p>
            
        </form>

        }

        </>        
    );
}

export const Paypal02 = ({section}) => {

    console.log('suppose to pay HK$ 200.-');
    console.log('now pay ... ', section.amount)

    return (
        <>

        <form 
            action="https://www.paypal.com/cgi-bin/webscr" 
            method="post" 
            target="_top">
           
            <p>
                
                <input name="cmd" type="hidden" value="_s-xclick" /> 
                <input name="hosted_button_id" type="hidden" value="64L3YTGFMHRUG" /> 
                <input 
                    alt="PayPal – The safer, easier way to pay online!" 
                    name="submit" 
                    src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" 
                    type="image" /> 
                <img src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" alt="" width="1" height="1" border="0" />
            
            </p>
            
        </form>
       
        </>        
    );
}

export const Paypal03 = ({section}) => {

    console.log('suppose to pay HK$ 600.-');
    console.log('now pay ... ', section.amount)

    return (
        <>

        <form 
            action="https://www.paypal.com/cgi-bin/webscr" 
            method="post" 
            target="_top">
                
            <p>
                    
                <input name="cmd" type="hidden" value="_s-xclick" /> 
                <input name="hosted_button_id" type="hidden" value="LGJ88CAGTKCFA" /> 
                <input 
                    alt="PayPal – The safer, easier way to pay online!" 
                    name="submit" 
                    src="https://www.paypalobjects.com/en_GB/HK/i/btn/btn_buynowCC_LG_wCUP.gif" 
                    type="image" /> 
                
                <img src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" alt="" width="1" height="1" border="0" />

            </p>
        </form>

        </>        
    );
}