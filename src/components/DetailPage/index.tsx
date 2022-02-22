import React from "react";

interface DetailPageProps {
    title?: string | null;
}

const DetailPage: React.FC<DetailPageProps> = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    )
}


export default DetailPage;