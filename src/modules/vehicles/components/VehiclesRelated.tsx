import React from "react";
import Card from "../../../components/Card";
import List from "../../../components/List";
import {Avatar} from "../../../components/Avatar";
import {GetVehiclesDetail_vehicle} from "../../../graphql/services/vehicles/__generated__/GetVehiclesDetail";

interface VehiclesProps {
    title: string;
    data?: (Pick<GetVehiclesDetail_vehicle, 'id' | 'name'> | null)[] | null
}

const VehiclesRelated: React.FC<VehiclesProps> = ({title, data}) => {
    if (data?.length === 0) return null;
    return (
        <div>
            <h2>{title}</h2>
            <List.ListContainer>
                {data?.map(item => (
                    <Card.LinkCard key={item?.id} to={`/vehicles/${item?.id}`}>
                        <List.ListWrapperAvatar>
                            <Avatar name={item?.name}/>
                            <div className="title">{item?.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default VehiclesRelated;