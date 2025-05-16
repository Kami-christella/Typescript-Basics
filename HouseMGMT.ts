interface House{
ID: number,
District: string,
Rooms: number,
HouseCategory: string
}

interface IHouse{
    addHouse: (house: House) => void,
    removeHouse: (id: number) => void,
    displayHouses: () => void
}
class HouseManagement implements IHouse{
    public houses: House[] = [];
    constructor() {
    }
    addHouse(house: House){
        const houseExist = this.houses.find((h: House)=>h.ID === house.ID);
        if(houseExist){
            console.log(`House with ID ${house.ID} already exists.`);
            return;
        }
        else if(!houseExist){
            this.houses.push(house);
           console.log(`House added: ID: ${house.ID}, District: ${house.District}, Rooms: ${house.Rooms}, Category: ${house.HouseCategory}`);
        }
    }

    removeHouse(id: number): void{
        const houseIndex = this.houses.findIndex((h: House)=>h.ID === id);
        if(houseIndex === -1){
            console.log(`House with ID ${id} not found.`);
            return;
        }
        else if(houseIndex !== -1){
            this.houses.splice(houseIndex, 1);
           // console.log(`House with ID ${id} removed.`);
        }
    }
    editHouse(id: number, house: House): void{
        const houseIndex = this.houses.findIndex((h: House)=>h.ID === id);
        if(houseIndex === -1){
            console.log(`House with ID ${id} not found.`);
            return;
        }
        else if(houseIndex !== -1){
            this.houses[houseIndex] = house;
            console.log(`House with ID ${id} updated.`);
        }
    }
    displayHouses(): void{
        this.houses.map((h: House)=>{
            console.log(`House ID: ${h.ID}, District: ${h.District}, Rooms: ${h.Rooms}, Category: ${h.HouseCategory}`);
        });
    }
}
const houseManagementObj = new HouseManagement();
houseManagementObj.addHouse({ID: 1, District: 'Downtown', Rooms: 3, HouseCategory: 'Residential'});
houseManagementObj.addHouse({ID: 2, District: 'CHIC', Rooms: 5, HouseCategory: 'Hotel'});
houseManagementObj.displayHouses();
houseManagementObj.editHouse(2,{ID: 2, District: 'Downtown', Rooms: 4, HouseCategory: 'Residential'});



// ID, District, Number of rooms and House category(RSIDENTIALS,HOTEL) 
// , add function in class to add house , remove house and display recorded houses.