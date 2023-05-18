import React, { useRef, useEffect } from 'react';
import {Tooltip} from "react-tooltip";

export const Items = ({icon, href, tooltipContent}) => {
    const tooltipRef = useRef(null);

    useEffect(() => {
      if (tooltipRef.current) {
        tooltipRef.current.show();
      }
    }, []);

    return(
        <>
            <a 
                className="items-button" 
                href={href} 
                target="_blank" rel="noreferrer" 
                data-tooltip-id="myTooltip"
                data-tooltip-content={tooltipContent}
            >
                {icon}
            </a>

            <Tooltip 
                className="tooltip" 
                id="myTooltip" 
                ref={tooltipRef}
                place="top"
                effect="solid"
            >
                {tooltipContent}
            </Tooltip>
        </>
    )
}