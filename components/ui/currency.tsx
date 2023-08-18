'use client'

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US",{
    style: 'currency',
    currency: "USD"
})

interface CurrencyProps{
    value?: string;
}

const Currency:React.FC<CurrencyProps> = ({
    value
}) => {
    const [ isMounted, setIsMonted] = useState(false);

    useEffect(() =>{ setIsMonted(true)},[])

    if(!isMounted) {
        return null;
    }
    
    return ( 
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency;