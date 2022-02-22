import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import GET_VEHICLES from "../../graphql/services/vehicles/queries";
import Card from "../../components/Card";
import List from "../../components/List";
import {Avatar} from "../../components/Avatar";

const Vehicles: React.FC = () => {
    const {data, loading} = useQuery(GET_VEHICLES);
    if (loading) return <Loading/>
    const {totalCount, vehicles} = data.allVehicles;
    return (
        <div>
            <h1>Vehicles <span>({totalCount})</span></h1>
            <List.ListContainer>
                {vehicles.map((vehicle: any) => (
                    <Card.LinkCard to="vehicle/1">
                        <List.ListWrapperAvatar>
                            <Avatar name={vehicle.name}/>
                            <div className="title">{vehicle.name}</div>
                        </List.ListWrapperAvatar>
                    </Card.LinkCard>
                ))}
            </List.ListContainer>
        </div>
    )
}
export default Vehicles;