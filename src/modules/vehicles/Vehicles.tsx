import React from "react";
import {useQuery} from "@apollo/client";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import List from "../../components/List";
import {Avatar} from "../../components/Avatar";
import {GetVehicles} from "../../graphql/services/vehicles/__generated__/GetVehicles";
import {GET_VEHICLES} from "../../graphql/services/vehicles/queries";

const Vehicles: React.FC = () => {
    const {data, loading} = useQuery<GetVehicles>(GET_VEHICLES);
    if (loading) return <Loading/>
    return (
        <div>
            <h1>Vehicles <span>({data?.allVehicles?.totalCount})</span></h1>
            <List.ListContainer>
                {data?.allVehicles?.vehicles?.map(item => (
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
export default Vehicles;